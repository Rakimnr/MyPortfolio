import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderCode, ExternalLink } from 'lucide-react';
import { SiGithub as Github } from 'react-icons/si';

export default function ProjectCard({ project, onOpenModal, index }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col w-full bg-white border border-[#ECECF4] rounded-[18px] lg:rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_12px_30px_rgba(147,51,234,0.08)] group"
    >
      {/* Image Area */}
      <div className="relative w-full aspect-video bg-[#F7F7FC] flex items-center justify-center overflow-hidden border-b border-[#ECECF4]">
        {imageError ? (
          <div className="flex flex-col items-center justify-center text-center p-4">
            <div className="w-12 h-12 rounded-full bg-[#9333EA]/10 flex items-center justify-center mb-2 text-[#9333EA]">
              <FolderCode size={22} />
            </div>
            <span className="text-[13px] font-heading font-semibold text-[#16172B]/80">{project.title} Preview</span>
          </div>
        ) : project.imageType === 'cover' ? (
          project.coverVariant === 'singlish' ? (
            // ── Singlish → සිංහල custom cover ──
            <div className="w-full h-full bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4C1D95] flex flex-col items-center justify-center p-4 relative transition-transform duration-300 group-hover:scale-[1.03]">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '14px 14px' }} />
              <div className="relative z-10 flex items-center gap-3 mb-3">
                <span className="text-[15px] lg:text-[17px] font-mono font-bold text-white/90 tracking-wide">Singlish</span>
                <span className="text-[18px] lg:text-[22px] text-[#C4B5FD] font-bold">→</span>
                <span className="text-[17px] lg:text-[20px] font-bold text-white" style={{ fontFamily: 'serif' }}>සිංහල</span>
              </div>
              <div className="relative z-10 flex gap-2 flex-wrap justify-center">
                {project.technologies.slice(0, 3).map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-[4px] bg-white/10 text-white border border-white/20 uppercase tracking-wider font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            // ── Generic cover (Event Management etc.) ──
            <div className="w-full h-full bg-gradient-to-br from-[#1E1B4B] to-[#312E81] flex flex-col items-center justify-center p-6 relative transition-transform duration-300 group-hover:scale-[1.03]">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
              <FolderCode size={36} className="text-white/80 mb-3 relative z-10" />
              <span className="text-[18px] font-heading font-bold text-white text-center leading-tight mb-3 relative z-10">
                {project.title}
              </span>
              <div className="flex gap-2 flex-wrap justify-center relative z-10">
                {project.technologies.slice(0, 3).map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-[4px] bg-white/10 text-white border border-white/20 uppercase tracking-wider font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )

        ) : project.imageType === 'logo' ? (
          <div className="w-full h-full bg-[#F8F9FA] flex items-center justify-center p-[32px]">
            <img 
              src={project.image} 
              alt={project.alt || project.title} 
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <img 
            src={project.image} 
            alt={project.alt || `${project.title} preview`} 
            className={`w-full h-full object-cover object-top transition-transform duration-300 ${
              project.cropBrowserChrome 
                ? 'scale-[1.15] -translate-y-[5%] group-hover:scale-[1.18] group-hover:-translate-y-[5%]' 
                : 'group-hover:scale-[1.025]'
            }`}
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-[20px] lg:p-[24px]">
        
        <h3 className="font-heading font-bold text-[18px] lg:text-[20px] text-[#16172B] mb-1 leading-tight">
          {project.title}
        </h3>
        <p className="text-[12px] lg:text-[13px] font-medium text-[#4B5563] mb-3">
          {project.subtitle}
        </p>
        
        <p className="text-[13px] lg:text-[14px] text-[#4B5563]/90 leading-[1.6] mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-[10px] py-[4px] rounded-full bg-[#9333EA]/5 text-[#9333EA] text-[10px] lg:text-[11px] font-semibold border border-[#9333EA]/10">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-[10px] py-[4px] rounded-full bg-gray-100 text-gray-500 text-[10px] lg:text-[11px] font-semibold">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Row */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#ECECF4]">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F7F7FC] hover:bg-[#E0E7FF] text-[#16172B] hover:text-[#9333EA] transition-colors duration-200 shrink-0"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github size={18} />
            </a>
          ) : (
            <button 
              disabled
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-400 opacity-50 cursor-not-allowed shrink-0"
              aria-label="GitHub Repository Unavailable"
            >
              <Github size={18} />
            </button>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F7F7FC] hover:bg-[#E0E7FF] text-[#16172B] hover:text-[#9333EA] transition-colors duration-200 shrink-0"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
          
          <button 
            onClick={() => onOpenModal(project)}
            className="flex flex-1 items-center justify-center gap-2 h-10 rounded-[12px] bg-[#9333EA]/10 text-[#9333EA] font-semibold text-[13px] transition-colors duration-200 hover:bg-[#9333EA]/20"
          >
            View Details
            <ArrowUpRight size={16} />
          </button>
        </div>
        
      </div>
    </motion.div>
  );
}
