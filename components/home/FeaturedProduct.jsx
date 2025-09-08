import { getFeaturedProducts } from "@/app/actions";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegHeart, FaStar } from "react-icons/fa";

const FeaturedProduct = async () => {
  const featuredProducts = await getFeaturedProducts();

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Featured Products
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Fresh picks from our local farmers
            </p>
          </div>
          <Link
            href="/products"
            className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 flex items-center"
          >
            <p>View All</p>
            <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts?.map((product) => (
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              key={product?.id}
            >
              <div className="relative">
                <Image
                  src={product?.images[0]?.url}
                  alt="Fresh Spinach"
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
                    <FaRegHeart className=" text-red-500" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {product?.name}
                    </h3>
                  </Link>

                  <div className="flex items-center text-yellow-400">
                    <FaStar className="text-sm" />

                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                      4.7
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  By {product?.farmName} • {product?.location}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      ৳{product?.price}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      /{product?.unit}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Stock: {product?.stock}kg
                  </span>
                </div>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
