"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function ProductForm({ onGenerate, loading, locale }: any) {
  const [product, setProduct] = useState({
    name: "Handmade Soy Candle",
    description:
      "A natural handmade soy candle with lavender fragrance for relaxation.",
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
    <Card className="lift-hover rounded-2xl border border-slate-200/70 bg-white/90 p-8 shadow-sm backdrop-blur">
      <CardHeader className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          {t("form.kicker", locale)}
        </p>
        <CardTitle className="text-2xl text-slate-900">
          {t("form.sectionTitle", locale)}
        </CardTitle>
        <p className="text-sm text-gray-600">
          {t("form.sectionSubtitle", locale)}
        </p>
      </CardHeader>
      <CardContent className="space-y-5 p-0">
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t("form.productName", locale)}
          </Label>
          <Input
            className="h-11"
            placeholder={t("form.productName.placeholder", locale)}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t("form.productDescription", locale)}
          </Label>
          <Textarea
            className="min-h-[120px] resize-none"
            placeholder={t("form.productDescription.placeholder", locale)}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t("form.price", locale)}
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                ₹
              </span>
              <Input
                className="h-11 pl-8"
                placeholder={t("form.price.placeholder", locale)}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t("form.category", locale)}
            </Label>
            <Input
              className="h-11"
              placeholder={t("form.category.placeholder", locale)}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t("form.tone", locale)}
          </Label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="casual">
                {t("form.tone.casual", locale)}
              </SelectItem>
              <SelectItem value="formal">
                {t("form.tone.formal", locale)}
              </SelectItem>
              <SelectItem value="festive">
                {t("form.tone.festive", locale)}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t("form.mode", locale)}
          </Label>
          <Select value={mode} onValueChange={setMode}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Select mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">{t("form.mode.basic", locale)}</SelectItem>
              <SelectItem value="seo">{t("form.mode.seo", locale)}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="h-11 w-full rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 cursor-pointer"
          disabled={loading}
          onClick={generate}
        >
          {loading ? t("loading", locale) : t("button.generate", locale)}
        </Button>
        <p className="text-xs text-slate-400">{t("form.helper", locale)}</p>
      </CardContent>
    </Card>
  );
}
