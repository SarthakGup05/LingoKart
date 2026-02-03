"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ProductForm({ onGenerate }: any) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const [tone, setTone] = useState("casual");

  return (
    <Card className="lift-hover rounded-3xl border border-slate-200/70 bg-white/90 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.6)] backdrop-blur">
      <CardHeader className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Create listing
        </p>
        <CardTitle className="text-2xl text-slate-900">
          Product Details
        </CardTitle>
        <p className="text-sm text-slate-500">
          Enter product information and pick a tone for your localized copy.
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Product name
          </Label>
          <Input
            className="h-11"
            placeholder="Handwoven bamboo tote"
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Description
          </Label>
          <Textarea
            className="min-h-[120px] resize-none"
            placeholder="Lightweight, durable, and perfect for weekend markets."
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Price
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                ₹
              </span>
              <Input
                className="h-11 pl-8"
                placeholder="1200"
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Category
            </Label>
            <Input
              className="h-11"
              placeholder="Accessories"
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Tone
          </Label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="formal">Formal</SelectItem>
              <SelectItem value="festive">Festive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="h-11 w-full rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800"
          onClick={() => onGenerate({ product, tone })}
        >
          Generate Listings
        </Button>
        <p className="text-xs text-slate-400">
          We will generate a localized headline, description, and CTA.
        </p>
      </CardContent>
    </Card>
  );
}
