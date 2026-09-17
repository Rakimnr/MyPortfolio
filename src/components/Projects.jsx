import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, FolderCode } from 'lucide-react';
import { SiGithub as Github } from 'react-icons/si';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 lg:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#070B2A]/70 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative w-[calc(100%-24px)] lg:w-[calc(100%-48px)] max-w-[850px] max-h-[90vh] lg:max-h-[86vh] bg-white rounded-[22px] lg:rounded-[26px] shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-[40px] h-[40px] rounded-full bg-white/90 backdrop-blur-md shadow-sm hover:bg-white flex items-center justify-center transition-all z-20 text-gray-700 hover:text-gray-900"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto w-full custom-scrollbar flex flex-col">
                
                {/* Modal Image Area */}
                <div className="relative w-full aspect-video lg:max-h-[360px] bg-[#F7F7FC] flex items-center justify-center border-b border-[#ECECF4] shrink-0 overflow-hidden group">
                   {selectedProject.imageType === 'cover' ? (
                     selectedProject.coverVariant === 'singlish' ? (
                       // ── Singlish → සිංහල custom cover (modal) ──
                       <div className="w-full h-full bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4C1D95] flex flex-col items-center justify-center p-6 relative transition-transform duration-300 group-hover:scale-[1.02]">
                         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                         <div className="relative z-10 flex items-center gap-4 mb-4">
                           <span className="text-[20px] font-mono font-bold text-white/90 tracking-wide">Singlish</span>
                           <span className="text-[26px] text-[#C4B5FD] font-bold">→</span>
                           <span className="text-[22px] font-bold text-white" style={{ fontFamily: 'serif' }}>සිංහල</span>
                         </div>
                         <div className="flex gap-2 flex-wrap justify-center relative z-10">
                           {selectedProject.technologies.slice(0, 3).map(t => (
                             <span key={t} className="text-[11px] px-2 py-0.5 rounded-[4px] bg-white/10 text-white border border-white/20 uppercase tracking-wider font-semibold">
                               {t}
                             </span>
                           ))}
                         </div>
                       </div>
                     ) : (
                       // ── Generic cover (modal) ──
                       <div className="w-full h-full bg-gradient-to-br from-[#1E1B4B] to-[#312E81] flex flex-col items-center justify-center p-6 relative transition-transform duration-300 group-hover:scale-[1.02]">
                         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
                         <FolderCode size={40} className="text-white/80 mb-3 relative z-10" />
                         <span className="text-[20px] font-heading font-bold text-white text-center leading-tight mb-3 relative z-10">
                           {selectedProject.title}
                         </span>
                         <div className="flex gap-2 flex-wrap justify-center relative z-10">
                           {selectedProject.technologies.slice(0, 3).map(t => (
                             <span key={t} className="text-[11px] px-2 py-0.5 rounded-[4px] bg-white/10 text-white border border-white/20 uppercase tracking-wider font-semibold">
                               {t}
                             </span>
                           ))}
                         </div>
                       </div>
                     )

                   ) : selectedProject.imageType === 'logo' ? (
                     <div className="w-full h-full bg-[#F8F9FA] flex items-center justify-center p-[40px]">
                       <img 
                         src={selectedProject.image} 
                         alt={selectedProject.alt || selectedProject.title} 
                         className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                         onError={(e) => {
                           e.target.style.display = 'none';
                           e.target.nextSibling.style.display = 'flex';
                         }}
                       />
                       <div className="flex-col items-center justify-center text-center p-6 hidden">
                          <div className="w-16 h-16 rounded-full bg-[#9333EA]/10 flex items-center justify-center mb-3 text-[#9333EA]">
                            <FolderCode size={30} />
                          </div>
                          <span className="text-[15px] font-heading font-semibold text-[#16172B]/80">{selectedProject.title} Preview</span>
                       </div>
                     </div>
                   ) : (
                     <>
                       <img 
                         src={selectedProject.image} 
                         alt={selectedProject.alt || `${selectedProject.title} preview`}
                         className={`w-full h-full object-cover object-top transition-transform duration-300 ${
                           selectedProject.cropBrowserChrome 
                             ? 'scale-[1.10] -translate-y-[4%] group-hover:scale-[1.12] group-hover:-translate-y-[4%]' 
                             : 'group-hover:scale-[1.02]'
                         }`}
                         onError={(e) => {
                           e.target.style.display = 'none';
                           e.target.nextSibling.style.display = 'flex';
                         }}
                       />
                       <div className="flex-col items-center justify-center text-center p-6 hidden">
                          <div className="w-16 h-16 rounded-full bg-[#9333EA]/10 flex items-center justify-center mb-3 text-[#9333EA]">
                            <FolderCode size={30} />
                          </div>
                          <span className="text-[15px] font-heading font-semibold text-[#16172B]/80">{selectedProject.title} Preview</span>
                       </div>
                     </>
                   )}
                </div>

                {/* Modal Content */}
                <div className="p-[20px] lg:p-[36px] flex flex-col">
                  
                  <h3 className="font-heading font-extrabold text-[24px] lg:text-[32px] text-[#16172B] mb-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[14px] lg:text-[16px] font-medium text-[#9333EA] mb-5">
                    {selectedProject.subtitle}
                  </p>
                  
                  <h4 className="text-[12px] lg:text-[13px] font-bold text-[#16172B] uppercase tracking-wide mb-2">About the Project</h4>
                  <p className="text-[14px] lg:text-[15px] text-[#4B5563] leading-[1.7] mb-6">
                    {selectedProject.description}
                  </p>

                  <h4 className="text-[12px] lg:text-[13px] font-bold text-[#16172B] uppercase tracking-wide mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="px-[12px] py-[6px] rounded-full bg-[#F3E8FF] text-[#9333EA] text-[12px] lg:text-[13px] font-semibold border border-[#9333EA]/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Modal Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#ECECF4] mt-auto">
                    {selectedProject.github ? (
                      <a 
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 h-12 px-6 rounded-[12px] bg-[#16172B] text-white font-semibold text-[14px] transition-colors hover:bg-black w-full sm:w-auto"
                        aria-label={`View ${selectedProject.title} source code on GitHub`}
                      >
                        <Github size={18} />
                        View Source Code
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="flex items-center justify-center gap-2 h-12 px-6 rounded-[12px] bg-gray-100 text-gray-400 font-semibold text-[14px] cursor-not-allowed w-full sm:w-auto opacity-50"
                      >
                        <Github size={18} />
                        Source Unavailable
                      </button>
                    )}

                    {selectedProject.demo ? (
                      <a 
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 h-12 px-6 rounded-[12px] bg-[#9333EA] text-white font-semibold text-[14px] transition-colors hover:bg-[#7e22ce] shadow-md hover:shadow-lg w-full sm:w-auto"
                        aria-label={`View ${selectedProject.title} live demo`}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    ) : null}
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
