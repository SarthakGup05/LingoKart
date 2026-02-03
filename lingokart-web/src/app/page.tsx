"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  ArrowRight, 
  Languages, 
  TrendingUp, 
  Users, 
  Play, 
  Globe, 
  CheckCircle2, 
  XCircle 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030712] selection:bg-violet-500/30 selection:text-violet-200 overflow-x-hidden font-sans">
      
      {/* Custom CSS for specific animations to avoid config dependencies */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#030712]/60 backdrop-blur-xl supports-[backdrop-filter]:bg-[#030712]/60">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center p-2.5 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 ring-1 ring-white/20">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">LingoKart</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/login" className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/studio">
              <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-200 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] cursor-pointer font-semibold transition-all hover:scale-105 active:scale-95 h-10 px-6">
                Launch Studio
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Section 1: The Problem (Hero) */}
        <section className="relative min-h-[110vh] flex items-center justify-center pt-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[#030712] -z-30" />
          <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] -z-20" />
          
          {/* Animated Blobs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-[128px] -z-10 animate-blob mix-blend-screen" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[128px] -z-10 animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-indigo-500/30 rounded-full blur-[128px] -z-10 animate-blob animation-delay-4000 mix-blend-screen" />

          <div className="container mx-auto px-6 text-center text-white relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-md mb-8 hover:border-violet-500/50 transition-all cursor-default group">
              <span className="flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">The #1 Conversion Killer</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] max-w-6xl mx-auto mb-8">
              Your Product is <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-2xl opacity-50"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-white to-fuchsia-200 drop-shadow-sm">Invisible</span>
              </span>
              {" "}to India.
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
              90% of Indian shoppers prefer content in <span className="text-violet-300 font-semibold">their native language</span>. 
              <br className="hidden md:block" /> If they can't read it, they won't buy it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/studio">
                <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-white text-slate-950 hover:bg-slate-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer font-bold">
                  Fix This Now
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="h-16 px-8 text-lg rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all group border border-transparent hover:border-white/10">
                <Play className="mr-2 h-5 w-5 fill-current group-hover:text-violet-400 transition-colors" /> Watch Demo
              </Button>
            </div>

            {/* Social Proof Strip */}
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center gap-4">
              <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Trusted by Next-Gen Brands</p>
              <div className="flex gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Placeholders for logos - visual representation only */}
                 <div className="h-8 w-24 bg-white/20 rounded mix-blend-overlay"></div>
                 <div className="h-8 w-24 bg-white/20 rounded mix-blend-overlay"></div>
                 <div className="h-8 w-24 bg-white/20 rounded mix-blend-overlay"></div>
                 <div className="h-8 w-24 bg-white/20 rounded mix-blend-overlay hidden sm:block"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Story - Clean White Theme */}
        <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
          {/* Decorative Pattern */}
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
                    <p className="text-red-700/80 mt-1">Confused and hesitant, she closed the tab. <br/>You just lost a sale to a local competitor.</p>
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

        {/* Section 3: The Solution - Bento Grid Style */}
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

        {/* Section 4: CTA - Neon Night Theme */}
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
      </main>

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
          <p>© 2024 LingoKart Inc.</p>
        </div>
      </footer>
    </div>
  );
}