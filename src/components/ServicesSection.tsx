import React from 'react';
import { ShoppingBag, Code2, Globe2, Gauge, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onContactClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onContactClick }) => {
  const services = [
    {
      id: 'service-shopify',
      icon: ShoppingBag,
      iconColor: 'text-amber-700 bg-amber-100',
      title: 'Shopify & Shopify Plus Development',
      badge: 'Specialty',
      tagline: 'High-converting custom storefronts built for scale and viral traffic surges.',
      deliverables: [
        'Bespoke Shopify Theme 2.0 architecture from Figma or reference',
        'Custom Liquid sections with intuitive merchant drag-and-drop',
        'Slide-out Ajax cart drawers, free-shipping bars, and tiered bundle upsells',
        'Recharge subscription setups & international multi-currency routing',
        'Shopify app configurations, Klaviyo syncing, and zero-bloat code cleanup'
      ]
    },
    {
      id: 'service-custom-web',
      icon: Code2,
      iconColor: 'text-blue-700 bg-blue-100',
      title: 'Custom Web Apps & Frontends',
      badge: 'Full-Stack',
      tagline: 'Reactive, modern web applications built with TypeScript, React, and robust APIs.',
      deliverables: [
        'Single Page Applications (SPAs) & interactive client dashboards',
        'Algorithmic valuation tools, instant price calculators, and multi-step forms',
        'Headless commerce architecture with Storefront and REST/GraphQL APIs',
        'Responsive, mobile-first design crafted with clean Tailwind CSS',
        'Integration of payment gateways (Stripe, PayPal, Shop Pay)'
      ]
    },
    {
      id: 'service-wordpress',
      icon: Globe2,
      iconColor: 'text-violet-700 bg-violet-100',
      title: 'WordPress & Bespoke CMS Development',
      badge: 'Tailored',
      tagline: 'Lightweight, modern WordPress platforms engineered without slow or fragile plugins.',
      deliverables: [
        '100% custom-coded WordPress themes tailored to your brand identity',
        'Flexible content editing systems powered by Advanced Custom Fields (ACF Pro)',
        'Real-time appointment scheduling & clinic/salon booking engine integrations',
        'Headless WordPress setups paired with modern React frontends',
        'Enterprise security hardening, database optimization, and automated backups'
      ]
    },
    {
      id: 'service-cro-speed',
      icon: Gauge,
      iconColor: 'text-emerald-700 bg-emerald-100',
      title: 'Core Web Vitals & Speed Optimization',
      badge: 'High Impact',
      tagline: 'Transforming sluggish websites into lightning-fast revenue generators.',
      deliverables: [
        'Comprehensive audit identifying render-blocking scripts & unused code',
        'Core Web Vitals remediation (LCP, FID, CLS) targeting 90+ PageSpeed scores',
        'Optimized critical asset delivery, modern WebP/AVIF images, and lazy loading',
        'Conversion Rate Optimization (CRO) audit across product PDPs and checkouts',
        'Technical SEO, JSON-LD Schema markup, and OpenGraph social enhancements'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>What I Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Services & Expertise
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            End-to-end web development solutions designed to launch, optimize, and scale your digital business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-stone-400 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 font-medium">
                    {service.tagline}
                  </p>

                  <div className="mt-6 pt-5 border-t border-stone-100 space-y-2.5">
                    <span className="text-xs uppercase font-bold text-stone-400 tracking-wider block mb-3">
                      Included Capabilities
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100">
                  <button
                    onClick={onContactClick}
                    className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 hover:text-amber-700 transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
