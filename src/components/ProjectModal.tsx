import React, { useEffect, useState } from 'react';
import { X, ExternalLink, CheckCircle2, Globe, ArrowRight, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mock Browser Header Bar */}
        <div className="bg-stone-900 text-stone-300 px-4 py-3 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <div className="ml-3 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-800/90 text-stone-300 text-xs font-mono">
              <Globe className="w-3 h-3 text-stone-400" />
              <span>{project.url}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 px-2 py-1 rounded-md hover:bg-stone-800 transition-colors"
            >
              <span>Open Live URL</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7">
          
          {/* Hero Section Banner inside Modal */}
          {project.heroImage && !imgError && (
            <div className="rounded-xl overflow-hidden border border-stone-200 shadow-xs relative bg-stone-100 max-h-72">
              <img
                src={project.heroImage}
                alt={`${project.title} Hero Section`}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-56 sm:h-64 object-cover object-top"
              />
              <div className="absolute bottom-3 right-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 bg-white/95 hover:bg-white px-3 py-1.5 rounded-lg shadow-sm border border-stone-200 backdrop-blur-xs transition-all"
                >
                  <span>Visit Live Storefront</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Header Info */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                {project.categoryBadge}
              </span>
              <span className="text-xs text-stone-500 font-medium">
                Client: {project.clientType}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-stone-600 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Key Metric Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200/80">
            <div>
              <span className="text-xs uppercase font-bold text-stone-400 tracking-wider">
                {project.metricLabel}
              </span>
              <p className="text-lg font-extrabold text-stone-900 mt-0.5">
                {project.metric}
              </p>
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-stone-400 tracking-wider">
                Platform Architecture
              </span>
              <p className="text-sm font-semibold text-stone-800 mt-0.5">
                {project.technologies.slice(0, 3).join(' • ')}
              </p>
            </div>
          </div>

          {/* Full Detailed Description */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              Engineering & Development Scope
            </h4>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Key Features Implemented */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              Key Features & Architectural Implementations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/60 text-xs sm:text-sm text-stone-800 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              Technologies & Integrations Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-stone-100 text-stone-800 text-xs font-semibold border border-stone-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions & Navigation */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-white text-xs font-medium text-stone-700 hover:bg-stone-100 transition-colors"
              title={`Previous: ${prevProject.title}`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Prev Project</span>
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-white text-xs font-medium text-stone-700 hover:bg-stone-100 transition-colors"
              title={`Next: ${nextProject.title}`}
            >
              <span className="hidden sm:inline">Next Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              id="modal-visit-site-btn"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-stone-50 text-xs sm:text-sm font-semibold hover:bg-stone-800 transition-all shadow-xs"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
