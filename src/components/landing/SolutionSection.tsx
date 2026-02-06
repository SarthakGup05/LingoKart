"use client";

import { Globe, Languages, TrendingUp, Users } from "lucide-react";

export function SolutionSection() {
    return (
        <section className="py-32 bg-white relative">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Don't let language kill your growth.
                    </h2>
                    <p className="text-lg text-slate-500">
                        LingoKart instantly localizes your listings into India's top languages, retaining cultural nuances.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* Card 1 */}
                    <div className="md:col-span-2 bg-[#F8FAFC] p-8 md:p-12 rounded-3xl border border-slate-100 hover:border-violet-100 hover:shadow-2xl hover:shadow-violet-100/50 transition-all duration-300 group overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Languages className="w-64 h-64 text-violet-600 rotate-12" />
                        </div>
                        <div className="relative z-10">
                            <div className="h-12 w-12 bg-violet-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-violet-500/30">
                                <Languages className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Native Nuance Engine</h3>
                            <p className="text-slate-500 leading-relaxed text-lg max-w-md">
                                We don't just swap words. We adapt idioms, cultural context, and tone so your product feels 100% home-grown in Tamil, Hindi, or Bengali.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 text-white hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent"></div>
                        <div className="relative z-10">
                            <div className="h-12 w-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mb-6 text-white border border-white/10">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">+70% Conversion</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Shoppers are significantly more likely to trust and buy when the listing is in their mother tongue.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 group">
                        <div className="h-12 w-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Globe className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Tier 2 & 3 Cities</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Unlock the massive purchasing power of non-metro India. Reach markets your competitors are ignoring.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="md:col-span-2 bg-gradient-to-r from-fuchsia-50 to-pink-50 p-8 md:p-12 rounded-3xl border border-fuchsia-100 hover:shadow-xl transition-all duration-300 flex items-center justify-between">
                        <div className="max-w-lg">
                            <div className="h-12 w-12 bg-fuchsia-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-fuchsia-500/30">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">One Click, 12 Languages</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Manage all your localized listings from a single dashboard. Sync inventory and updates automatically.
                            </p>
                        </div>
                        <div className="hidden md:flex flex-col gap-3">
                            <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-slate-600">🇮🇳 Hindi</div>
                            <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-slate-600 translate-x-4">tamil தமிழ்</div>
                            <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-slate-600">తెలుగు Telugu</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
