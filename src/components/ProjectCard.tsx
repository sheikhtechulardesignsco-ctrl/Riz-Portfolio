import React, { useState } from 'react';
import { ExternalLink, Info, ArrowUpRight, Globe } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      id={`project-card-${project.id}`}
      className="group relative flex flex-col bg-white rounded-2xl border border-stone-200/90 hover:border-stone-400 hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Browser Bar Header */}
      <div className="bg-stone-900 text-stone-300 px-3.5 py-2 flex items-center justify-between border-b border-stone-800">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-[11px] font-mono text-stone-400 truncate max-w-[170px] sm:max-w-[200px] flex items-center gap-1">
            <Globe className="w-2.5 h-2.5 opacity-60 shrink-0" />
            {project.displayUrl}
          </span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 bg-stone-800/80 px-2 py-0.5 rounded-md border border-stone-700/60">
          Live
        </span>
      </div>

      {/* Hero Section Preview Image Container */}
      <div
        className="relative h-44 sm:h-48 w-full bg-stone-100 overflow-hidden cursor-pointer group/hero"
        onClick={() => onOpenDetails(project)}
        title={`View case details for ${project.title}`}
      >
        {!imageError && project.heroImage ? (
          <img
            src={project.heroImage}
            alt={`${project.title} Hero Preview`}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${project.headerBg} p-6 text-center`}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-xl text-stone-900 border border-stone-200/90 shadow-xs mb-2"
              style={{ backgroundColor: `${project.accentColor}20` }}
            >
              {project.iconLetter}
            </div>
            <span className="text-sm font-bold text-stone-900">{project.title}</span>
            <span className="text-xs text-stone-500 font-mono mt-0.5">{project.displayUrl}</span>
          </div>
        )}

        {/* Subtle dark gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-stone-900/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/20 shadow-md">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            Click to inspect case specs
          </span>
        </div>

        {/* Category Pill Tag Overlay */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-stone-800 border border-stone-200/80 shadow-xs backdrop-blur-xs">
            {project.categoryBadge}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          {/* Title and URL */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-1.5">
                <span>{project.title}</span>
              </h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-amber-600 font-mono transition-colors mt-0.5"
                title={`Open ${project.displayUrl} in new tab`}
                onClick={(e) => e.stopPropagation()}
              >
                <span>{project.displayUrl}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Monogram Icon */}
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs tracking-tight text-stone-900 border border-stone-200/80 shrink-0"
              style={{ backgroundColor: `${project.accentColor}15` }}
            >
              {project.iconLetter}
            </div>
          </div>

          {/* Tagline & Summary */}
          <div>
            <p className="text-sm font-semibold text-stone-800 tracking-tight">
              {project.tagline}
            </p>
            <p className="mt-1.5 text-sm text-stone-600 leading-relaxed line-clamp-2">
              {project.summary}
            </p>
          </div>

          {/* Metric / Highlight Pill */}
          <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/70">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                {project.metricLabel}
              </span>
              <span className="text-xs font-bold text-stone-900">
                {project.metric}
              </span>
            </div>
            <div className="text-[11px] font-medium text-stone-500 text-right">
              {project.clientType}
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-stone-100/90 text-stone-600 text-[11px] font-medium border border-stone-200/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded-md bg-stone-50 text-stone-400 text-[11px] font-medium">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
          <button
            id={`btn-details-${project.id}`}
            onClick={() => onOpenDetails(project)}
            className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-stone-950 px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Case Breakdown</span>
          </button>

          <a
            id={`btn-visit-${project.id}`}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-stone-50 hover:bg-stone-800 text-xs font-semibold shadow-2xs transition-all active:scale-98"
          >
            <span>Visit Live Site</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
