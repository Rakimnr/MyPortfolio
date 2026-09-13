import { SiGithub } from 'react-icons/si';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#080D1B] via-[#0B1020] to-[#120B25] border-t border-white/[0.08] pt-[64px] pb-[48px]">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-[32px]">
        
        {/* Desktop 4-Column Grid, Tablet 2-Column Grid, Mobile 1-Column Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.1fr] gap-10 lg:gap-[60px] mb-[45px] lg:mb-[55px]">
          
          {/* Column 1: Personal Brand */}
          <div className="flex flex-col items-start text-left">
            <a href="#home" className="group mb-4" aria-label="Home">
              <span className="font-heading font-extrabold text-[25px] lg:text-[28px] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF]">
                Rakindu Rajapaksha
              </span>
            </a>
            <p className="text-[14px] lg:text-[15px] text-[#A7B5CC] leading-[1.7] max-w-[280px] mb-6">
              IT undergraduate focused on building practical web and mobile software solutions.
            </p>
            
            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/Rakimnr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Rakindu's GitHub"
                className="flex items-center justify-center w-[46px] h-[46px] rounded-[12px] lg:rounded-[14px] bg-white/5 border border-white/[0.12] text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-[3px] hover:shadow-[0_4px_15px_rgba(255,255,255,0.05)] transition-all"
              >
                <SiGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rakindu-rajapaksha-rakimnr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Rakindu's LinkedIn"
                className="flex items-center justify-center w-[46px] h-[46px] rounded-[12px] lg:rounded-[14px] bg-white/5 border border-white/[0.12] text-white/70 hover:text-white hover:bg-[#0077b5]/80 hover:border-[#0077b5] hover:-translate-y-[3px] hover:shadow-[0_4px_15px_rgba(0,119,181,0.2)] transition-all"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://wa.me/94755980938"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Rakindu on WhatsApp"
                className="flex items-center justify-center w-[46px] h-[46px] rounded-[12px] lg:rounded-[14px] bg-white/5 border border-white/[0.12] text-white/70 hover:text-white hover:bg-[#25D366]/80 hover:border-[#25D366] hover:-translate-y-[3px] hover:shadow-[0_4px_15px_rgba(37,211,102,0.2)] transition-all"
              >
                <FaWhatsapp size={19} />
              </a>
              <a 
                href="mailto:rakindur03@gmail.com"
                aria-label="Email Rakindu"
                className="flex items-center justify-center w-[46px] h-[46px] rounded-[12px] lg:rounded-[14px] bg-white/5 border border-white/[0.12] text-white/70 hover:text-white hover:bg-[#F43F5E]/80 hover:border-[#F43F5E] hover:-translate-y-[3px] hover:shadow-[0_4px_15px_rgba(244,63,94,0.2)] transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></div>
              <h4 className="text-[16px] font-bold text-white tracking-wide">Navigation</h4>
            </div>
            <ul className="flex flex-col gap-[12px] lg:gap-[14px]">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-[14px] lg:text-[15px] text-[#A7B5CC] hover:text-white hover:translate-x-[3px] transition-all inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Me */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></div>
              <h4 className="text-[16px] font-bold text-white tracking-wide">Follow Me</h4>
            </div>
            <ul className="flex flex-col gap-[12px] lg:gap-[14px]">
              <li>
                <a 
                  href="https://github.com/Rakimnr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[14px] lg:text-[15px] text-[#A7B5CC] hover:text-white transition-all group"
                >
                  <SiGithub size={16} className="group-hover:text-white transition-colors" />
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/rakindu-rajapaksha-rakimnr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[14px] lg:text-[15px] text-[#A7B5CC] hover:text-[#3B82F6] transition-all group"
                >
                  <FaLinkedin size={16} className="group-hover:text-[#3B82F6] transition-colors" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/94755980938" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[14px] lg:text-[15px] text-[#A7B5CC] hover:text-[#10B981] transition-all group"
                >
                  <FaWhatsapp size={16} className="group-hover:text-[#10B981] transition-colors" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Let's Connect */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>
              <h4 className="text-[16px] font-bold text-white tracking-wide">Let's Connect</h4>
            </div>
            <p className="text-[14px] lg:text-[15px] text-[#A7B5CC] leading-[1.7] mb-6">
              Interested in collaborating? Feel free to reach out for project discussions, opportunities, or just to say hello.
            </p>
            <a 
              href="#contact"
              aria-label="Go to contact section"
              className="inline-flex items-center justify-center h-[50px] px-[24px] rounded-[12px] bg-white/5 border border-[#8B5CF6]/40 text-[14px] font-medium text-white hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/60 hover:-translate-y-[2px] transition-all"
            >
              Get In Touch &rarr;
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/[0.08] mb-6"></div>

        {/* Bottom Footer Area */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[13px] text-[#A7B5CC]">
            © {currentYear} Rakindu Rajapaksha. All rights reserved.
          </p>
          <a 
            href="#home"
            aria-label="Back to top"
            className="flex items-center justify-center gap-2 h-[42px] lg:h-[46px] px-[17px] rounded-[11px] lg:rounded-[12px] bg-white/5 border border-white/[0.12] text-[13px] font-medium text-white/70 hover:text-white hover:border-[#8B5CF6] hover:-translate-y-[2px] transition-all"
          >
            Back to Top <ArrowUp size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}
