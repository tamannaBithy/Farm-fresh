"use server";

import productModel from "@/models/products";
import { dbConnect } from "@/service/mongo";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";
import { notFound } from "@/utils/notFound";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function getProductById(id) {
  await dbConnect();

  // Validate the id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return notFound();
  }

  const product = await productModel.findById(id).lean();

  if (!product) {
    return notFound();
  }

  return replaceMongoIdInObject(product);
}

export async function getProductsByCategory(category) {
  await dbConnect();

  if (!category || typeof category !== "string") {
    return notFound();
  }

  const products = await productModel.find({ category }).lean();

  if (!products || products.length === 0) {
    return notFound();
  }

  return replaceMongoIdInArray(products);
}

export async function getFeaturedProducts() {
  try {
    await dbConnect();

    // Step 1: Check if there are any products with purchases > 0
    const productsWithPurchases = await productModel
      .find({ purchaseCount: { $gt: 0 } })
      .sort({ purchaseCount: -1 })
      .limit(8)
      .lean();

    let featuredProducts;

    if (productsWithPurchases.length > 0) {
      featuredProducts = productsWithPurchases;
    } else {
      // Step 2: No purchases yet → fallback to createdAt
      featuredProducts = await productModel
        .find({})
        .sort({ createdAt: -1 })
        .limit(8)
        .lean();
    }

    return replaceMongoIdInArray(featuredProducts);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch featured products" },
      { status: 500 }
    );
  }
}
