import { GoogleGenAI } from "@google/genai";
import { logger } from "@/lib/logger";

type EnhancedContent = {
  title: string;
  description: string;
  metaDescription: string;
  shortCopy: string;
  keywords: string[];
  cta: string;
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
  };
}

export async function enhanceForSEO(product: any): Promise<EnhancedContent> {
  try {
    const prompt = `
You are an SEO copywriter.

Rewrite the following product content for SEO.
Return ONLY valid JSON in this format:

{
  "title": "",
  "metaDescription": "",
  "shortCopy": "",
  "description": "",
  "keywords": []
}

Product name: ${product.name}
Category: ${product.category}
Description: ${product.description}
`.trim();

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const text = response.text ?? "";
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
    };
  } catch (error) {
    logger.error("Gemini failed, using fallback SEO");
    return buildFallback(product);
  }
}
