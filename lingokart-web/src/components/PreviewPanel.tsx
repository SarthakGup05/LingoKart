"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "./Skeleton";
import { toast } from "sonner";
import { t } from "@/lib/i18n";

const LANGS: any = {
  en: "English",
  hi: "Hindi",
  ta: "Tamil",
  bn: "Bengali",
};

export default function PreviewPanel({ data, loading, locale }: any) {
  if (!data) {
    return (
      <div className="relative bg-white p-8 rounded-2xl shadow-sm space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-10 w-32 mt-4" />
        {loading ? (
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/60 backdrop-blur-[2px]">
            <div className="absolute inset-x-6 top-6 h-10 animate-pulse rounded-lg bg-slate-200/80" />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="relative bg-white p-8 rounded-2xl shadow-sm">
      {loading ? (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/60 backdrop-blur-[2px]">
          <div className="absolute inset-x-6 top-6 h-10 animate-pulse rounded-lg bg-slate-200/80" />
        </div>
      ) : null}
      <h2 className="text-xl font-semibold mb-4">
        {t("preview.title", locale)}
      </h2>

      <Tabs defaultValue="en">
        <TabsList className="mb-4">
          {Object.keys(LANGS).map((lang) => (
            <TabsTrigger key={lang} value={lang}>
              {LANGS[lang]}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(LANGS).map((lang) => (
          <TabsContent key={lang} value={lang}>
            <div className="space-y-3 transition-all duration-200">
              {!data[lang] ? (
                <div className="space-y-3">
                  <Skeleton className="h-5 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold">{data[lang].title}</h3>

                  <p className="text-gray-600">{data[lang].description}</p>

                  <Button
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() =>
                      navigator.clipboard
                        .writeText(
                          `${data[lang]?.title}\n${data[lang]?.description}\n${data[lang]?.cta}`
                        )
                        .then(() =>
                          toast.success(t("preview.copySuccess", locale), {
                            description: t("preview.copyDescription", locale),
                          })
                        )
                    }
                  >
                    {data[lang].cta}
                  </Button>
                </>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
