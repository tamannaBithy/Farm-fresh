import { auth } from "@/auth";
import productModel from "@/models/products";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const session = await auth();

    console.log("session", session);

    // ensure user is a farmer
    // this assumes `session.user.role` exists and equals 'farmer' for farmers
    // if (!session.user?.role || session.user.role !== "farmer") {
    //   return NextResponse.json({ error: "Only farmers can add products" }, { status: 403 });
    // }

    const body = await request.json();

    const required = [
      "name",
      "farmName",
      "category",
      "price",
      "unit",
      "stock",
      "farmLocation",
      "images",
    ];
    for (const key of required) {
      if (!body[key] && body[key] !== 0) {
        return NextResponse.json(
          { error: `${key} is required` },
          { status: 400 }
        );
      }
    }

    if (!Array.isArray(body.images) || body.images.length === 0) {
      return NextResponse.json(
        { error: "images must be a non-empty array of URLs" },
        { status: 400 }
      );
    }

    const images = body.images.map((url) => ({ url }));

    await dbConnect();

    const product = await productModel.create({
      name: body.name,
      farmName: body.farmName,
      category: body.category,
      farmer: session.user.id || session.user._id,
      price: Number(body.price),
      unit: body.unit,
      stock: Number(body.stock),
      location: body.farmLocation,
      harvestDate: body.harvestDate ? new Date(body.harvestDate) : undefined,
      description: body.description || "",
      images,
      features: Array.isArray(body.features) ? body.features : [],
      purchaseCount: 0,
    });

    return NextResponse.json(product, { status: 201 });
  } catch (err) {
    console.error("API /products error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
