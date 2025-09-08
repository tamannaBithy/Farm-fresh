"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SideBar = ({
  selectedCategories,
  selectedPrice,
  selectedLocation,
  organicOnly,
}) => {
  const [categories, setCategories] = useState(selectedCategories);
  const [price, setPrice] = useState(selectedPrice);
  const [location, setLocation] = useState(selectedLocation);
  const [organicOnlyState, setOrganicOnlyState] = useState(organicOnly);

  const router = useRouter();

  const handleCategoryToggle = (category) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  useEffect(() => {
    setCategories(selectedCategories);
  }, [selectedCategories]);

  useEffect(() => {
    setPrice(selectedPrice);
  }, [selectedPrice]);

  useEffect(() => {
    setLocation(selectedLocation);
  }, [selectedLocation]);

  useEffect(() => {
    setOrganicOnlyState(organicOnly);
  }, [organicOnly]);

  const handleApplyFilters = () => {
    const params = new URLSearchParams();

    if (categories.length > 0) {
      params.set("category", categories.join(","));
    }

    if (price) {
      params.set("price", price);
    }
    if (location) {
      params.set("location", location);
    }
    if (organicOnlyState) {
      params.set("organic", "true");
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="lg:col-span-1">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Filters
        </h3>

        <div className="mb-6">
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">
            Category
          </h4>
          <div className="space-y-2">
            {["Vegetables", "Fruits", "Grains", "Dairy", "Herbs"].map((cat) => (
              <label key={cat} className="flex items-center">
                <input
                  type="checkbox"
                  checked={categories.includes(cat)}
                  onChange={() => handleCategoryToggle(cat)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">
            Price Range
          </h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                value="under30"
                checked={price === "under30"}
                onChange={(e) => setPrice(e.target.value)}
                className="border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Under ৳30
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                value="30-50"
                checked={price === "30-50"}
                onChange={(e) => setPrice(e.target.value)}
                className="border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                ৳30 - ৳50
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                value="50-100"
                checked={price === "50-100"}
                onChange={(e) => setPrice(e.target.value)}
                className="border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                ৳50 - ৳100
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                value="over100"
                checked={price === "over100"}
                onChange={(e) => setPrice(e.target.value)}
                className="border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Over ৳100
              </span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">
            Location
          </h4>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option>All Locations</option>
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Sylhet</option>
            <option>Rangpur</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={organicOnlyState}
              onChange={(e) => setOrganicOnlyState(e.target.checked)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Organic Only
            </span>
          </label>
        </div>

        <button
          onClick={handleApplyFilters}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default SideBar;
