import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, Code2, Folder, Laptop } from 'lucide-react';
import StatCard from './StatCard';

const educationDetails = [
  { icon: GraduationCap, label: 'Education', value: 'BSc (Hons) in Information Technology' },
  { icon: School, label: 'University', value: 'SLIIT' },
  { icon: BookOpen, label: 'Current Level', value: '3rd Year • 2nd Semester' },
  { icon: Code2, label: 'Focus', value: 'Full-Stack & Mobile Development' },
];

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="relative bg-[#F7F7FC] rounded-t-[28px] lg:rounded-t-[36px] pt-[60px] lg:pt-[85px] pb-[60px] lg:pb-[85px] z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-content mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.05fr_1.2fr] gap-[35px] lg:gap-[45px] items-center">
          
          {/* Left: Image Area */}
          <motion.div 
            className="w-full max-w-[340px] mx-auto lg:mx-0 flex flex-col items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-square max-w-[340px] h-[330px] lg:h-[360px] rounded-[24px] lg:rounded-[28px] bg-gradient-to-br from-[#E0E7FF] to-[#F3E8FF] flex items-center justify-center border border-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden">
              {imageError ? (
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-[#9333EA]/10 flex items-center justify-center mb-3 text-[#9333EA]">
                    <Code2 size={24} />
                  </div>
                  <span className="text-[13px] font-heading font-medium text-[#16172B]/70">About Illustration</span>
                </div>
              ) : (
                <img 
                  src="/illustrations/about-developer.png" 
                  alt="Rakindu waving" 
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </motion.div>

          {/* Center: Content */}
          <motion.div 
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-block px-[9px] py-[5px] rounded-full bg-[#9333EA]/10 border border-[#9333EA]/20 mb-4">
              <span className="text-[11px] font-bold tracking-wider text-[#9333EA] uppercase">About Me</span>
            </div>
            
            <h2 className="text-[30px] lg:text-[36px] font-heading font-bold text-[#16172B] mb-5 leading-tight">
              Get to know me!
            </h2>
            
            <p className="max-w-[430px] text-[15px] lg:text-[16px] text-[#4B5563] leading-[1.7] mb-8">
              I'm a third-year Information Technology undergraduate at SLIIT with
              hands-on experience in full-stack and mobile application development.
              I enjoy building practical software solutions, solving problems, and
              continuously learning modern technologies.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-[430px]">
              {educationDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-3">
                  <detail.icon size={18} className="text-[#9333EA] shrink-0" />
                  <p className="text-[14px] text-[#16172B] text-left">
                    <span className="font-semibold">{detail.label}:</span> <span className="text-[#4B5563]">{detail.value}</span>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-4 lg:gap-5 w-full order-3 lg:order-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          >
            <StatCard 
              value="10+" label="Projects" icon={Folder} 
              bgClass="bg-[#F3E8FF]" textClass="text-[#9333EA]" iconColorClass="text-[#9333EA]" 
            />
            <StatCard 
              value="3rd Year" label="IT Undergraduate" icon={GraduationCap} 
              bgClass="bg-[#E0F2FE]" textClass="text-[#0284C7]" iconColorClass="text-[#0284C7]" 
            />
            <StatCard 
              value="10+" label="Technologies" icon={Code2} 
              bgClass="bg-[#FFEDD5]" textClass="text-[#EA580C]" iconColorClass="text-[#EA580C]" 
            />
            <StatCard 
              value="Web + Mobile" label="Development Focus" icon={Laptop} 
              bgClass="bg-[#DCFCE7]" textClass="text-[#16A34A]" iconColorClass="text-[#16A34A]" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
