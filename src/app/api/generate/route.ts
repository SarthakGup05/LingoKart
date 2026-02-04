import { NextResponse } from "next/server";
import { lingo } from "@/lib/lingo";
import { enhanceForSEO } from "@/lib/enhanceContent";
import { logger } from "@/lib/logger";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    logger.debug("REQUEST BODY 👉", body);

    const product = body.product;
    const languages = body.languages ?? ["en"];
    const mode = body.mode ?? "basic";

    const results: Record<string, any> = {};

    if (!product?.name || !product?.description) {
      return NextResponse.json(
        { error: "Invalid product data" },
        { status: 400 }
      );
    }

    const enhanced =
      mode === "seo"
        ? await enhanceForSEO(product)
        : {
            title: product.name,
            description: product.description,
            shortCopy: product.name,
            cta: "Buy now",
          };

    for (const lang of languages) {
      results[lang] = await lingo.localizeObject(
        {
          title: enhanced.title,
          description: enhanced.description,
          shortCopy: enhanced.shortCopy,
          cta: enhanced.cta,
        },
        {
          sourceLocale: "en",
          targetLocale: lang,
        }
      );
    }

    return NextResponse.json(results);
  } catch (error: any) {
    logger.error("❌ GENERATE API ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
