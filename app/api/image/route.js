import OpenAI from "openai";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // Ścieżka do reference.png wewnątrz projektu (np. w public/reference/)
    const referencePath = path.join(process.cwd(), "public", "reference", "reference.png");

    if (!fs.existsSync(referencePath)) {
      throw new Error("Reference image not found on server.");
    }

    // Otwieramy plik binarnie
    const imageStream = fs.createReadStream(referencePath);

    // Faktyczna edycja z użyciem reference.png
    const result = await openai.images.edit({
      model: "gpt-image-1",
      image: imageStream,
      prompt: `${prompt}. Maintain identical lighting, background, and shirt tone as the reference image.`,
      size: "1024x1792",
      n: 1,
    });

    const imageBase64 = result.data[0].b64_json;
    const imageUrl = `data:image/png;base64,${imageBase64}`;

    return new Response(JSON.stringify({ image_url: imageUrl }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ AI Generation Error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
