import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, Mail, Code2 } from 'lucide-react';
import { personal } from '../data/personal';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-[700px] min-h-[calc(100vh-76px)] pt-[76px] flex items-center bg-dark-bg overflow-hidden">
      
      {/* Base Background Glow */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-brand-purple/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-content mx-auto w-full px-4 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-[48%_52%] gap-10 lg:gap-14 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center gap-2 px-[11px] py-[6px] h-[30px] rounded-full bg-white/10 border border-white/20 mb-7 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <GraduationCap size={14} className="text-white/90" />
            <span className="text-[12px] font-medium text-white/90 tracking-wide">{personal.badge}</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-[18px] lg:text-[21px] font-heading font-semibold text-white mb-2 lg:mb-3">
            {personal.headline}
          </motion.h2>

          <motion.h1 variants={itemVariants} className="text-[clamp(42px,8vw,48px)] lg:text-[clamp(58px,5.2vw,76px)] font-heading font-extrabold leading-[1.05] lg:leading-[1.0] tracking-tight mb-6 lg:mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-[#D946EF]">
              {personal.name}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-[540px] text-[16px] lg:text-[17px] text-white/75 leading-[1.7] mb-9 lg:mb-11">
            {personal.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-[12px] mb-12 w-full sm:w-auto">
            <a href="#projects" className="w-full sm:w-auto flex items-center justify-center gap-[8px] h-[52px] px-[26px] rounded-[12px] bg-gradient-to-r from-brand-blue to-brand-purple text-white text-[15px] font-semibold hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(124,58,237,0.45)] transition-all duration-300">
              Explore My Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-[8px] h-[52px] px-[26px] rounded-[12px] bg-white/5 border border-white/15 text-white text-[15px] font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-[2px]">
              Contact Me
              <Mail size={18} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start gap-[12px]">
            <span className="text-[13px] font-medium text-white/70 tracking-wide uppercase">Connect with me</span>
            <div className="flex items-center gap-4">
              <a 
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white/5 border border-white/15 transition-all duration-300 hover:bg-brand-purple/20 hover:border-brand-purple hover:-translate-y-1 text-white"
                aria-label="Open Rakindu's GitHub profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a 
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white/5 border border-white/15 transition-all duration-300 hover:bg-brand-blue/20 hover:border-brand-blue hover:-translate-y-1 text-white"
                aria-label="Open Rakindu's LinkedIn profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual Composition */}
        <motion.div 
          className="relative w-full max-w-[380px] lg:max-w-[660px] mx-auto mt-10 lg:mt-0 flex items-end justify-center lg:translate-x-[12px] lg:translate-y-[8px]"
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Subtle Background Glow behind developer */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] lg:w-[600px] h-[350px] lg:h-[600px] bg-gradient-to-tr from-brand-blue/20 to-brand-purple/20 rounded-full blur-[120px] lg:blur-[140px] pointer-events-none z-0"></div>

          {/* Main Visual Image Area */}
          <div className="relative z-10 w-full flex items-center justify-center">
            {imageError ? (
              <div className="relative w-[220px] h-[220px] rounded-full bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center p-6 shadow-xl backdrop-blur-md">
                <div className="w-14 h-14 rounded-full bg-brand-purple/20 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                  <Code2 size={28} className="text-brand-light-purple" />
                </div>
                <p className="text-white/90 font-medium font-heading text-[13px]">Developer<br/>Illustration</p>
              </div>
            ) : (
              <img 
                src="/illustrations/hero-developer.png" 
                alt="Rakindu working on a laptop" 
                className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] pointer-events-none lg:max-h-[680px]"
                onError={() => setImageError(true)}
              />
            )}
          </div>

          {/* Floating Decor: Code Window */}
          <motion.div 
            className="absolute top-[8%] lg:top-[6%] -left-[2%] lg:-left-[8%] z-20 w-[150px] lg:w-[175px] p-[14px] rounded-[14px] bg-[rgba(13,18,61,0.75)] backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.35)] hidden sm:block"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex gap-[6px] mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
            </div>
            <div className="space-y-3">
              <div className="h-1.5 w-full bg-brand-purple/80 rounded-full"></div>
              <div className="h-1.5 w-[75%] bg-brand-blue/80 rounded-full"></div>
              <div className="h-1.5 w-[85%] bg-green-400/80 rounded-full"></div>
              <div className="h-[5px] w-[50%] bg-white/20 rounded-full mt-4"></div>
            </div>
          </motion.div>

          {/* Floating Decor: Brackets { } */}
          <motion.div 
            className="absolute top-[10%] lg:top-[5%] right-[2%] lg:right-[4%] z-20 w-[50px] lg:w-[56px] h-[50px] lg:h-[56px] rounded-2xl bg-gradient-to-br from-brand-purple/20 to-transparent backdrop-blur-md border border-brand-light-purple/20 hidden sm:flex items-center justify-center text-brand-light-purple font-mono font-bold text-xl shadow-[0_10px_30px_rgba(124,58,237,0.15)]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {`{ }`}
          </motion.div>

          {/* Floating Decor: Tags </> */}
          <motion.div 
            className="absolute bottom-[35%] lg:bottom-[30%] -right-[2%] lg:right-[1%] z-20 w-[54px] lg:w-[60px] h-[54px] lg:h-[60px] rounded-2xl bg-gradient-to-br from-brand-blue/20 to-transparent backdrop-blur-md border border-brand-blue/20 hidden sm:flex items-center justify-center text-brand-blue font-mono font-bold text-xl shadow-[0_10px_30px_rgba(59,130,246,0.15)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            &lt;/&gt;
          </motion.div>

          {/* Floating Decor: Glowing Sphere */}
          <motion.div 
            className="absolute top-[35%] left-[2%] lg:left-[5%] z-0 w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] rounded-full bg-gradient-to-tr from-brand-purple to-pink-500 blur-[2px] opacity-80 hidden sm:block shadow-[0_0_20px_rgba(217,70,239,0.5)]"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 6, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          />

        </motion.div>
      </div>
    </section>
  );
}
