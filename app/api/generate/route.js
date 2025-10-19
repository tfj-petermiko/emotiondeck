import fs from "fs";
import path from "path";
import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    // 🧠 Parse user input
    const { ethnicity, emotion, ageGroup, gender } = await req.json();

    // 🖼️ Reference image path
    const referencePath = path.join(process.cwd(), "public", "reference", "reference.png");
    if (!fs.existsSync(referencePath)) {
      throw new Error(`Reference image not found: ${referencePath}`);
    }

    // 🧩 Load reference image
    const buffer = fs.readFileSync(referencePath);
    const imageFile = new File([buffer], "reference.png", { type: "image/png" });

    // 🪄 AI prompt for generation
    const prompt = `
Recreate the reference portrait with identical lighting and composition.
Keep it pure black and white (no colour).

Subject: a ${ageGroup.toLowerCase()} ${gender?.toLowerCase() || "person"} of ${ethnicity} descent,
expressing ${emotion?.toLowerCase()}.

Depict authentic, biological features:
- ${ageGroup}-typical facial structure and texture
- Clearly identifiable ${gender?.toLowerCase() || "gender"} traits:
${gender?.toLowerCase() === "female"
  ? "- Feminine: softer features, narrower jawline, smaller chin, fuller lips."
  : "- Masculine: stronger jawline, broader structure, defined brow ridge."}
- Ethnically accurate traits typical for ${ethnicity} origin — realistic and natural.

Maintain identical studio setup:
- neutral grey background (#B0B0B0)
- front-facing pose
- soft shadow falloff
- same shirt, lighting, and framing

Output: ultra-realistic black-and-white photo, 1024×1536 resolution, EmotionDeck visual consistency.
`;

    // ⚙️ Generate image
    const result = await openai.images.edit({
      model: "gpt-image-1",
      image: imageFile,
      prompt,
      size: "1024x1536",
    });

    const base64 = result.data[0].b64_json;
    const image_url = `data:image/png;base64,${base64}`;

    console.log(`✅ ${ethnicity} | ${ageGroup} | ${gender} | ${emotion}`);

    return new Response(
      JSON.stringify({ image_url, category: ageGroup }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("❌ AI Generation Error:", err);
    return new Response(
      JSON.stringify({
        error: "AI generation failed",
        details: err.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// 🔍 Simple GET test endpoint
export async function GET() {
  return new Response(
    JSON.stringify({
      message: "EmotionDeck API active — Ethnicity + Age Group enabled",
      fields: ["ethnicity", "emotion", "ageGroup", "gender"],
      model: "gpt-image-1",
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
