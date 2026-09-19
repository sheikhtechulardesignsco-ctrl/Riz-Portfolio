import React from 'react';
import { ArrowUp, Mail, ExternalLink, Heart } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-sm">
                RW
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">Riz Wan</span>
            </div>
            <p className="text-stone-400 max-w-sm leading-relaxed text-xs sm:text-sm">
              Senior Web Developer specializing in custom Shopify Plus themes, WordPress CMS, custom full-stack web applications, and conversion-engineered eCommerce.
            </p>
            <div className="pt-2">
              <a
                href="mailto:sheikhtechulardesignsco@gmail.com"
                className="inline-flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors font-mono text-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>sheikhtechulardesignsco@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-bold text-stone-200 tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#featured-work" className="hover:text-stone-200 transition-colors">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-200 transition-colors">
                  Services & Solutions
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-stone-200 transition-colors">
                  Skills & Architecture
                </a>
              </li>
              <li>
                <a href="#why-riz" className="hover:text-stone-200 transition-colors">
                  Work Ethos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-stone-200 transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Live Sites */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-bold text-stone-200 tracking-wider block">
              Selected Live Sites
            </span>
            <ul className="space-y-1.5 font-mono text-[11px]">
              {PROJECTS.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{p.displayUrl}</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a href="#featured-work" className="text-stone-400 hover:text-stone-200 font-sans text-xs flex items-center gap-1 font-medium">
                  <span>Explore all projects</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} Riz Wan. Engineered with high-performance standards & clean code.
          </p>

          <button
            onClick={scrollToTop}
            className="cursor-pointer inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
