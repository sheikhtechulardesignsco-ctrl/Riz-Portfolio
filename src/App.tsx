/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PROJECTS } from './data/projects';

export default function App() {
  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWork = () => {
    const workElem = document.getElementById('featured-work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="portfolio-root" className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-500/20 selection:text-amber-900 font-sans antialiased">
      <Header onContactClick={handleScrollToContact} />
      <main id="main-content">
        <Hero
          onExploreClick={handleScrollToWork}
          onContactClick={handleScrollToContact}
        />
        <ProjectsGrid projects={PROJECTS} />
        <ServicesSection onContactClick={handleScrollToContact} />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
