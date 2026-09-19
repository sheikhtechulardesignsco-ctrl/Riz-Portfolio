import React, { useState } from 'react';
import { ArrowDown, Copy, Check, ExternalLink, Sparkles, ShoppingBag, Code, Globe, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  const [copied, setCopied] = useState(false);
  const email = 'sheikhtechulardesignsco@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const clientLogos = [
    { name: 'Fable & Mane', domain: 'fableandmane.com' },
    { name: 'Cratejoy', domain: 'cratejoy.com' },
    { name: 'Devote Digital', domain: 'devotedigital.com.au' },
    { name: 'Slick Hair Co', domain: 'slickhair.com' },
    { name: 'Peddle', domain: 'peddle.com' },
    { name: 'Okoko Cosmétiques', domain: 'okokocosmetiques.com' },
    { name: 'Etch Salon', domain: 'etchsalon.com' },
    { name: 'Rytualist', domain: 'rytualist.com' },
    { name: 'Sanpro Waste', domain: 'sanprowaste.com' },
  ];

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial from-amber-500/5 via-stone-50 to-stone-50 border-b border-stone-200/70"
    >
      {/* Subtle decorative background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3xl h-96 bg-amber-400/10 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-100 text-xs font-semibold shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">Available for Select Development Projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.08]">
            I build <span className="underline decoration-amber-500/60 decoration-4 underline-offset-6">fast</span>, high-converting storefronts & bespoke web apps.
          </h1>

          {/* Subtitle / Intro */}
          <p className="text-lg sm:text-xl text-stone-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Hello, I’m <strong className="font-semibold text-stone-900">Riz Wan</strong>. A senior web developer specializing in{' '}
            <span className="font-semibold text-stone-900">Shopify Plus</span>,{' '}
            <span className="font-semibold text-stone-900">WordPress</span>,{' '}
            <span className="font-semibold text-stone-900">Custom Web Apps</span>, and{' '}
            <span className="font-semibold text-stone-900">high-velocity eCommerce</span>.
          </p>

          {/* Core capability pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs font-medium text-stone-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100/90 border border-stone-200/80">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
              Shopify & Shopify Plus Themes
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100/90 border border-stone-200/80">
              <Code className="w-3.5 h-3.5 text-blue-600" />
              Custom Web Apps (React, TS, Node)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100/90 border border-stone-200/80">
              <Globe className="w-3.5 h-3.5 text-violet-600" />
              Custom WordPress & Headless CMS
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100/90 border border-stone-200/80">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Core Web Vitals & Speed Optimization
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              id="hero-explore-work-btn"
              onClick={onExploreClick}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 text-stone-50 font-bold text-sm sm:text-base hover:bg-stone-800 active:scale-98 transition-all shadow-md shadow-stone-900/10"
            >
              <span>Explore Client Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              id="hero-contact-btn"
              onClick={onContactClick}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-100 border border-stone-300/90 text-stone-800 font-bold text-sm sm:text-base hover:bg-stone-200/70 active:scale-98 transition-all"
            >
              <span>Get in Touch</span>
            </button>

            <button
              id="hero-copy-email-btn"
              onClick={handleCopyEmail}
              className="cursor-pointer inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white border border-stone-200 text-stone-600 text-xs sm:text-sm font-semibold hover:text-stone-900 hover:border-stone-300 transition-all shadow-2xs"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-stone-400" />
                  <span>sheikhtechulardesignsco@gmail.com</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Featured Brands Banner */}
        <div className="mt-16 pt-10 border-t border-stone-200/80">
          <p className="text-center text-xs uppercase tracking-widest text-stone-400 font-bold mb-6">
            Featured client implementations & platforms
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {clientLogos.map((client) => (
              <a
                key={client.name}
                href={`https://${client.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-3.5 rounded-xl bg-white/70 border border-stone-200/80 hover:border-stone-400 hover:bg-white hover:shadow-xs transition-all text-center"
              >
                <div className="flex items-center gap-1.5 font-bold text-stone-800 text-sm group-hover:text-stone-950">
                  <span>{client.name}</span>
                  <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[11px] text-stone-400 font-mono tracking-tight mt-0.5 group-hover:text-stone-600">
                  {client.domain}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
