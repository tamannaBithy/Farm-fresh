import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import {
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaRegStar,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { FaBolt, FaLocationDot } from "react-icons/fa6";

const ProductInfo = async ({
  name,
  price,
  unit,
  stock,
  location,
  farmName,
  features,
}) => {
  const session = await auth();

  const featureColors = {
    organic:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    pesticide_free:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    fresh: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    non_gmo:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    local: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    sustainable:
      "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    fair_trade:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    gluten_free: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center space-x-2 mb-2">
          {features?.map((feature) => (
            <span
              key={feature}
              className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${featureColors[feature]}`}
            >
              {feature.replace(/_/g, " ")}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {name}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Produced by
          <span className="font-semibold text-primary-600 dark:text-primary-400 ml-1">
            {farmName}
          </span>
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <div className="flex text-yellow-400 text-lg">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            4.8
          </span>
        </div>
        <span className="text-gray-500 dark:text-gray-400">(127 reviews)</span>
        <button className="text-primary-600 dark:text-primary-400 hover:underline">
          Write a review
        </button>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              ৳{price}
            </span>
            <span className="text-lg text-gray-500 dark:text-gray-400 ml-1">
              /{unit}
            </span>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Available Stock
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {stock} kg
            </p>
          </div>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
          <FaLocationDot className="mr-2" />

          <span>{location}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Quantity (kg)
          </label>
          <div className="flex items-center space-x-3">
            <button className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
              <FaMinus className="text-sm" />
            </button>
            <input
              type="number"
              value="1"
              min="1"
              max="50"
              className="w-20 text-center py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <button className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
              <FaPlus className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3 ">
        <Link href="/payment">
          <button className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg">
            <FaBolt className="mr-2" />
            <p>Buy Now</p>
          </button>
        </Link>
        <button className="flex items-center justify-center w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-3 px-6 rounded-lg font-medium transition">
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
        <button className="flex items-center justify-center w-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white py-3 px-6 rounded-lg font-medium transition">
          <FaRegHeart className="mr-2" />
          Add to Favorite
        </button>
      </div>

      <div className="bg-primary-50 dark:bg-primary-900 rounded-xl p-4">
        <div className="flex items-center space-x-3">
          <Image
            src={session?.user?.img}
            alt={session?.user?.name}
            width="50"
            height="50"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {session?.user?.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Farmer since 2015
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
