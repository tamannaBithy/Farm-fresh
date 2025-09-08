import userModel from "@/models/user";
import { dbConnect } from "@/service/mongo";
import cloudinary from "@/utils/cloudinary";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const formData = await request.formData();

    const get = (key) => formData.get(key) || "";

    const firstName = get("firstName");
    const lastName = get("lastName");
    const email = get("email");
    const password = get("password");
    const userType = get("userType");
    const address = get("address");
    const phone = get("phone");
    const bio = get("bio");
    const farmName = get("farmName");
    const specialization = get("specialization");
    const farmSize = get("farmSize");
    const farmSizeUnit = get("farmSizeUnit");
    const termsAccepted = get("termsAccepted") === "true";

    const file = formData.get("profilePicture");

    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !termsAccepted ||
      !userType ||
      !address ||
      !phone
    ) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    await dbConnect();

    const hashedPassword = await bcrypt.hash(password, 10);

    let imageUrl = "";
    if (file && typeof file.arrayBuffer === "function") {
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "farm-fresh/users" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });

      imageUrl = uploadResult.secure_url;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
      phone,
      bio,
      userType,
      profilePicture: imageUrl,
      termsAccepted,
    };

    if (userType === "farmer") {
      newUser.farmName = farmName;
      newUser.specialization = specialization;
      newUser.farmSize = farmSize;
      newUser.farmSizeUnit = farmSizeUnit;
    }

    await userModel.create(newUser);

    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    console.error("Registration error:", err);
    return new NextResponse("Internal server error", { status: 500 });
  }
};
