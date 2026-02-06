"use client";

import { Globe, Sparkles } from "lucide-react";

export function TechStackSection() {
    return (
        <section className="py-32 bg-[#02040a] relative overflow-hidden border-t border-white/5">

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400 mb-4">
                        <Sparkles className="h-3 w-3 text-cyan-400" />
                        <span>Next-Gen Translation Stack</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        World-Class AI. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                            Native Indian Context.
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        We don't use generic translators. We combine Google's most advanced reasoning model with Lingo.dev's localization infrastructure.
                    </p>
                </div>

                {/* The Tech Stack Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Card 1: Gemini AI */}
                    <div className="relative group rounded-3xl bg-[#0a0f1e] border border-white/10 p-8 md:p-12 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Icon */}
                        <div className="relative z-10 h-14 w-14 rounded-2xl bg-cyan-950/50 border border-cyan-900/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Sparkles className="h-7 w-7 text-cyan-400" />
                        </div>

                        <div className="relative z-10 space-y-4">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                Google Gemini 1.5
                                <span className="text-xs px-2 py-0.5 rounded bg-cyan-900/50 text-cyan-300 border border-cyan-800">SEO Engine</span>
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                It doesn't just translate; it <span className="text-cyan-200 font-medium">reasons</span>. Gemini analyzes your product to generate high-ranking keywords and culturally relevant descriptions that sound human, not robotic.
                            </p>

                            {/* Visual: SEO tags */}
                            <div className="flex flex-wrap gap-2 pt-4">
                                {['#Keywords', '#MetaTags', '#AltText', '#CulturalContext'].map((tag) => (
                                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-black/50 text-cyan-500/70 border border-cyan-900/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Lingo.dev */}
                    <div className="relative group rounded-3xl bg-[#0a0f1e] border border-white/10 p-8 md:p-12 overflow-hidden hover:border-violet-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Icon */}
                        <div className="relative z-10 h-14 w-14 rounded-2xl bg-violet-950/50 border border-violet-900/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Globe className="h-7 w-7 text-violet-400" />
                        </div>

                        <div className="relative z-10 space-y-4">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                Lingo.dev
                                <span className="text-xs px-2 py-0.5 rounded bg-violet-900/50 text-violet-300 border border-violet-800">Infrastructure</span>
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                The backbone of our localization. Lingo.dev ensures your content syncs instantly across your app and website, managing complex React/Next.js internationalization (i18n) effortlessly.
                            </p>

                            {/* Visual: Code snippet vibe */}
                            <div className="pt-4 font-mono text-xs bg-black/50 p-3 rounded-lg border border-white/5 text-slate-500">
                                <span className="text-violet-400">await</span> localize(<span className="text-green-400">"product_id"</span>);<br />
                                <span className="text-slate-600">// Synced in 30ms</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Language Strip: Tier 1 Focus */}
                <div className="mt-20 border-t border-white/5 pt-12">
                    <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
                        Currently Optimizing For India's Top 3
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {/* Hindi */}
                        <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xl border border-orange-500/20">
                                अ
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Hindi</h4>
                                <p className="text-xs text-slate-500">500M+ Speakers</p>
                            </div>
                        </div>

                        {/* Tamil */}
                        <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold text-xl border border-yellow-500/20">
                                த
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Tamil</h4>
                                <p className="text-xs text-slate-500">South India Market</p>
                            </div>
                        </div>

                        {/* Bengali */}
                        <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-xl border border-green-500/20">
                                ব
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Bengali</h4>
                                <p className="text-xs text-slate-500">East India Market</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-xs text-slate-600 mt-6">
                        + Telugu, Marathi, and Kannada coming in Q2.
                    </p>
                </div>

            </div>
        </section>
    );
}
