import { getProductById } from "@/app/actions";
import ProductDescription from "@/components/productDetails/ProductDescription";
import ProductImages from "@/components/productDetails/ProductImages";
import ProductInfo from "@/components/productDetails/ProductInfo";
import RelatedProduct from "@/components/productDetails/RelatedProduct";
import ReviewSection from "@/components/productDetails/ReviewSection";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const page = async ({ params: { id } }) => {
  const product = await getProductById(id);

  const {
    name,
    category,
    price,
    unit,
    stock,
    location,
    description,
    images,
    features,
    purchaseCount,
    reviews,
    farmName,
  } = product;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary-600">
                Home
              </Link>
            </li>
            <li>
              <FaChevronRight className=" text-gray-400 text-xs" />
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-500 hover:text-primary-600"
              >
                Products
              </Link>
            </li>
            <li>
              <FaChevronRight className=" text-gray-400 text-xs" />
            </li>
            <li className="text-gray-900 dark:text-white">Fresh Tomatoes</li>
          </ol>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductImages images={images} />

          <ProductInfo
            name={name}
            price={price}
            unit={unit}
            stock={stock}
            location={location}
            farmName={farmName}
            features={features}
          />
        </div>
        <ProductDescription description={description} />

        <ReviewSection reviews={reviews} />

        <RelatedProduct category={category} />
      </div>
    </>
  );
};

export default page;
