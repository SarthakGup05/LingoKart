import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { LingoProvider } from "@/components/LingoProvider";

export const metadata = {
  title: "LingoKart",
  description: "Sell locally. Speak globally.",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LingoProvider>
      <html lang="en">
        <body className="bg-gray-50 text-gray-900">
          {children}
          <Toaster richColors closeButton />
        </body>
      </html>
    </LingoProvider>
  );
}
