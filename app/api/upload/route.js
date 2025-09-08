import cloudinary from "@/utils/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files");

    const uploadPromises = files.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());

      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "farm-fresh/products" }, (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          })
          .end(buffer);
      });
    });

    const uploadedUrls = await Promise.all(uploadPromises);

    return NextResponse.json({ urls: uploadedUrls });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
