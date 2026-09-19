import React from 'react';
import { SKILL_CATEGORIES, WORK_ETHOS } from '../data/projects';
import { CheckCircle, Zap, Shield, Sparkles, Award } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Technical Stack Section */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Technical Tooling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
              Skills & Architecture Stack
            </h2>
            <p className="mt-3 text-base sm:text-lg text-stone-600">
              Battle-tested tools and frameworks utilized across production stores and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200/90 p-6 flex flex-col justify-between hover:border-stone-300 transition-colors shadow-2xs"
              >
                <div>
                  <h3 className="text-base font-bold text-stone-900 tracking-tight mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-normal leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  <div className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2 rounded-lg bg-stone-50/80 border border-stone-100 text-xs"
                      >
                        <span className="font-semibold text-stone-800">{skill.name}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider ${
                            skill.level === 'Expert'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-stone-200 text-stone-700'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Work with Riz Section */}
        <div id="why-riz" className="pt-10 border-t border-stone-200">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Delivery Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Why Work With Riz
            </h2>
            <p className="mt-3 text-base text-stone-600">
              The principles and guarantees behind every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_ETHOS.map((ethos, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200/90 p-6 flex flex-col justify-start space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-stone-900 text-stone-50 flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-stone-900 tracking-tight">
                  {ethos.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {ethos.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
