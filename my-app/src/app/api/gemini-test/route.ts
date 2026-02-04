import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { logger } from "@/lib/logger";

export async function GET() {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents:
        "Rewrite this for SEO: Handmade soy candle with lavender fragrance",
    });

    return NextResponse.json({
      success: true,
      output: response.text,
    });
  } catch (error: any) {
    logger.error("❌ GEMINI TEST ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Gemini API failed",
      },
      { status: 500 }
    );
  }
}
