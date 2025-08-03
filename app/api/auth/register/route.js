// app/api/register/route.js
import userModel from "@/models/user";
import { dbConnect } from "@/service/mongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      userType,
      address,
      phone,
      bio,
      farmName,
      specialization,
      farmSize,
      farmSizeUnit,
    } = await request.json();

    if (!email || !password || !firstName || !lastName) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    if (password !== confirmPassword) {
      return new NextResponse("Passwords do not match", { status: 400 });
    }

    await dbConnect();

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email already in use", { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
      address,
      phone,
      bio,
      userType,
    };

    if (userType === "farmer") {
      newUser.farmerDetails = {
        farmName,
        specialization,
        farmSize,
        farmSizeUnit,
      };
    }

    await userModel.create(newUser);

    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    console.error("Registration error:", err);
    return new NextResponse("Internal server error", { status: 500 });
  }
};
