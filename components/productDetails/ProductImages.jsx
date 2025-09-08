"use client";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]?.url);

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
        <Image
          id="mainImage"
          src={selectedImage}
          alt="Selected Product"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-5 gap-2">
        {images?.map((img) => (
          <button
            key={img?.id}
            onClick={() => setSelectedImage(img?.url)}
            className={`aspect-square rounded-lg overflow-hidden border-2 
              ${
                selectedImage === img?.url
                  ? "border-primary-500"
                  : "border-transparent"
              }`}
          >
            <Image
              src={img?.url}
              alt="Thumbnail"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
