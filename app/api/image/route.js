// app/api/image/route.js
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const fileName = url.searchParams.get("file");
    const token = url.searchParams.get("token");

    // 🔒 Prosty klucz zabezpieczający (zmień na własny)
    if (token !== process.env.IMAGE_ACCESS_KEY) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // 🗂️ Ścieżka do katalogu z obrazami
    const filePath = path.join(process.cwd(), "private_images", fileName);

    // 🧱 Sprawdź, czy plik istnieje
    if (!fs.existsSync(filePath)) {
      return new NextResponse("Not found", { status: 404 });
    }

    // 📤 Zwróć plik jako odpowiedź
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Image access error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}
