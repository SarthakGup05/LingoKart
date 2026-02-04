"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { t } from "@/lib/i18n";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Loader2,
  Sparkles,
  Tag,
  DollarSign,
  PenLine,
  Type,
  Settings2,
  Wand2
} from "lucide-react";

export default function ProductForm({ onGenerate, loading, locale }: any) {
  const [product, setProduct] = useState({
    name: "Handmade Soy Candle",
    description: "A natural handmade soy candle with lavender fragrance for relaxation.",
    price: "499",
    category: "Home Decor",
  });

  const [tone, setTone] = useState("casual");
  const [mode, setMode] = useState("basic");

  const generate = async () => {
    if (!product.name || !product.description) {
      toast.error(t("error.missingTitle", locale), {
        description: t("error.missingDescription", locale),
      });
      return;
    }

    await onGenerate({ product, tone, mode });
  };

  return (
    <Card className="h-full border-slate-200 bg-white shadow-sm transition-all hover:shadow-md duration-300 relative overflow-hidden group">
      {/* Subtle top accent line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      <CardHeader className="pb-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl font-bold tracking-tight text-slate-900">
              {t("form.sectionTitle", locale) || "Product Details"}
            </CardTitle>
            <CardDescription className="text-sm text-slate-500">
              {t("form.sectionSubtitle", locale) || "Enter the core details to localize."}
            </CardDescription>
          </div>
          <div className="h-10 w-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100 shadow-sm">
            <PenLine className="h-5 w-5" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Product Details Section */}
        <div className="space-y-5">
          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {t("form.productName", locale)}
            </Label>
            <Input
              className="h-11 bg-slate-50 border-slate-200 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 transition-all font-medium text-slate-900 placeholder:text-slate-400"
              placeholder={t("form.productName.placeholder", locale)}
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {t("form.productDescription", locale)}
            </Label>
            <Textarea
              className="min-h-[120px] resize-none bg-slate-50 border-slate-200 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 transition-all text-slate-900 placeholder:text-slate-400 leading-relaxed"
              placeholder={t("form.productDescription.placeholder", locale)}
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </div>
        </div>

        {/* Price & Category Grid */}
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {t("form.price", locale)}
            </Label>
            <div className="relative group/input">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400 group-focus-within/input:text-violet-500 transition-colors">
                ₹
              </span>
              <Input
                className="h-11 pl-7 bg-slate-50 border-slate-200 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 transition-all font-medium text-slate-900"
                placeholder="0.00"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {t("form.category", locale)}
            </Label>
            <div className="relative group/input">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within/input:text-violet-500 transition-colors" />
              <Input
                className="h-11 pl-9 bg-slate-50 border-slate-200 focus:bg-white focus:border-violet-500 focus:ring-violet-500/20 transition-all text-slate-900"
                placeholder="e.g. Fashion"
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* Config Options */}
        <div className="pt-4 border-t border-slate-100">
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {t("form.tone", locale)}
              </Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger className="h-11 bg-white border-slate-200 focus:border-violet-500 focus:ring-violet-500/20 text-slate-700">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casual">{t("form.tone.casual", locale) || "Casual & Friendly"}</SelectItem>
                  <SelectItem value="formal">{t("form.tone.formal", locale) || "Formal & Professional"}</SelectItem>
                  <SelectItem value="festive">{t("form.tone.festive", locale) || "Festive & Emotional"}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {t("form.mode", locale)}
              </Label>
              <Select value={mode} onValueChange={setMode}>
                <SelectTrigger className="h-11 bg-white border-slate-200 focus:border-violet-500 focus:ring-violet-500/20 text-slate-700">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">{t("form.mode.basic", locale) || "Standard Translation"}</SelectItem>
                  <SelectItem value="seo">{t("form.mode.seo", locale) || "SEO Optimized"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Button
            className="h-14 w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-bold text-lg cursor-pointer group relative overflow-hidden"
            disabled={loading}
            onClick={generate}
          >
            {/* Gradient shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin text-white/50" />
                <span className="text-white/80 animate-pulse font-medium">{t("loading", locale) || "Generating..."}</span>
              </>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Wand2 className="h-5 w-5 text-violet-400 group-hover:text-violet-300 transition-colors" />
                <span>{t("button.generate", locale) || "Generate Listing"}</span>
              </div>
            )}
          </Button>
          <p className="text-center text-xs text-slate-400 mt-3">
            Uses AI to detect context and cultural nuances.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}