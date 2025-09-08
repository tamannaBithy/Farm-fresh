"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("All");
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword) params.set("q", keyword);
    if (category && category !== "All") params.set("category", category);

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="flex rounded-lg overflow-hidden shadow-lg">
      <input
        type="text"
        placeholder="Search for vegetables, fruits, farmers..."
        className="flex-1 px-6 py-4 text-gray-900 text-lg focus:outline-none"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-4 text-gray-900 border-l border-gray-300 focus:outline-none"
      >
        <option>All Categories</option>
        <option>Vegetables</option>
        <option>Fruits</option>
        <option>Grains</option>
        <option>Dairy</option>
        <option>Herbs</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-primary-700 hover:bg-primary-800 px-8 py-4 transition"
      >
        <FaSearch className="text-xl" />
      </button>
    </div>
  );
};

export default Search;
