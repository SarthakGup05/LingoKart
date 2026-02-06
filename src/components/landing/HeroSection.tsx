"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Globe } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen pt-24 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center">

            {/* Background: Spotlight & Grid */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-600/20 rounded-[100%] blur-[100px] -z-20 opacity-50 pointer-events-none" />
            <div className="absolute inset-0 bg-[#030712] -z-30" />
            <div className="absolute inset-0 bg-grid-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-20 opacity-20" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Badge: Animated Border */}
                <div className="relative inline-flex group mb-8 animate-float-delayed">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <button className="relative inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-white transition-all duration-200 bg-slate-900 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-default">
                        <Sparkles className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent font-bold">New:</span>
                        <span className="text-slate-300">Native Hindi & Tamil Support</span>
                    </button>
                </div>

                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] max-w-5xl mx-auto mb-8 text-white">
                    Your Product is <br className="hidden md:block" />
                    <span className="relative inline-block mx-2">
                        <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 opacity-30 blur-2xl"></span>
                        <span className="relative bg-gradient-to-r from-violet-300 via-white to-fuchsia-300 bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent drop-shadow-sm">
                            Invisible
                        </span>
                    </span>
                    to India.
                </h1>

                {/* Subhead */}
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                    90% of Indian shoppers only buy in their native language.
                    <br className="hidden md:block" />
                    LingoKart instantly translates your store into
                    <span className="text-white font-semibold"> 03+ regional dialects </span>
                    with cultural context.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Link href="/studio" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full bg-white text-slate-950 hover:bg-slate-100 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1 font-bold group relative overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Fix This Now <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            {/* Button Shine Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
                        </Button>
                    </Link>

                    <Button variant="ghost" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
                        <Play className="mr-2 h-5 w-5" /> Watch Demo
                    </Button>
                </div>

                {/* Visual: The Product Transformation */}
                <div className="relative mt-20 w-full max-w-5xl perspective-1000">

                    {/* Floating Language Tags (Decorations) */}
                    <div className="absolute -top-12 -left-4 md:left-10 bg-slate-800/80 backdrop-blur-md border border-slate-700 p-3 rounded-2xl shadow-xl animate-float z-20 flex items-center gap-2">
                        <span className="text-2xl">🇮🇳</span>
                        <div className="text-left">
                            <p className="text-xs text-slate-400 font-medium">Translated to</p>
                            <p className="text-sm font-bold text-white">Hindi</p>
                        </div>
                    </div>

                    <div className="absolute top-20 -right-4 md:right-10 bg-slate-800/80 backdrop-blur-md border border-slate-700 p-3 rounded-2xl shadow-xl animate-float-delayed z-20 flex items-center gap-2">
                        <span className="text-2xl">⚡</span>
                        <div className="text-left">
                            <p className="text-xs text-slate-400 font-medium">Conversion</p>
                            <p className="text-sm font-bold text-emerald-400">+74% Boost</p>
                        </div>
                    </div>

                    {/* Main Interface Mockup */}
                    <div className="relative rounded-xl bg-slate-900/50 border border-white/10 p-2 shadow-2xl backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent rounded-xl pointer-events-none" />

                        {/* Browser Chrome */}
                        <div className="bg-[#0f172a] rounded-t-lg p-3 flex items-center gap-2 border-b border-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                            </div>
                            <div className="ml-4 flex-1 bg-[#1e293b] rounded-md h-6 w-full max-w-sm mx-auto flex items-center justify-center text-[10px] text-slate-500 font-mono">
                                lingokart.com/dashboard
                            </div>
                        </div>

                        {/* Dashboard Content Mock */}
                        <div className="bg-[#030712] rounded-b-lg p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">

                            {/* Left: Input (English) */}
                            <div className="space-y-4 opacity-50 blur-[1px] scale-95 transition-all hover:opacity-100 hover:blur-0 hover:scale-100 duration-500">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700">Source</div>
                                    <span className="text-sm font-semibold text-slate-300">English Listing</span>
                                </div>
                                <div className="p-4 rounded-lg border border-dashed border-slate-700 bg-slate-900/50 space-y-3">
                                    <div className="h-4 w-3/4 bg-slate-700 rounded animate-pulse" />
                                    <div className="h-20 w-full bg-slate-800/50 rounded" />
                                    <div className="h-8 w-1/3 bg-slate-800 rounded" />
                                </div>
                            </div>

                            {/* Arrow Indicator */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex h-12 w-12 bg-violet-600 rounded-full items-center justify-center shadow-lg shadow-violet-500/50 ring-4 ring-[#030712]">
                                <Zap className="h-6 w-6 text-white fill-white" />
                            </div>

                            {/* Right: Output (Localized) */}
                            <div className="space-y-4 relative">
                                <div className="absolute -inset-4 bg-violet-500/20 blur-xl rounded-full -z-10"></div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="px-2 py-0.5 rounded bg-emerald-900/30 text-[10px] text-emerald-400 border border-emerald-800">Live</div>
                                    <span className="text-sm font-semibold text-white">Localized (Tamil)</span>
                                </div>
                                <div className="p-4 rounded-lg border border-violet-500/30 bg-violet-900/10 space-y-3 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 opacity-20">
                                        <Globe className="h-12 w-12 text-violet-400" />
                                    </div>
                                    <div className="h-4 w-2/3 bg-violet-400/20 rounded" />
                                    <div className="h-2 w-full bg-violet-400/10 rounded" />
                                    <div className="h-2 w-full bg-violet-400/10 rounded" />
                                    <div className="h-2 w-4/5 bg-violet-400/10 rounded" />
                                    <div className="mt-4 flex gap-2">
                                        <div className="h-8 w-20 bg-violet-600 rounded-md shadow-lg shadow-violet-600/20" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Scrolling Social Proof */}
                <div className="mt-20 w-full overflow-hidden border-t border-white/5 pt-10">
                    <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold mb-8 text-center">Powering Cross-Border Growth For</p>
                    <div className="relative flex w-full overflow-hidden mask-linear-fade">
                        <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-32 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            {/* Logos repeated twice for seamless loop */}
                            {[1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="h-8 w-8 bg-white/20 rounded-full" />
                                    <span className="text-xl font-bold text-white/50">BRAND {i}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
