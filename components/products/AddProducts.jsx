"use client";

import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddProducts = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [farmName, setFarmName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [stock, setStock] = useState("");
  const [farmLocation, setFarmLocation] = useState("");
  const [harvestDate, setHarvestDate] = useState("");
  const [features, setFeatures] = useState([]);
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 5) {
      alert("You can upload a maximum of 5 images per product.");
      return;
    }
    setImages((prev) => [...prev, ...files]);
  };

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFeatures((prev) => [...prev, value]);
    } else {
      setFeatures((prev) => prev.filter((f) => f !== value));
    }
  };

  const resetForm = () => {
    setName("");
    setFarmName("");
    setCategory("");
    setDescription("");
    setPrice("");
    setUnit("");
    setStock("");
    setFarmLocation("");
    setHarvestDate("");
    setFeatures([]);
    setImages([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (images.length > 5) {
        alert("You can upload a maximum of 5 images per product.");
        setLoading(false);
        return;
      }

      let uploadedImageUrls = [];

      if (images.length > 0) {
        const formData = new FormData();
        images.forEach((file) => formData.append("files", file));

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Upload failed");

        uploadedImageUrls = data.urls;
      }

      const productData = {
        name,
        farmName,
        description,
        price,
        unit,
        category,
        stock,
        farmLocation,
        harvestDate,
        features,
        images: uploadedImageUrls,
      };

      const res = await fetch("/api/addProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to add product");
      }

      alert("Product added successfully!");
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      {/* Basic Information */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Basic Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300">
              Product Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                     rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
              placeholder="e.g., Organic Tomatoes"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300">
              Category *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                     rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="grains">Grains</option>
              <option value="dairy">Dairy</option>
              <option value="herbs">Herbs</option>
              <option value="honey">Honey</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-700 dark:text-gray-300">
              Description *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                     rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
              placeholder="Describe your product, growing methods, quality, etc."
            ></textarea>
          </div>
        </div>
      </div>

      {/* Pricing & Inventory */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Pricing & Inventory
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Price per Unit (৳) *
            </label>
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                   rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
              placeholder="45.00"
            />
          </div>

          <div>
            <label
              htmlFor="unit"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Unit *
            </label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                   rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
            >
              <option value="">Select Unit</option>
              <option value="kg">Kilogram (kg)</option>
              <option value="lbs">Pounds (lbs)</option>
              <option value="piece">Piece</option>
              <option value="liter">Liter</option>
              <option value="dozen">Dozen</option>
              <option value="bundle">Bundle</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Available Stock *
            </label>

            <input
              type="number"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                   rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
              placeholder="100"
            />
          </div>
        </div>
      </div>

      {/* Images */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Product Images
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Upload Images (Max 5 images) *
            </label>

            {/* Upload area */}
            <div
              className="border-2 border-dashed border-gray-300 dark:border-gray-600 
        rounded-lg p-6 text-center hover:border-primary-500 transition"
            >
              <input
                type="file"
                id="images"
                name="images"
                multiple
                accept="image/*"
                required
                onChange={handleImageChange}
                className="hidden"
              />
              <label htmlFor="images" className="cursor-pointer">
                <FaCloudUploadAlt className="mx-auto text-4xl text-gray-400 mb-4" />

                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  Click to upload images
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  PNG, JPG, GIF up to 10MB each
                </p>
              </label>
            </div>

            {/* Preview grid */}
            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
                  >
                    {/* Remove button */}
                    <button
                      type="button"
                      onClick={() => {
                        setImages((prev) =>
                          prev.filter((_, index) => index !== i)
                        );
                      }}
                      className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
                    >
                      ✕
                    </button>

                    <img
                      src={URL.createObjectURL(img)}
                      alt={`preview-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Farm Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label
            htmlFor="farmName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Farm Name *
          </label>
          <input
            type="text"
            placeholder="Raju's Farm"
            value={farmName}
            onChange={(e) => setFarmName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="farmLocation"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Farm Location *
          </label>
          <input
            type="text"
            placeholder="Farm Location"
            value={farmLocation}
            onChange={(e) => setFarmLocation(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
            placeholder="e.g., Sylhet, Bangladesh"
          />
        </div>

        <div>
          <label
            htmlFor="harvestDate"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Harvest Date
          </label>
          <input
            type="date"
            value={harvestDate}
            onChange={(e) => setHarvestDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "organic",
            "pesticide_free",
            "fresh",
            "non_gmo",
            "local",
            "sustainable",
            "fair_trade",
            "gluten_free",
          ].map((feature) => (
            <label
              key={feature}
              className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <input
                type="checkbox"
                value={feature}
                checked={features.includes(feature)}
                onChange={handleFeatureChange}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary-600 hover:bg-primary-700 
               text-white py-3 rounded-lg shadow-md 
               transition disabled:opacity-50"
      >
        {loading ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
};

export default AddProducts;
