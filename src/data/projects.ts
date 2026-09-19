import { Project, SkillCategory } from '../types';
import peddleHeroImg from '../assets/images/peddle_hero_preview_1789804218520.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'fable-and-mane',
    title: 'Fable & Mane',
    url: 'https://fableandmane.com/',
    displayUrl: 'fableandmane.com',
    categories: ['shopify', 'ecommerce'],
    categoryBadge: 'Shopify Plus & DTC',
    tagline: 'Global Holistic Ayurvedic Haircare & Beauty Brand',
    summary: 'Custom Shopify Plus storefront powering an internationally acclaimed beauty house featured globally in Sephora.',
    description: 'Engineered a bespoke, high-conversion Shopify Plus shopping journey tailored for multi-currency international commerce. Built dynamic interactive hair diagnosis discovery tools, custom product page variant selectors, localized checkout flows, and frictionless Recharge subscription logic.',
    clientType: 'Global Beauty & Haircare Brand',
    metric: 'Global Scale',
    metricLabel: 'Sephora Partner & Worldwide Shipping',
    technologies: ['Shopify Plus', 'Liquid', 'JavaScript ES6+', 'Recharge API', 'Tailwind CSS', 'Klaviyo'],
    keyFeatures: [
      'Custom theme architecture with bespoke Liquid sections',
      'Interactive Hair Quiz & personalized diagnostic finder',
      'Multi-currency geo-routing and localized payment gateways',
      'High-converting slide-out cart drawer with dynamic upsells',
      'Speed optimization adhering to strict Core Web Vitals'
    ],
    accentColor: '#B45309', // Warm amber / terracotta
    headerBg: 'from-amber-900/10 via-amber-800/5 to-transparent',
    iconLetter: 'FM',
    heroImage: 'https://fableandmane.com/cdn/shop/files/Untitled-11_1200x630.jpg?v=1757930941'
  },
  {
    id: 'cratejoy',
    title: 'Cratejoy',
    url: 'https://www.cratejoy.com/',
    displayUrl: 'cratejoy.com',
    categories: ['custom', 'ecommerce'],
    categoryBadge: 'High-Volume Marketplace',
    tagline: "Premier Subscription Box Marketplace & Merchant Ecosystem",
    summary: 'Massive-scale subscription discovery platform connecting thousands of independent merchants to millions of recurring subscribers.',
    description: 'Contributed to high-volume marketplace frontend architecture, complex subscription renewal and checkout flows, dynamic product filtering engines, and merchant catalog administration dashboards.',
    clientType: 'Subscription eCommerce Platform',
    metric: 'Millions',
    metricLabel: 'Monthly Active Shoppers',
    technologies: ['React', 'Custom Framework', 'TypeScript', 'Stripe Connect', 'ElasticSearch UI', 'REST APIs'],
    keyFeatures: [
      'High-throughput catalog search and real-time category filtering',
      'Complex multi-tier subscription billing and recurring order flows',
      'Mobile-first discovery feeds with dynamic merchant ratings',
      'Performance tuning across massive product taxonomies',
      'Responsive checkout flow supporting coupon engines and gift cards'
    ],
    accentColor: '#2563EB', // Blue
    headerBg: 'from-blue-900/10 via-blue-800/5 to-transparent',
    iconLetter: 'CJ',
    heroImage: 'https://www.cratejoy.com/cdn/shop/files/cratejoy-og_3fd005e4-1327-499f-9073-d6181390874d.jpg?v=1675888371'
  },
  {
    id: 'devote-digital',
    title: 'Devote Digital',
    url: 'https://devotedigital.com.au/',
    displayUrl: 'devotedigital.com.au',
    categories: ['custom', 'wordpress'],
    categoryBadge: 'Headless & Agency',
    tagline: 'Leading Creative Digital Agency & Growth Studio',
    summary: 'Award-winning Australian digital agency website boasting smooth micro-interactions, responsive case studies, and headless content delivery.',
    description: 'Developed modern, high-aesthetic web experiences with bespoke motion design, fluid typography, and snappy headless content hydration. Built interactive project case study explorers and dynamic lead capture workflows.',
    clientType: 'Creative Digital Agency (Australia)',
    metric: '< 0.8s',
    metricLabel: 'First Contentful Paint',
    technologies: ['Headless WordPress', 'React', 'TypeScript', 'Motion', 'Tailwind CSS', 'Webpack'],
    keyFeatures: [
      'Editorial typography pairing and fluid viewport responsiveness',
      'Smooth scroll transitions and contextual hover interactions',
      'Dynamic agency portfolio showcase with video & media embeds',
      'Custom headless API endpoints for lightning-fast hydration',
      'Interactive service inquiry and project estimation funnel'
    ],
    accentColor: '#7C3AED', // Violet
    headerBg: 'from-purple-900/10 via-purple-800/5 to-transparent',
    iconLetter: 'DD',
    heroImage: 'https://devotedigital.com.au/cdn/shop/files/preview_images/39ee114d1b984868ac57697a038e82c8.thumbnail.0000000000_1920x.jpg?v=1748332624'
  },
  {
    id: 'slick-hair-company',
    title: 'Slick Hair Company',
    url: 'https://slickhair.com/',
    displayUrl: 'slickhair.com',
    categories: ['shopify', 'ecommerce'],
    categoryBadge: 'Viral DTC Shopify',
    tagline: 'Viral Beauty & Hair Styling Essentials Powerhouse',
    summary: 'Ultra-fast direct-to-consumer Shopify storefront engineered to withstand massive viral traffic surges from TikTok and Instagram.',
    description: 'Built a high-converting DTC storefront with custom Bundle & Save configurators, sticky mobile quick-buy bars, tiered discount progress bars, and frictionless Shop Pay checkout routing.',
    clientType: 'Global DTC Beauty Brand',
    metric: 'High Volume',
    metricLabel: 'Viral Traffic & Product Drops',
    technologies: ['Shopify 2.0', 'Liquid', 'Vanilla JS', 'Shop Pay', 'Gorgias', 'Klaviyo'],
    keyFeatures: [
      'Custom Bundle & Save builder increasing Average Order Value',
      'Sticky mobile ATC (Add-To-Cart) bar optimized for social shoppers',
      'Free shipping threshold progress bar in slide-out cart drawer',
      'Optimized asset loading with sub-second mobile page loads',
      'Seamless social proof widgets and verified customer review carousels'
    ],
    accentColor: '#DB2777', // Pink / Rose
    headerBg: 'from-pink-900/10 via-pink-800/5 to-transparent',
    iconLetter: 'SH',
    heroImage: 'https://slickhair.com/cdn/shop/files/SH_CREATIVE_AUG_WEB-35.jpg?v=1756859932'
  },
  {
    id: 'okoko-cosmetiques',
    title: 'Okoko Cosmétiques',
    url: 'https://okokocosmetiques.com/',
    displayUrl: 'okokocosmetiques.com',
    categories: ['shopify', 'ecommerce'],
    categoryBadge: 'Luxury Skincare & Shopify',
    tagline: 'Multi-Award-Winning Luxury Organic Skincare',
    summary: 'Exquisite luxury beauty boutique delivering artisanal storytelling, botanical ingredient glossaries, and bilingual customer touchpoints.',
    description: 'Crafted a bespoke luxury aesthetic featuring generous whitespace, refined gold & obsidian accents, interactive skin concern selectors, and comprehensive French/English localization for global clientele.',
    clientType: 'Haute Botanical Skincare House',
    metric: 'Award-Winning',
    metricLabel: 'Luxury Clean Beauty Standards',
    technologies: ['Shopify Plus', 'Liquid', 'Bilingual Localization (EN/FR)', 'Custom CSS/JS', 'Recharge'],
    keyFeatures: [
      'Sophisticated luxury editorial design with bespoke typography',
      'Interactive botanical ingredient explorer with active benefits',
      'Full bilingual localization (English & French) with instant currency switch',
      'Curated routine quiz recommending targeted skincare regimens',
      'High-tier VIP loyalty program & luxury gift packaging options'
    ],
    accentColor: '#D97706', // Gold / Amber
    headerBg: 'from-amber-900/10 via-amber-800/5 to-transparent',
    iconLetter: 'OC',
    heroImage: 'https://okokocosmetiques.com/cdn/shop/files/IMG_3956_1.jpg?v=1733103169&width=1100'
  },
  {
    id: 'peddle',
    title: 'Peddle',
    url: 'https://peddle.com/',
    displayUrl: 'peddle.com',
    categories: ['custom', 'ecommerce'],
    categoryBadge: 'Custom Web Application',
    tagline: 'Nationwide Instant Vehicle Valuation & Car Buying Platform',
    summary: 'High-velocity instant valuation engine that generates guaranteed real-time vehicle offers in under two minutes.',
    description: 'Developed modern, responsive frontend modules for an algorithmic car buying platform. Built complex multi-step condition assessment questionnaires, instant valuation calculator interfaces, and intuitive pickup scheduling workflows.',
    clientType: 'Automotive FinTech & Logistics',
    metric: 'Real-Time',
    metricLabel: 'Guaranteed Offer Calculations',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Dynamic Multi-Step Forms', 'REST APIs'],
    keyFeatures: [
      'Instant VIN and license plate lookup with dynamic specs hydration',
      'Intelligent conditional logic questionnaire adapting to car damage/details',
      'Real-time automated pricing engine generating binding offers',
      'Carrier pickup scheduling calendar with automated SMS notifications',
      'High accessibility compliance across all viewport sizes'
    ],
    accentColor: '#059669', // Emerald
    headerBg: 'from-emerald-900/10 via-emerald-800/5 to-transparent',
    iconLetter: 'PD',
    heroImage: peddleHeroImg
  },
  {
    id: 'etch-salon',
    title: 'Etch Salon',
    url: 'https://etchsalon.com/',
    displayUrl: 'etchsalon.com',
    categories: ['wordpress', 'custom'],
    categoryBadge: 'WordPress & Studio',
    tagline: 'Boutique High-End Hair Studio & Editorial Space',
    summary: 'Minimalist, design-forward website and booking interface showcasing master stylists and premium salon services.',
    description: 'Designed and engineered a custom WordPress theme reflecting the salon’s architectural elegance. Connected live salon booking integrations, dynamic team portfolios, and a curated retail haircare showcase.',
    clientType: 'Luxury Hair & Lifestyle Studio',
    metric: '100% Custom',
    metricLabel: 'Bespoke Theme & Integrated Booking',
    technologies: ['WordPress', 'PHP / Custom Theme', 'Tailwind CSS', 'Salon Booking API', 'SEO Schema'],
    keyFeatures: [
      'Clean architectural layout with refined typography and generous whitespace',
      'Integrated live appointment booking system with stylist selection',
      'Responsive stylist portfolios with Instagram feed sync',
      'Transparent service menu and customized tiered pricing calculator',
      'Fast local SEO optimization with Schema.org local business markup'
    ],
    accentColor: '#0F172A', // Slate / Obsidian
    headerBg: 'from-slate-900/10 via-slate-800/5 to-transparent',
    iconLetter: 'ES',
    heroImage: 'https://etchsalon.com/wp-content/uploads/2023/08/etch-salon-still.webp'
  },
  {
    id: 'rytualist',
    title: 'Rytualist',
    url: 'https://rytualist.com/',
    displayUrl: 'rytualist.com',
    categories: ['custom', 'wordpress'],
    categoryBadge: 'Modern Medical Aesthetics',
    tagline: 'Modern Aesthetic Medical Wellness & Skin Clinic',
    summary: 'Soothing, Scandinavian-inspired web presence for a medical aesthetics studio, focused on patient trust and frictionless consultation booking.',
    description: 'Developed a calm, confidence-inspiring clinical web application. Created interactive treatment discovery grids, transparent pricing guides, practitioner bios, and streamlined client intake questionnaires.',
    clientType: 'Medical Aesthetics & Wellness Clinic',
    metric: 'Zero Friction',
    metricLabel: 'Patient Booking & Intake Funnel',
    technologies: ['Custom Frontend', 'WordPress Headless', 'Medical Scheduling API', 'Responsive UI', 'HIPAA compliant intake'],
    keyFeatures: [
      'Minimalist medical-grade aesthetic with warm soothing palette',
      'Interactive Treatment Matrix comparing results, downtime, and pricing',
      'Integrated patient consultation booking calendar',
      'Before & After clinical gallery with smooth comparison slider',
      'Mobile-optimized intake paperwork and digital consent workflows'
    ],
    accentColor: '#0D9488', // Teal
    headerBg: 'from-teal-900/10 via-teal-800/5 to-transparent',
    iconLetter: 'RY',
    heroImage: 'https://rytualist.com/wp-content/uploads/2025/02/1.jpg'
  },
  {
    id: 'sanpro-waste',
    title: 'Sanpro Waste',
    url: 'https://sanprowaste.com/',
    displayUrl: 'sanprowaste.com',
    categories: ['wordpress', 'custom'],
    categoryBadge: 'B2B Enterprise Portal',
    tagline: 'Regulated Medical & Biohazard Waste Compliance Solutions',
    summary: 'Enterprise B2B digital portal providing compliant medical waste management solutions to healthcare providers and laboratories.',
    description: 'Engineered an authoritative corporate web portal featuring an instant commercial quote calculator, regulatory compliance knowledge center, automated OSHA training portal links, and high-converting B2B contract lead capture.',
    clientType: 'Healthcare Compliance & Waste Management',
    metric: 'B2B Funnel',
    metricLabel: 'Automated Quote & Lead Generation',
    technologies: ['WordPress', 'Custom Theme', 'ACF Pro', 'Interactive Quote Calculator', 'Form CRM Integrations'],
    keyFeatures: [
      'Interactive multi-facility quote generator calculating volume estimates',
      'Regulatory compliance document hub with downloadable manifests',
      'Client portal routing for scheduled pickups and compliance certificates',
      'Enterprise lead routing directly into corporate CRM',
      'Strict WCAG 2.1 AA accessibility and responsive mobile support'
    ],
    accentColor: '#DC2626', // Red / Crimson
    headerBg: 'from-red-900/10 via-red-800/5 to-transparent',
    iconLetter: 'SW',
    heroImage: 'https://sanprowaste.com/wp-content/uploads/2020/11/Sanpro-truck-03-full-1024x571-1-665x494.png'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Shopify & eCommerce',
    description: 'Engineered for high-volume transactions, rapid mobile conversion, and seamless checkout operations.',
    skills: [
      { name: 'Shopify Plus & Liquid', level: 'Expert', tag: 'Core' },
      { name: 'Custom Theme 2.0 Dev', level: 'Expert', tag: 'Bespoke' },
      { name: 'Headless Shopify (Storefront API)', level: 'Advanced' },
      { name: 'Recharge & Subscriptions', level: 'Expert' },
      { name: 'Cart Drawers & 1-Click Upsells', level: 'Expert' },
      { name: 'Cratejoy & Marketplace Systems', level: 'Advanced' },
      { name: 'WooCommerce & Stripe Connect', level: 'Expert' },
      { name: 'Klaviyo & Post-Purchase Integrations', level: 'Advanced' }
    ]
  },
  {
    title: 'Custom Web & Frontend',
    description: 'Modern, reactive frontend applications built with pixel precision and resilient architecture.',
    skills: [
      { name: 'React & Next.js', level: 'Expert', tag: 'Core' },
      { name: 'TypeScript & Modern ES6+', level: 'Expert', tag: 'Core' },
      { name: 'Tailwind CSS & Responsive Design', level: 'Expert' },
      { name: 'State Management (Redux, Context)', level: 'Advanced' },
      { name: 'Motion & Fluid Micro-Interactions', level: 'Advanced' },
      { name: 'REST & GraphQL APIs', level: 'Expert' },
      { name: 'Multi-Step Interactive Calculators', level: 'Expert' }
    ]
  },
  {
    title: 'WordPress & CMS Systems',
    description: 'Tailored content management solutions with zero plugin bloat, custom Gutenberg blocks, and ACF.',
    skills: [
      { name: 'Custom WordPress Theme Dev', level: 'Expert', tag: 'Core' },
      { name: 'Advanced Custom Fields (ACF Pro)', level: 'Expert' },
      { name: 'Headless WordPress (REST API)', level: 'Advanced' },
      { name: 'Booking & Scheduling APIs', level: 'Expert' },
      { name: 'PHP & MySQL Database Queries', level: 'Advanced' },
      { name: 'Security Hardening & Backups', level: 'Advanced' }
    ]
  },
  {
    title: 'Performance & Optimization',
    description: 'Maximizing speed scores, reducing bounce rates, and lifting revenue across all devices.',
    skills: [
      { name: 'Core Web Vitals Tuning (90+)', level: 'Expert', tag: 'Impact' },
      { name: 'Conversion Rate Optimization (CRO)', level: 'Expert' },
      { name: 'Image & Asset Lazy Loading', level: 'Expert' },
      { name: 'Technical SEO & JSON-LD Schema', level: 'Expert' },
      { name: 'Mobile-First UX / Touch Optimization', level: 'Expert' },
      { name: 'Cross-Browser & WCAG Accessibility', level: 'Advanced' }
    ]
  }
];

export const WORK_ETHOS = [
  {
    title: 'Fast & High-Converting',
    description: 'Every millisecond counts. I craft lightweight, optimized storefronts and web apps that achieve sub-second load times and turn visitors into buyers.'
  },
  {
    title: 'Zero Bloat & Tailored Code',
    description: 'Rather than relying on clunky third-party plugins that drag down your store speed, I build tailored native solutions directly into your theme or codebase.'
  },
  {
    title: 'Direct, Clear Communication',
    description: 'No middle managers or missed deadlines. You work directly with me from kickoff to deployment with daily updates and meticulous QA testing.'
  },
  {
    title: 'Proven at Global Scale',
    description: 'From viral DTC brands experiencing flash sales to subscription platforms with millions of shoppers, I build systems engineered to scale reliably.'
  }
];
