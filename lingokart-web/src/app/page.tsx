"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductForm from "@/components/ProductForm";
import PreviewPanel from "@/components/PreviewPanel";

export default function Home() {
  const [preview, setPreview] = useState<any>(null);

  const handleGenerate = async ({ product, tone }: any) => {
    void tone;
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product,
        languages: ["en", "hi", "ta", "bn"],
      }),
    });

    const data = await res.json();
    setPreview(data);
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
                LingoKart
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Product Studio
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            <span className="rounded-full border border-slate-200/80 bg-white px-4 py-2">
              Localized copy
            </span>
            <span className="rounded-full border border-slate-200/80 bg-white px-4 py-2">
              AI ready
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-10 rounded-full border-slate-200 bg-white"
            >
              View pricing
            </Button>
            <Button className="h-10 rounded-full bg-slate-900 text-white hover:bg-slate-800">
              Book demo
            </Button>
          </div>
        </nav>

        <header className="fade-up-delayed rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.6)] backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                LingoKart Studio
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
                Craft premium localized listings with confidence.
              </h1>
              <p className="mt-3 max-w-xl text-sm text-slate-600">
                Create market-ready product copy that sounds native, polished,
                and compelling. Perfect for marketplaces, catalogs, and social
                commerce.
              </p>
            </div>
            <div className="grid gap-3 text-xs text-slate-500">
              <div className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3">
                <p className="font-semibold text-slate-700">Focus</p>
                <p>Localized product storytelling</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3">
                <p className="font-semibold text-slate-700">Output</p>
                <p>Headlines, descriptions, CTA</p>
              </div>
            </div>
          </div>
        </header>

        <div className="fade-up-delayed grid grid-cols-2 gap-8">
          <ProductForm onGenerate={handleGenerate} />
          <PreviewPanel data={preview} />
        </div>
      </div>
    </main>
  );
}
