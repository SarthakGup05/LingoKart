"use client";

import { ShoppingBag } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#02040a] py-12 border-t border-white/10 relative z-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
                <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                    <div className="p-1.5 bg-slate-800 rounded-lg">
                        <ShoppingBag className="h-4 w-4 text-slate-200" />
                    </div>
                    <span className="font-bold text-slate-300 text-lg">LingoKart</span>
                </div>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Contact Support</a>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <p>© 2026 LingoKart Inc.</p>
                    <a
                        href="https://lingo.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all"
                    >
                        <span className="text-xs text-slate-400 group-hover:text-slate-300">Powered by</span>
                        <span className="text-xs font-bold text-white">lingo.dev</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
