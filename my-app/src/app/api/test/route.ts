import { NextResponse } from "next/server";
import { LingoDotDevEngine } from "lingo.dev/sdk";

export async function GET() {
  try {
    const lingo = new LingoDotDevEngine({
      apiKey: process.env.LINGODOTDEV_API_KEY!,
    });

    const translated = await lingo.localizeText("Hello world", {
      sourceLocale: "en",
      targetLocale: "hi",
    });

    return NextResponse.json({
      success: true,
      output: translated,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
