import { getProductsByCategory } from "@/app/actions";
import Image from "next/image";
import { FaRegHeart, FaStar } from "react-icons/fa";

const RelatedProduct = async ({ category }) => {
  const products = await getProductsByCategory(category);

  console.log(products);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            key={product?.id}
          >
            <div className="relative">
              <Image
                src={product?.images[0]?.url}
                alt="Fresh Lettuce"
                width={100}
                height={100}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product?.features[0]}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <button className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  <FaRegHeart className=" text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {product?.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                By {product?.farmName}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  ৳{product?.price}/{product?.unit}
                </span>
                <div className="flex items-center text-yellow-400 text-sm">
                  <FaStar />

                  <span className="text-gray-600 dark:text-gray-400 ml-1">
                    4.5
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
