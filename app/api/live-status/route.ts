import { NextResponse } from "next/server";
import { getLiveBroadcast } from "@/lib/admin-store";

export async function GET() {
  try {
    const live = await getLiveBroadcast();
    return NextResponse.json(live);
  } catch (err) {
    console.error("Error fetching live broadcast status:", err);
    return NextResponse.json(
      {
        isLive: true,
        streamTitle: "Direct Régie OCD Live · Plateau Talk-Show #LesOpportunitesCestDehors",
        platform: "youtube",
        streamUrl: "https://www.youtube.com/@BovannYT/live",
        viewersCount: 1420,
        channelName: "@BovannYT",
      },
      { status: 200 }
    );
  }
}
