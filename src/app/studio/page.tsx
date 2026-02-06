"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { t } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import ProductForm from "@/components/ProductForm";
import PreviewPanel from "@/components/PreviewPanel";
import { ShoppingBag, Globe, Sparkles, LayoutTemplate, Wand2 } from "lucide-react";
import Link from "next/link";

export default function StudioPage() {
  const [preview, setPreview] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [locale, setLocale] = useState("en");

  const languageOrder = ["en", "hi", "ta", "bn"];

  const handleGenerate = async ({ product, tone, mode }: any) => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product,
          mode,
          languages: languageOrder,
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
    <div className="min-h-screen bg-[#F8FAFC] relative selection:bg-violet-100 selection:text-violet-900 font-sans">
      
      {/* Custom Styles for Background Pattern */}
      <style jsx global>{`
        .bg-grid-slate {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>

      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-100/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center p-2 rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-900/10 group-hover:scale-105 transition-transform">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold tracking-tight text-slate-900">LingoKart</span>
                <span className="text-slate-300">/</span>
                <span className="text-sm font-medium text-slate-500 group-hover:text-violet-600 transition-colors">
                  {t("nav.productStudio", locale)}
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm hover:border-violet-200 transition-colors">
              <div className="h-6 w-6 rounded-full bg-violet-50 flex items-center justify-center">
                 <Globe className="h-3.5 w-3.5 text-violet-600" />
              </div>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide mr-2">
                {t("nav.locale", locale)}
              </span>
              <LanguageSwitcher value={locale} onChange={setLocale} />
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 py-10">
        
        {/* Page Header */}
        <div className="mb-12 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4 flex items-center gap-3">
            {t("hero.headline", locale) || "Content Studio"} 
            <Sparkles className="h-6 w-6 text-amber-400 fill-amber-400 animate-pulse" />
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            {t("hero.description", locale) || "Transform your raw product details into culturally optimized listings for every Indian market."}
          </p>
        </div>

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Panel: Input */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 px-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-[10px] font-bold shadow-sm">1</div>
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                {t("step.input", locale) || "Product Details"}
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-1">
               <div className="p-6 md:p-8">
                  <ProductForm
                    onGenerate={handleGenerate}
                    loading={loading}
                    locale={locale}
                  />
               </div>
            </div>
            
            {/* <div className="px-4 py-3 bg-violet-50 border border-violet-100 rounded-xl flex gap-3 items-start">
              <Wand2 className="h-5 w-5 text-violet-600 mt-0.5 shrink-0" />
              <p className="text-sm text-violet-700 leading-snug">
                <strong>Pro Tip:</strong> Uploading a high-quality image allows our AI to automatically detect materials and colors.
              </p>
            </div> */}
          </div>

          {/* Right Panel: Preview */}
          <div className="lg:col-span-7 space-y-4 lg:sticky lg:top-24">
            <div className="flex items-center gap-2 px-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white border border-slate-200 text-slate-900 text-[10px] font-bold shadow-sm">2</div>
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                {t("step.output", locale) || "Live Preview"}
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 min-h-[600px] flex flex-col overflow-hidden relative group">
              {/* Optional: Add a subtle inner gradient or texture if preview is empty */}
              {!preview && !loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-4 bg-slate-50/50">
                  <div className="h-16 w-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <LayoutTemplate className="h-8 w-8 text-slate-300" />
                  </div>
                  <p className="text-sm font-medium">Ready to generate your listing</p>
                </div>
              )}
              
              <div className="flex-1 relative z-10">
                <PreviewPanel
                  data={preview}
                  loading={loading}
                  locale={locale}
                  onLocaleChange={setLocale}
                />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
