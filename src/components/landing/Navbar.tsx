"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030712]/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center p-2 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 ring-1 ring-white/10">
                        <ShoppingBag className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white">LingoKart</span>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/studio">
                        <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-200 font-semibold transition-all h-9 px-5 text-sm">
                            Launch Studio
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
