"use client";
import { useRouter } from "next/navigation";
import {
  FaAppleAlt,
  FaCarrot,
  FaCheese,
  FaLeaf,
  FaSeedling,
} from "react-icons/fa";
import { FaJar } from "react-icons/fa6";

const Categories = () => {
  const router = useRouter();

  const categories = [
    {
      name: "Vegetables",
      icon: (
        <FaCarrot className="text-3xl text-green-600 dark:text-green-400 mb-3 mx-auto" />
      ),
      color: "green",
    },
    {
      name: "Fruits",
      icon: (
        <FaAppleAlt className="text-3xl text-red-600 dark:text-red-400 mb-3 mx-auto" />
      ),
      color: "red",
    },
    {
      name: "Grains",
      icon: (
        <FaSeedling className="text-3xl text-yellow-600 dark:text-yellow-400 mb-3 mx-auto" />
      ),
      color: "yellow",
    },
    {
      name: "Dairy",
      icon: (
        <FaCheese className="text-3xl text-blue-600 dark:text-blue-400 mb-3 mx-auto" />
      ),
      color: "blue",
    },
    {
      name: "Honey",
      icon: (
        <FaJar className="text-3xl text-purple-600 dark:text-purple-400 mb-3 mx-auto" />
      ),
      color: "purple",
    },
    {
      name: "Herbs",
      icon: (
        <FaLeaf className="text-3xl text-orange-600 dark:text-orange-400 mb-3 mx-auto" />
      ),
      color: "orange",
    },
  ];

  const handleCategoryClick = (category) => {
    router.push(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover fresh, locally-sourced produce across various categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group cursor-pointer"
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div
                className={`bg-${cat.color}-100 dark:bg-${cat.color}-900 rounded-2xl p-6 text-center group-hover:bg-${cat.color}-200 dark:group-hover:bg-${cat.color}-800 transition`}
              >
                {cat.icon}
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Explore items
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
