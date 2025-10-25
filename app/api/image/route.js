import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(req) {
  try {
    const file = req.nextUrl.searchParams.get("file");
    if (!file) {
      return NextResponse.json({ error: "Missing file name" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "private_images", file);
    const baseDir = path.join(process.cwd(), "private_images");

    if (!filePath.startsWith(baseDir)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const referer = req.headers.get("referer") || "";
    if (referer && !referer.includes("emotiondeck.com")) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const buffer = fs.readFileSync(filePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("❌ Image Load Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
