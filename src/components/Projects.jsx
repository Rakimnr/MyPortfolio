import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <section id="projects" className="relative bg-[#F7F7FC] pt-8 pb-[80px] lg:pb-[95px] z-10">
        <div className="max-w-content mx-auto px-4 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 lg:mb-14">
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              <div className="inline-block px-[9px] py-[5px] rounded-full bg-[#9333EA]/10 border border-[#9333EA]/20 mb-4">
                <span className="text-[11px] font-bold tracking-wider text-[#9333EA] uppercase">Featured Projects</span>
              </div>
              
              <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6">
                <div>
                  <h2 className="text-[28px] lg:text-[38px] font-heading font-extrabold text-[#16172B] mb-3">
                    Some of My Recent Work
                  </h2>
                  <div className="w-[45px] h-[3px] rounded-full bg-[#9333EA] mx-auto md:mx-0"></div>
                </div>
                
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="hidden md:flex items-center justify-center h-[42px] px-[20px] rounded-[10px] bg-[#9333EA] text-white font-semibold text-[14px] transition-all duration-200 hover:bg-[#7e22ce] shadow-md hover:shadow-lg"
                >
                  {showAll ? 'Show Featured Only' : 'View All Projects'}
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[28px]">
            <AnimatePresence>
              {displayedProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                  onOpenModal={setSelectedProject} 
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Mobile View All Button */}
          <div className="mt-10 flex justify-center md:hidden">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="flex items-center justify-center w-full max-w-[280px] h-[48px] rounded-[12px] bg-[#9333EA] text-white font-semibold text-[15px] transition-all duration-200 hover:bg-[#7e22ce] shadow-md"
            >
              {showAll ? 'Show Featured Only' : 'View All Projects'}
            </button>
          </div>

        </div>
      </section>

      {/* ── View Details Modal — rendered outside section ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] overflow-y-auto">

            {/* Animated backdrop — sits behind everything in this stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#070B2A]/70 backdrop-blur-sm"
            />

            {/* Centering wrapper — min-h-full lets short modals center,
                py padding keeps the panel off the very edge on mobile    */}
            <div 
              className="relative min-h-full flex items-start justify-center px-3 py-6 md:py-10 lg:py-14"
              onClick={() => setSelectedProject(null)}
            >
              {/* Modal Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 12 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[850px] bg-white rounded-[22px] lg:rounded-[26px] shadow-2xl flex flex-col"
              >
                {/* Close Button — absolute inside the panel, always visible */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-[40px] h-[40px] rounded-full bg-white/90 backdrop-blur-md shadow-sm hover:bg-white flex items-center justify-center transition-all z-20 text-gray-700 hover:text-gray-900"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* ── Modal Content ── */}
                <div className="p-[24px] lg:p-[40px] pb-8 lg:pb-10">

                  {/* Title & Type */}
                  <h3 className="font-heading font-extrabold text-[22px] lg:text-[28px] text-[#16172B] leading-tight mb-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[13px] lg:text-[14px] font-semibold text-[#9333EA] mb-5">
                    {selectedProject.details?.type || selectedProject.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-[#ECECF4] mb-6" />

                  {/* Project Overview */}
                  {selectedProject.details?.overview && (
                    <div className="mb-6">
                      <h4 className="text-[11px] font-bold text-[#9333EA] uppercase tracking-widest mb-2">
                        Project Overview
                      </h4>
                      <p className="text-[14px] lg:text-[15px] text-[#4B5563] leading-[1.75]">
                        {selectedProject.details.overview}
                      </p>
                    </div>
                  )}

                  {/* Key Features */}
                  {selectedProject.details?.features?.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-[11px] font-bold text-[#9333EA] uppercase tracking-widest mb-3">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {selectedProject.details.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-[13px] lg:text-[14px] text-[#374151]">
                            <span className="mt-[2px] shrink-0 w-[18px] h-[18px] rounded-full bg-[#9333EA]/10 flex items-center justify-center text-[#9333EA] font-bold text-[10px]">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* My Contribution (MediCore only) */}
                  {selectedProject.details?.myContribution?.length > 0 && (
                    <div className="mb-6 p-4 rounded-[12px] bg-[#F9F5FF] border border-[#9333EA]/15">
                      <h4 className="text-[11px] font-bold text-[#9333EA] uppercase tracking-widest mb-3">
                        My Contribution
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {selectedProject.details.myContribution.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[13px] lg:text-[14px] text-[#374151]">
                            <span className="mt-[2px] shrink-0 w-[18px] h-[18px] rounded-full bg-[#9333EA]/20 flex items-center justify-center text-[#9333EA] font-bold text-[10px]">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Project Context */}
                  {selectedProject.details?.context && (
                    <div className="mb-6">
                      <h4 className="text-[11px] font-bold text-[#9333EA] uppercase tracking-widest mb-2">
                        Project Context
                      </h4>
                      <p className="text-[13px] lg:text-[14px] text-[#4B5563] leading-[1.7]">
                        {selectedProject.details.context}
                      </p>
                    </div>
                  )}

                  {/* Implementation Highlights */}
                  {selectedProject.details?.implementation?.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-[11px] font-bold text-[#9333EA] uppercase tracking-widest mb-3">
                        Implementation Highlights
                      </h4>
                      <ul className="flex flex-col gap-[6px]">
                        {selectedProject.details.implementation.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-[13px] lg:text-[14px] text-[#374151]">
                            <span className="mt-[6px] shrink-0 w-[5px] h-[5px] rounded-full bg-[#9333EA]/60" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className="text-[11px] font-bold text-[#9333EA] uppercase tracking-widest mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(selectedProject.details?.technologiesModal || selectedProject.technologies).map((tech, i) => (
                        <span
                          key={i}
                          className="px-[12px] py-[5px] rounded-full bg-[#F3E8FF] text-[#9333EA] text-[12px] lg:text-[13px] font-semibold border border-[#9333EA]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
