"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { t } from "@/lib/i18n";
import {
  Copy,
  Check,
  Type,
  AlignLeft,
  MousePointer2,
  Bot,
  Loader2,
  Eye,
  Search,
  Globe2
} from "lucide-react";

const LANGS: any = {
  en: "English",
  hi: "Hindi",
  ta: "Tamil",
  bn: "Bengali",
};

// Define the steps for each mode
const LOADING_SCENARIOS: any = {
  basic: [
    "Analyzing product context...",
    "Detecting cultural nuances...",
    "Translating to target languages...",
    "Polishing grammar and tone...",
    "Finalizing your listing..."
  ],
  seo: [
    "Analyzing market trends...",
    "Researching high-volume keywords...",
    "Optimizing title for ranking...",
    "Injecting search terms naturally...",
    "Finalizing SEO-optimized content..."
  ]
};

type Props = {
  data: any
  loading: boolean
  locale: string
  mode?: "basic" | "seo" // Added mode prop
  onLocaleChange?: (locale: string) => void
}

export default function PreviewPanel({
  data,
  loading,
  locale,
  mode = "basic", // Default to basic
  onLocaleChange,
}: Props) {
  const [copyState, setCopyState] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(locale);
  const [loadingStep, setLoadingStep] = useState(0);

  // Get the correct steps based on the mode
  const currentSteps = useMemo(() => LOADING_SCENARIOS[mode] || LOADING_SCENARIOS.basic, [mode]);

  useEffect(() => {
    if (loading) {
      setLoadingStep(0);
      const interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % currentSteps.length);
      }, 2000); // 2 seconds per step
      return () => clearInterval(interval);
    }
  }, [loading, currentSteps]);

  useEffect(() => {
    setActiveTab(locale);
  }, [locale]);

  const handleCopy = (text: string, sectionId: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopyState(sectionId);
      toast.success(t("preview.copySuccess", locale) || "Copied to clipboard", {
        description: t("preview.copyDescription", locale) || "Content is ready to paste.",
      });
      setTimeout(() => setCopyState(null), 2000);
    });
  };

  const CopyButton = ({ text, id }: { text: string; id: string }) => (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => handleCopy(text, id)}
      className="h-6 w-6 text-slate-400 hover:text-violet-600 hover:bg-violet-50 transition-colors"
      title="Copy section"
    >
      {copyState === id ? (
        <Check className="h-3.5 w-3.5" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </Button>
  );

  return (
    <div className="h-full flex flex-col border-slate-200 bg-white shadow-sm transition-all hover:shadow-md duration-300 relative overflow-hidden group rounded-3xl border">
      
      {/* 1. Subtle Top Gradient Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

      {/* 2. Header Section */}
      <div className="p-6 pb-0 z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              {t("preview.title", locale) || "Live Preview"}
            </h2>
            <div className="flex items-center gap-2">
              <p className="text-sm text-slate-500">
                {mode === "seo" ? "SEO Optimized Generation" : "Standard Localization"}
              </p>
              {/* Optional: Small badge to show current mode */}
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                mode === 'seo' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
              }`}>
                {mode}
              </span>
            </div>
          </div>
          <div className="h-10 w-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100 shadow-sm">
            <Eye className="h-5 w-5" />
          </div>
        </div>

        {/* Tabs */}
        <div className="pb-4 border-b border-slate-100">
          <Tabs
            value={activeTab}
            onValueChange={(value) => {
              setActiveTab(value);
              onLocaleChange?.(value);
            }}
            className="w-full"
          >
            <TabsList className="w-full h-12 bg-slate-100 p-1 rounded-xl">
              {Object.keys(LANGS).map((lang) => (
                <TabsTrigger
                  key={lang}
                  value={lang}
                  disabled={loading}
                  className="flex-1 rounded-lg text-sm font-medium text-slate-600 data-[state=active]:bg-white data-[state=active]:text-violet-700 data-[state=active]:shadow-sm transition-all"
                >
                  {LANGS[lang]}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* 3. Main Content Area */}
      <ScrollArea className="flex-1 px-6 py-4">
        
        {loading ? (
           /* LOADING STATE */
          <div className="space-y-8 animate-in fade-in duration-500 mt-2">
            
            {/* Dynamic Loading Status Bar */}
            <div className={`flex items-center gap-3 mb-6 p-3 rounded-lg border w-fit transition-colors duration-500 ${
              mode === 'seo' 
                ? 'bg-emerald-50 border-emerald-100 text-emerald-700' 
                : 'bg-violet-50 border-violet-100 text-violet-700'
            }`}>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm font-medium animate-pulse">
                {currentSteps[loadingStep]}
              </span>
            </div>

            {/* Skeletons... */}
            <div className="space-y-3">
               <div className="flex justify-between items-center">
                  <Skeleton className="h-3 w-24 bg-slate-100" />
                  <Skeleton className="h-6 w-6 rounded-md bg-slate-100" />
               </div>
               <Skeleton className="h-14 w-full rounded-xl bg-slate-50 border border-slate-100" />
            </div>

            <div className="space-y-3">
               <div className="flex justify-between items-center">
                  <Skeleton className="h-3 w-32 bg-slate-100" />
                  <Skeleton className="h-6 w-6 rounded-md bg-slate-100" />
               </div>
               <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[95%]" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[98%]" />
                  <Skeleton className="h-4 w-[80%]" />
               </div>
            </div>

            <div className="space-y-3 pt-2">
               <div className="flex justify-between items-center">
                  <Skeleton className="h-3 w-20 bg-slate-100" />
                  <Skeleton className="h-6 w-6 rounded-md bg-slate-100" />
               </div>
               <Skeleton className="h-12 w-full rounded-xl shadow-sm" />
            </div>
          </div>
        ) : !data ? (
          /* EMPTY STATE */
          <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
            <div className="relative mb-6">
              <div className={`absolute inset-0 rounded-full blur-xl opacity-20 animate-pulse ${
                mode === 'seo' ? 'bg-emerald-200' : 'bg-violet-200'
              }`} />
              <div className="relative h-20 w-20 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center">
                {mode === 'seo' ? (
                  <Search className="h-10 w-10 text-slate-300" />
                ) : (
                  <Globe2 className="h-10 w-10 text-slate-300" />
                )}
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {t("preview.empty.title", locale) || "Ready to Create"}
            </h3>
            <p className="text-slate-500 max-w-xs mx-auto leading-relaxed">
              {mode === 'seo' 
                ? "Fill in details to generate high-ranking, SEO-optimized content." 
                : "Fill in the product details on the left and watch the AI magic happen here."}
            </p>
          </div>
        ) : (
          /* DATA CONTENT */
          data[activeTab] && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 mt-2">
              
              {/* Title Section */}
              <div className="group space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <Type className="h-3.5 w-3.5" />
                    Product Title
                  </div>
                  <CopyButton text={data[activeTab].title} id="title" />
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 group-hover:border-violet-200 group-hover:shadow-sm transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                    {data[activeTab].title}
                  </h3>
                </div>
              </div>

              {/* Description Section */}
              <div className="group space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <AlignLeft className="h-3.5 w-3.5" />
                    Localized Description
                  </div>
                  <CopyButton text={data[activeTab].description} id="desc" />
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 group-hover:border-violet-200 group-hover:shadow-sm transition-all duration-300">
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {data[activeTab].description}
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="group space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <MousePointer2 className="h-3.5 w-3.5" />
                    Call to Action
                  </div>
                  <CopyButton text={data[activeTab].cta} id="cta" />
                </div>
                <div className="p-1">
                  <Button className="w-full h-12 rounded-xl bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-200 font-semibold text-lg transition-all active:scale-[0.98]">
                    {data[activeTab].cta}
                  </Button>
                </div>
              </div>
            </div>
          )
        )}
      </ScrollArea>

      {/* Footer Actions */}
      {data && !loading && (
        <div className="p-4 border-t border-slate-100 bg-white flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">
              AI-generated content.
            </span>
            <span className="text-slate-300">•</span>
            <a
              href="https://lingo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-violet-600 font-medium transition-colors"
            >
              Powered by <span className="font-bold">lingo.dev</span>
            </a>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleCopy(
              `${data[activeTab]?.title}\n\n${data[activeTab]?.description}\n\n${data[activeTab]?.cta}`,
              'all'
            )}
            className="rounded-lg border-slate-200 text-slate-600 hover:text-violet-600 hover:border-violet-200 hover:bg-violet-50 transition-colors gap-2"
          >
            {copyState === 'all' ? (
              <>
                <Check className="h-4 w-4" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" /> Copy All
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}