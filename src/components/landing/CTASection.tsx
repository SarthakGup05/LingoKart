"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-32 bg-[#030712] relative overflow-hidden text-center border-t border-white/10">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0f172a] to-[#030712] opacity-90" />

            {/* Glow effect behind CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] -z-0 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6 space-y-10">
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                    Ready to speak to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">1.4 Billion People?</span>
                </h2>

                <div className="flex flex-col items-center gap-6">
                    <Link href="/studio">
                        <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-slate-950 hover:bg-slate-200 shadow-[0_0_60px_-15px_rgba(255,255,255,0.6)] transition-all hover:scale-105 font-bold cursor-pointer border-4 border-transparent hover:border-violet-200/50 bg-clip-padding">
                            Start Localizing Free <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </Link>
                    <p className="text-slate-500 text-sm">No credit card required · 14-day free trial</p>
                </div>

                <div className="pt-8 flex flex-col items-center gap-3">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-10 w-10 rounded-full border-2 border-[#030712] bg-slate-700 overflow-hidden relative">
                                {/* Placeholder avatars */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-600 to-slate-500"></div>
                            </div>
                        ))}
                        <div className="h-10 w-10 rounded-full border-2 border-[#030712] bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                            +2k
                        </div>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">Join 2,000+ brands selling in local languages</p>
                </div>
            </div>
        </section>
    );
}
