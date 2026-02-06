import { GoogleGenAI } from "@google/genai";
import { logger } from "@/lib/logger";

// 1. Update the Type Interface
type EnhancedContent = {
  title: string;
  description: string;
  metaDescription: string;
  shortCopy: string;
  keywords: string[];
  cta: string;
  insight: string; // <--- NEW: Added this field
};

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

function buildFallback(product: any): EnhancedContent {
  const category = String(product.category || "this category");
  const description = String(product.description || "");
  return {
    title: `${product.name} | Premium ${category}`,
    description,
    metaDescription: description.slice(0, 150),
    shortCopy: product.name,
    keywords: [],
    cta: "Order today – limited stock available",
    insight: "Standard optimization applied based on product category.", // Fallback
  };
}

export async function enhanceForSEO(product: any): Promise<EnhancedContent> {
  try {
    // 2. Update the Prompt to ask for "insight"
    const prompt = `
You are an expert SEO Copywriter and Cultural Linguist.

Analyze the product below and rewrite the content to be highly converting.
CRITICAL: You must provide a "cultural insight" explaining why you chose specific keywords or tone.

Return ONLY valid JSON in this format:

{
  "title": "SEO optimized title",
  "metaDescription": "150-160 char description",
  "shortCopy": "Punchy marketing copy",
  "description": "Full engaging description",
  "keywords": ["keyword1", "keyword2"],
  "insight": "Explain the cultural or psychological reasoning behind this content in 1 short sentence."
}

Product name: ${product.name}
Category: ${product.category}
Description: ${product.description}
`.trim();

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview", // Recommended: Use 1.5-flash for speed/stability
      contents: {
        role: "user",
        parts: [{ text: prompt }],
      },
    });

    // Note: Adjust depending on your exact SDK version response structure
    const text = response.text || "";

    // Robust JSON cleaning (handles markdown code blocks if Gemini adds them)
    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}") + 1;
    const structured = JSON.parse(text.slice(jsonStart, jsonEnd));

    return {
      title: structured.title,
      description: structured.description,
      metaDescription: structured.metaDescription,
      shortCopy: structured.shortCopy,
      keywords: structured.keywords,
      cta: "Order today – limited stock available",
      // 3. Map the insight
      insight:
        structured.insight ||
        "Optimized for high engagement and search visibility.",
    };
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    return buildFallback(product);
  }
}
