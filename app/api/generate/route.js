import fs from "fs";
import path from "path";
import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 🧠 Age classification helper
function getAgeCategory(age) {
  const a = Number(age);
  if (a <= 1) return { label: "Infant", desc: "rounded baby face, minimal hair, soft cheeks, large eyes" };
  if (a <= 5) return { label: "Toddler", desc: "childlike roundness, playful look, soft proportions" };
  if (a <= 12) return { label: "Child", desc: "developing structure, smaller jaw, gentle expression" };
  if (a <= 19) return { label: "Teen", desc: "youthful skin, defined features, energetic expression" };
  if (a <= 29) return { label: "Young Adult", desc: "smooth skin, full facial symmetry, clear eyes" };
  if (a <= 44) return { label: "Adult", desc: "mature proportions, balanced features, confident look" };
  if (a <= 59) return { label: "Mature Adult", desc: "slight wrinkles, calm expression, life experience visible" };
  if (a <= 74) return { label: "Senior", desc: "visible ageing, softer skin, thoughtful expression" };
  if (a <= 89) return { label: "Elderly", desc: "prominent wrinkles, gentle posture, wisdom in gaze" };
  return { label: "Centenarian", desc: "deeply aged, frail yet peaceful, symbolic longevity" };
}

export async function POST(req) {
  try {
    // 🧩 Parse input
    const { country, emotion, age, gender } = await req.json();
    const { label: ageLabel, desc: ageDesc } = getAgeCategory(age);

    // 🖼️ Load reference image
    const referencePath = path.join(process.cwd(), "public", "reference", "reference.png");
    if (!fs.existsSync(referencePath)) throw new Error(`Reference image not found: ${referencePath}`);

    const buffer = fs.readFileSync(referencePath);
    const imageFile = new File([buffer], "reference.png", { type: "image/png" });

    // 🪄 Build AI prompt
    const prompt = `
Recreate the reference portrait with identical lighting and composition.
Keep it pure black and white (no colour).

Subject: a ${ageLabel.toLowerCase()} (${age}-year-old) ${gender?.toLowerCase() || "person"} from ${country}, expressing ${emotion?.toLowerCase()}.

Depict authentic, biological features:
- ${ageDesc}
- Clearly identifiable ${gender?.toLowerCase() || "gender"} traits:
${gender?.toLowerCase() === "female"
  ? "- Feminine: softer features, narrower jawline, smaller chin, fuller lips."
  : "- Masculine: stronger jawline, broader structure, defined brow ridge."}
- Ethnically accurate traits typical for ${country} origin — realistic and natural.

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

    console.log(`✅ ${country} | ${ageLabel} (${age}) | ${gender} | ${emotion}`);

    return new Response(JSON.stringify({ image_url, category: ageLabel }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ AI Generation Error:", err);
    return new Response(
      JSON.stringify({ error: "AI generation failed", details: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// 🔍 GET — test endpoint
export async function GET() {
  return new Response(
    JSON.stringify({
      message: "EmotionDeck API active — 10-category age mapping enabled",
      categories: [
        "Infant", "Toddler", "Child", "Teen", "Young Adult", "Adult",
        "Mature Adult", "Senior", "Elderly", "Centenarian"
      ],
      model: "gpt-image-1",
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
