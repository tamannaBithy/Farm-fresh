import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    farmName: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["vegetables", "fruits", "grains", "dairy", "herbs", "honey"],
    },

    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    unit: {
      type: String,
      required: true,
      enum: ["kg", "lbs", "piece", "liter", "dozen", "bundle"],
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    harvestDate: {
      type: Date,
    },

    description: {
      type: String,
      trim: true,
    },

    images: [
      {
        url: { type: String, required: true },
      },
    ],

    features: {
      type: [String],
      enum: [
        "organic",
        "pesticide_free",
        "fresh",
        "non_gmo",
        "local",
        "sustainable",
        "fair_trade",
        "gluten_free",
      ],
    },

    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    reviews: [reviewSchema],

    purchaseCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
