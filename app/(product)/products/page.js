import { getAllProducts } from "@/app/api/products/route";
import Pagination from "@/components/products/Pagination";
import ProductCard from "@/components/products/ProductCard";
import ProductSort from "@/components/products/ProductSort";
import SideBar from "@/components/products/SideBar";
import Link from "next/link";

const page = async ({ searchParams }) => {
  const {
    q = "",
    category = "All",
    price = "",
    location = "",
    organic = "",
    page = 1,
    sort = "",
  } = searchParams;

  const { products, total, pages } = await getAllProducts({
    search: q,
    category,
    price,
    location,
    organic,
    sort,
    page: Number(page),
    limit: 6,
  });

  const selectedCategories = category === "All" ? [] : category.split(",");
  const selectedPrice = price || "";
  const selectedLocation = location || "";
  const organicOnly = organic === "true";

  return (
    <>
      <div className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Fresh Products</h1>
          <p className="text-xl text-primary-100">
            Discover fresh, locally-sourced produce from our trusted farmers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <SideBar
            selectedCategories={selectedCategories}
            selectedCategories={selectedCategories}
            selectedPrice={selectedPrice}
            selectedLocation={selectedLocation}
            organicOnly={organicOnly}
          />

          <div className="lg:col-span-3">
            <ProductSort total={total} page={Number(page)} limit={6} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>

            <Pagination totalPages={pages} currentPage={page} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
