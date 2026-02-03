"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { t } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import ProductForm from "@/components/ProductForm";
import PreviewPanel from "@/components/PreviewPanel";

export default function Home() {
  const [preview, setPreview] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locale, setLocale] = useState("en");

  const handleGenerate = async ({ product, tone, mode }: any) => {
    void tone;
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product,
          mode,
          languages: ["en", "hi", "ta", "bn"],
        }),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      const data = await res.json();
      setPreview(data);
    } catch {
      toast.error(t("error.generic", locale));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8fafc,_#eef2f7_50%,_#e2e8f0_100%)] px-6 pb-16 pt-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <nav className="fade-up flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-slate-900 text-lg text-white">
              🛍️
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                {t("app.title", locale)}
              </p>
              <p className="text-sm font-semibold text-slate-900">
                {t("nav.productStudio", locale)}
              </p>
            </div>
          </div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              <span className="rounded-full border border-slate-200/80 bg-white px-4 py-2">
                {t("hero.badge.localized", locale)}
              </span>
              <span className="rounded-full border border-slate-200/80 bg-white px-4 py-2">
                {t("hero.badge.aiReady", locale)}
              </span>
            </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                {t("nav.locale", locale)}
              </span>
              <LanguageSwitcher />
            </div>
            <Button
              variant="outline"
              className="h-10 rounded-full border-slate-200 bg-white cursor-pointer"
            >
              {t("nav.viewPricing", locale)}
            </Button>
            <Button className="h-10 rounded-full bg-slate-900 text-white hover:bg-slate-800 cursor-pointer">
              {t("nav.bookDemo", locale)}
            </Button>
          </div>
        </nav>

        <div className="fade-up-delayed grid gap-6">
          <Header />
          <header className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.6)] backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                {t("hero.label", locale)}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
                {t("hero.headline", locale)}
              </h1>
              <p className="mt-3 max-w-xl text-sm text-slate-600">
                {t("hero.description", locale)}
              </p>
            </div>
            <div className="grid gap-3 text-xs text-slate-500">
              <div className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3">
                <p className="font-semibold text-slate-700">
                  {t("hero.card.focus.title", locale)}
                </p>
                <p>{t("hero.card.focus.body", locale)}</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3">
                <p className="font-semibold text-slate-700">
                  {t("hero.card.output.title", locale)}
                </p>
                <p>{t("hero.card.output.body", locale)}</p>
              </div>
            </div>
          </div>
        </header>
        </div>

        <div className="fade-up-delayed grid grid-cols-2 gap-8">
          <ProductForm
            onGenerate={handleGenerate}
            loading={loading}
            locale={locale}
          />
          <PreviewPanel data={preview} loading={loading} locale={locale} />
        </div>
      </div>
    </main>
  );
}
