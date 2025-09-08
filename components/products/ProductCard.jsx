import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  const { name, farmName, price, unit, stock, location, images, features } =
    product;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <Image
          src={images[0]?.url}
          alt={name}
          width="100"
          height="100"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {features[0] === "organic" && (
          <div className="absolute top-3 left-3">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              organic
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <button className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <FaRegHeart className=" text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          <div className="flex items-center text-yellow-400">
            <FaStar className="text-sm" />

            <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
              4.8
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          By {farmName} • {location}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              ৳{price}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              /{unit}
            </span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Stock: {stock}
            {unit}
          </span>
        </div>
        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
