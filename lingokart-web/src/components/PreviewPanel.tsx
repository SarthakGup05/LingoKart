"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const LANGS: any = {
  en: "English",
  hi: "Hindi",
  ta: "Tamil",
  bn: "Bengali",
};

export default function PreviewPanel({ data }: any) {
  if (!data) {
    return (
      <div className="bg-white p-6 rounded-xl shadow text-gray-400 flex items-center justify-center">
        Generated listings will appear here
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Localized Preview</h2>

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
            <div className="space-y-3">
              <h3 className="text-lg font-bold">{data[lang]?.title}</h3>

              <p className="text-gray-700">{data[lang]?.description}</p>

              <Button
                variant="secondary"
                onClick={() =>
                  navigator.clipboard.writeText(
                    `${data[lang]?.title}\n${data[lang]?.description}\n${data[lang]?.cta}`
                  )
                }
              >
                {data[lang]?.cta}
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
