import productModel from "@/models/products";
import { dbConnect } from "@/service/mongo";
import { replaceMongoIdInArray } from "@/utils/data-util";

export async function getAllProducts({
  search = "",
  category = "All",
  price = "",
  location = "",
  organic = false,
  page = 1,
  limit = 6,
  sort = "",
}) {
  await dbConnect();

  const query = {};

  const keyword = search.trim();
  const normalizedCategory = category.trim();

  // ✅ Category filter
  if (normalizedCategory && normalizedCategory !== "All") {
    const categoriesArray = normalizedCategory.split(",").map((c) => c.trim());

    query.category = {
      $in: categoriesArray.map((c) => new RegExp(`^${c}$`, "i")),
    };
  }

  // ✅ Price filter
  if (price) {
    if (price === "under30") query.price = { $lt: 30 };
    else if (price === "30-50") query.price = { $gte: 30, $lte: 50 };
    else if (price === "50-100") query.price = { $gte: 50, $lte: 100 };
    else if (price === "over100") query.price = { $gt: 100 };
  }

  // ✅ Location filter
  if (location) {
    query.location = new RegExp(`^${location}$`, "i");
  }

  // ✅ Organic filter
  if (organic === "true") {
    query.features = { $in: ["organic"] };
  }

  // ✅ Keyword search
  if (keyword) {
    query.name = { $regex: keyword, $options: "i" };
  }

  const skip = (page - 1) * limit;

  // ✅ Aggregation pipeline
  const pipeline = [
    { $match: query },
    {
      $addFields: {
        isOrganic: { $in: ["organic", "$features"] },
        reviewCount: { $size: { $ifNull: ["$reviews", []] } },
      },
    },
  ];

  // ✅ Sorting
  switch (sort) {
    case "priceLowHigh":
      pipeline.push({ $sort: { price: 1 } });
      break;
    case "priceHighLow":
      pipeline.push({ $sort: { price: -1 } });
      break;
    case "newest":
      pipeline.push({ $sort: { createdAt: -1 } });
      break;
    case "rating":
      pipeline.push({ $sort: { reviewCount: -1 } });
      break;
    case "featured":
      pipeline.push({ $sort: { isOrganic: -1 } }); // organic first
      break;
    default:
      pipeline.push({ $sort: { createdAt: -1 } }); // default = newest
      break;
  }

  // ✅ Pagination
  pipeline.push({ $skip: skip }, { $limit: limit });

  const products = await productModel.aggregate(pipeline);

  // ✅ Count total docs
  const total = await productModel.countDocuments(query);

  return {
    products: replaceMongoIdInArray(products),
    total,
    pages: Math.ceil(total / limit),
  };
}
