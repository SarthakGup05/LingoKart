"use client";

import { useState, useEffect } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { t } from "@/lib/i18n";
import {
  Copy,
  Check,
  Sparkles,
  Type,
  AlignLeft,
  MousePointer2,
  Bot
} from "lucide-react";

const LANGS: any = {
  en: "English",
  hi: "Hindi",
  ta: "Tamil",
  bn: "Bengali",
};

export default function PreviewPanel({ data, loading, locale }: any) {
  // CHANGED: track which section is copied (null = none, string = section id)
  const [copyState, setCopyState] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState("en");
  const [loadingStep, setLoadingStep] = useState(0);

  const LOADING_STEPS = [
    "Analyzing product context...",
    "Identifying cultural nuances...",
    "Translating to target languages...",
    "Optimizing keywords for SEO...",
    "Finalizing your listing..."
  ];

  useEffect(() => {
    if (loading) {
      setLoadingStep(0);
      const interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % LOADING_STEPS.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  // CHANGED: Added sectionId parameter to identify which button was clicked
  const handleCopy = (text: string, sectionId: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopyState(sectionId); // Set the specific section as copied

      toast.success(t("preview.copySuccess", locale) || "Copied to clipboard", {
        description: t("preview.copyDescription", locale) || "Content is ready to paste.",
      });

      setTimeout(() => setCopyState(null), 2000);
    });
  };

  // HELPER: Renders the small copy button for sections
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

  // 1. Empty State
  if (!data && !loading) {
    return (
      <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-violet-200 rounded-full blur-xl opacity-20 animate-pulse" />
          <div className="relative h-20 w-20 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center">
            <Bot className="h-10 w-10 text-slate-300" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {t("preview.empty.title", locale) || "Ready to Create"}
        </h3>
        <p className="text-slate-500 max-w-xs mx-auto leading-relaxed">
          {t("preview.empty.body", locale) || "Fill in the product details on the left and watch the AI magic happen here."}
        </p>
      </div>
    );
  }

  // 2. Main Content
  return (
    <div className="h-full flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative">

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-50 bg-white/60 backdrop-blur-sm flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-6">
            <div className="space-y-3 text-center mb-8">
              <div className="relative mx-auto h-12 w-12 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-violet-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-violet-600 border-t-transparent animate-spin"></div>
                <Sparkles className="h-5 w-5 text-violet-600 animate-pulse" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-800 animate-in fade-in slide-in-from-bottom-2">
                  {LOADING_STEPS[loadingStep]}
                </p>
                <p className="text-xs text-slate-400">This usually takes about 10-15 seconds</p>
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4 mx-auto rounded-lg" />
              <Skeleton className="h-32 w-full rounded-xl" />
              <Skeleton className="h-12 w-1/3 mx-auto rounded-lg" />
            </div>
          </div>
        </div>
      )}

      {/* Header & Tabs */}
      <div className="border-b border-slate-100 bg-slate-50/50 p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full h-12 bg-slate-200/50 p-1 rounded-xl">
            {Object.keys(LANGS).map((lang) => (
              <TabsTrigger
                key={lang}
                value={lang}
                disabled={!data && !loading}
                className="flex-1 rounded-lg text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-violet-700 data-[state=active]:shadow-sm transition-all"
              >
                {LANGS[lang]}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Content Area */}
      <ScrollArea className="flex-1 p-6">
        {data && data[activeTab] ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Title Section */}
            <div className="group space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
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
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
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
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
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
        ) : (
          !loading && <div className="h-full" />
        )}
      </ScrollArea>

      {/* Footer Actions */}
      {data && (
        <div className="p-4 border-t border-slate-100 bg-white flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">
              AI-generated content may require review.
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