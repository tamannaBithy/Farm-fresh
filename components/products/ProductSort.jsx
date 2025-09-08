"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FaList, FaTableCells } from "react-icons/fa6";

const ProductSort = ({ total, page, limit }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // read current sort from url
  const currentSort = searchParams.get("sort") || "featured";

  const handleSortChange = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    params.set("page", 1); // reset to first page after sorting
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <p className="text-gray-600 dark:text-gray-400">
        Showing {(page - 1) * limit + 1}–{Math.min(page * limit, total)} of{" "}
        {total} products
      </p>

      <div className="flex items-center space-x-4">
        <select
          value={currentSort}
          onChange={handleSortChange}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        >
          <option value="featured">Sort by: Featured</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="newest">Newest First</option>
          <option value="rating">Rating</option>
        </select>

        <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg">
          <button className="p-2 bg-primary-600 text-white rounded-l-lg">
            <FaTableCells />
          </button>
          <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-lg">
            <FaList />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSort;
