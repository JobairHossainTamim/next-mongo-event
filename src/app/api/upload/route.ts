import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dtrgwsenn",
  api_key: "242253624825968",
  api_secret: "TLs5pFPX903YihGSTObXqVW-SeQ",
});

// POST handler for Cloudinary Upload
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert file to Base64
    const arrayBuffer = await file.arrayBuffer();
    const base64Data = Buffer.from(arrayBuffer).toString("base64");
    const dataUri = `data:${file.type};base64,${base64Data}`;

    // Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(dataUri, {
      folder: "firebase",
      transformation: [
        { width: 400, height: 400, crop: "limit" }, // Resize
        { quality: "auto" }, // Optimize quality
        { fetch_format: "auto" }, // Use efficient format
      ],
    });

    return NextResponse.json({ url: uploadResult.secure_url }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
