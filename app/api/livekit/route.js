import { NextResponse } from "next/server";
import { AccessToken } from "livekit-server-sdk";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const room = searchParams.get("room");
  const user = searchParams.get("user");

  const apiKey = process.env.NEXT_PUBLIC_LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  if (!apiKey || !apiSecret) {
    return NextResponse.json({ error: "Missing LiveKit credentials" }, { status: 500 });
  }

  const at = new AccessToken(apiKey, apiSecret, { identity: user });
  at.addGrant({
    room,
    roomJoin: true,
    canPublish: true,
    canSubscribe: true,
  });

  const token = await at.toJwt();
  return NextResponse.json({ token });
}
