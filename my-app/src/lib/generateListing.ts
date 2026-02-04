import { lingo } from "./lingo";

export async function generateListing({
  product,
  locale,
}: {
  product: any;
  locale: string;
}) {
  const content = {
    title: product.name,
    description: product.description,
    cta: "Buy now",
  };

  const localized = await lingo.localizeObject(content, {
    sourceLocale: "en",
    targetLocale: locale,
  });

  return localized;
}
