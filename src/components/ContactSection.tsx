import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, Clock, Globe, ArrowUpRight } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const emailAddress = 'sheikhtechulardesignsco@gmail.com';
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Shopify Store / Theme',
    budget: '$2,500 – $5,000',
    timeline: 'Within 2–4 weeks',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setSubmitted(true);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Riz,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}\n\nLooking forward to hearing from you!`
    );
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Decorative ambient accent */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-semibold border border-stone-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for New Projects</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Let's build something remarkable together.
              </h2>
              <p className="text-stone-300 text-base leading-relaxed">
                Whether you need a brand-new Shopify storefront, a custom web platform, a fast WordPress site, or performance optimization for your existing store, I’m here to help.
              </p>
            </div>

            {/* Email Contact Box */}
            <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm sm:text-base font-mono font-semibold text-stone-100 hover:text-amber-400 transition-colors break-all"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-700 hover:bg-stone-600 text-xs font-semibold text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  id="contact-send-mail-btn"
                  href={`mailto:${emailAddress}`}
                  className="cursor-pointer inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-xs font-semibold text-white transition-colors"
                >
                  <span>Open Mail App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Details */}
            <div className="grid grid-cols-2 gap-4 text-xs text-stone-300">
              <div className="p-4 rounded-xl bg-stone-800/40 border border-stone-700/50">
                <span className="text-stone-400 block mb-1 font-semibold">Response Time</span>
                <span className="text-stone-100 font-bold text-sm">Under 24 Hours</span>
              </div>
              <div className="p-4 rounded-xl bg-stone-800/40 border border-stone-700/50">
                <span className="text-stone-400 block mb-1 font-semibold">Work Engagement</span>
                <span className="text-stone-100 font-bold text-sm">Fixed Price or Retainer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-stone-800/90 border border-stone-700/90 shadow-xl">
              {submitted ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Prepared!</h3>
                  <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief has been formatted. Click below to launch your email client with all details pre-filled.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateMailto()}
                      className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Launch Pre-Filled Email</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="cursor-pointer w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-700 hover:bg-stone-600 text-stone-200 text-sm font-semibold transition-colors"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-stone-700 pb-4">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Project Inquiry Form
                    </h3>
                    <span className="text-xs text-stone-400">Direct to Riz Wan</span>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-sm text-white placeholder:text-stone-500 focus:outline-hidden focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-sm text-white placeholder:text-stone-500 focus:outline-hidden focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Project Scope / Platform
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-sm text-white focus:outline-hidden focus:border-amber-500 transition-colors"
                    >
                      <option value="Shopify Store / Theme">Shopify / Shopify Plus Storefront</option>
                      <option value="WordPress Development">WordPress & Custom CMS</option>
                      <option value="Custom Web Application">Custom Web App (React / TS / Full-Stack)</option>
                      <option value="Speed & CRO Optimization">Speed Optimization & Core Web Vitals</option>
                      <option value="eCommerce Consultation / Other">eCommerce Consultation / Other</option>
                    </select>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-sm text-white focus:outline-hidden focus:border-amber-500 transition-colors"
                      >
                        <option value="< $2,500">&lt; $2,500</option>
                        <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                        <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-sm text-white focus:outline-hidden focus:border-amber-500 transition-colors"
                      >
                        <option value="Immediately / ASAP">Immediately / ASAP</option>
                        <option value="Within 2–4 weeks">Within 2–4 weeks</option>
                        <option value="1–2 months">1–2 months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Tell me about your project & goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you want to build, any existing links, or key deadlines..."
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-xl text-sm text-white placeholder:text-stone-500 focus:outline-hidden focus:border-amber-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="cursor-pointer w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm sm:text-base transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
