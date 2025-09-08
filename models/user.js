import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userType: {
      type: String,
      enum: ["customer", "farmer"],
      // required: true,
    },

    profilePicture: {
      type: String,
    },

    firstName: {
      type: String,
      // required: true,
      trim: true,
    },

    lastName: {
      type: String,
      // required: true,
      trim: true,
    },

    email: {
      type: String,
      // required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      // required: true,
      trim: true,
    },

    address: {
      type: String,
      // required: true,
    },

    password: {
      type: String,
      // required: true,
    },

    bio: {
      type: String,
      maxLength: 250,
    },

    farmName: {
      type: String,
    },

    specialization: {
      type: String,
      enum: ["vegetables", "fruits", "grains", "dairy", "mixed", ""],
    },

    farmSize: {
      type: Number,
      min: 0,
    },

    farmSizeUnit: {
      type: String,
      enum: ["acres", "hectares", "sq_ft", "sq_m"],
    },

    termsAccepted: {
      type: Boolean,
      // required: true,
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;
