import { NextResponse } from "next/server";
import { lingo } from "@/lib/lingo";

export async function POST(req: Request) {
  try {
    const { product, languages } = await req.json();

    const results: Record<string, any> = {};

    for (const lang of languages) {
      results[lang] = await lingo.localizeObject(
        {
          title: product.name,
          description: product.description,
          cta: "Buy now",
        },
        {
          sourceLocale: "en",
          targetLocale: lang,
        }
      );
    }

    return NextResponse.json(results);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "Localization failed" },
      { status: 500 }
    );
  }
}
