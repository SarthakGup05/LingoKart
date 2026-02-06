"use client";

import { XCircle } from "lucide-react";

export function StorySection() {
    return (
        <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/50 via-transparent to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Text Side */}
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Riya</span>. <br />
                                She wants to buy.
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                But she primarily speaks Tamil.
                            </p>
                        </div>

                        <div className="space-y-6 text-lg text-slate-500 leading-relaxed border-l-2 border-slate-200 pl-8">
                            <p>
                                Riya found your store. She loved the product photos.
                                But the description was pure technical English:
                                <span className="block mt-2 italic text-slate-400">"Handcrafted oil painting, archival quality canvas."</span>
                            </p>
                            <p>
                                She didn't understand <span className="text-red-500 font-semibold bg-red-50 px-1 rounded">"Archival"</span>.
                                She felt disconnected.
                            </p>
                        </div>

                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                            <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-red-900">The Result?</h4>
                                <p className="text-red-700/80 mt-1">Confused and hesitant, she closed the tab. <br />You just lost a sale to a local competitor.</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Side - The "Card" */}
                    <div className="order-1 lg:order-2 perspective-1000 group">
                        <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden transform transition-all duration-700 rotate-y-12 group-hover:rotate-y-0 group-hover:scale-[1.02]">
                            {/* Phone Header */}
                            <div className="absolute top-0 w-full h-8 bg-slate-100 border-b border-slate-200 flex items-center justify-center gap-1">
                                <div className="w-16 h-4 bg-black rounded-b-xl"></div>
                            </div>

                            {/* App Content */}
                            <div className="pt-12 px-6 pb-6 space-y-6 bg-white h-full relative">
                                {/* Product Image Placeholder */}
                                <div className="w-full aspect-square bg-slate-100 rounded-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 flex items-center justify-center text-4xl">🎨</div>
                                </div>

                                {/* Product Title */}
                                <div className="space-y-2">
                                    <div className="h-6 w-3/4 bg-slate-100 rounded animate-pulse" />
                                    <div className="h-4 w-1/2 bg-slate-50 rounded animate-pulse" />
                                </div>

                                {/* The Barrier Alert */}
                                <div className="absolute inset-x-4 bottom-20 bg-white/80 backdrop-blur-md border border-red-100 p-4 rounded-xl shadow-lg transform translate-y-2 transition-transform duration-500">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                                        <span className="text-xs font-bold text-slate-400 uppercase">Translation Missing</span>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-800">User dropped off due to language barrier.</p>
                                </div>

                                {/* Buy Button */}
                                <div className="absolute bottom-6 left-6 right-6 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white font-medium opacity-50">
                                    Add to Cart
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements behind phone */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-orange-200 to-amber-100 rounded-[3rem] -z-10 blur-xl opacity-60 transform rotate-6 transition-transform group-hover:rotate-3"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
