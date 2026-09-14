import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare, Phone } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Construct mailto link
      const mailtoLink = `mailto:rakindur03@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSource: Portfolio Contact Form (rakimnr.dev)`
      )}`;
      
      // Delay mailto slightly to allow success state to render
      setTimeout(() => {
        window.location.href = mailtoLink;
        setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
      }, 500);
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-[#25145F] via-[#33267F] to-[#5B32CE] pt-[64px] lg:pt-[72px] pb-[64px] lg:pb-[72px] overflow-hidden z-10">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#9333EA]/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3B82F6]/20 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-content mx-auto px-4 lg:px-8 relative z-10 w-full">
        
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)_minmax(0,0.8fr)] gap-10 lg:gap-[40px] justify-between items-center lg:items-end w-full">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col min-w-0"
          >
            <span className="text-[11px] font-bold tracking-wider text-[#C4B5FD] uppercase mb-3">
              Let's Connect
            </span>
            <h2 className="text-[28px] lg:text-[34px] font-heading font-extrabold leading-tight mb-4">
              <span className="text-white">Have a project or</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4B5FD] to-[#E9D5FF]">opportunity?</span>
            </h2>
            <p className="text-[14px] lg:text-[15px] text-white/80 leading-[1.7] mb-8 max-w-[450px]">
              I'm currently open to internship opportunities, software projects, and opportunities to collaborate and grow as a developer.
            </p>
            
            <div className="flex flex-col gap-5">
              <a href="mailto:rakindur03@gmail.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#C4B5FD] group-hover:bg-[#9333EA] group-hover:text-white transition-colors shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#C4B5FD] uppercase tracking-wider mb-1">Email</span>
                  <span className="text-[14px] lg:text-[15px] text-white font-medium group-hover:text-[#C4B5FD] transition-colors">rakindur03@gmail.com</span>
                </div>
              </a>
              
              <a href="tel:0755980938" className="flex items-start gap-4 group" aria-label="Call Rakindu at 075 598 0938">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#C4B5FD] group-hover:bg-[#9333EA] group-hover:text-white transition-colors shrink-0">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#C4B5FD] uppercase tracking-wider mb-1">Phone</span>
                  <span className="text-[14px] lg:text-[15px] text-white font-medium group-hover:text-[#C4B5FD] transition-colors whitespace-nowrap">075 598 0938</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/rakindu-rajapaksha-rakimnr" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group" aria-label="Open Rakindu's LinkedIn profile">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#C4B5FD] group-hover:bg-[#9333EA] group-hover:text-white transition-colors shrink-0">
                  <FaLinkedin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#C4B5FD] uppercase tracking-wider mb-1">LinkedIn</span>
                  <span className="text-[14px] lg:text-[15px] text-white font-medium group-hover:text-[#C4B5FD] transition-colors">Rakindu Rajapaksha</span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#C4B5FD] shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#C4B5FD] uppercase tracking-wider mb-1">Location</span>
                  <span className="text-[14px] lg:text-[15px] text-white font-medium">Sri Lanka</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full bg-[rgba(255,255,255,0.97)] backdrop-blur-xl rounded-[18px] lg:rounded-[22px] p-5 lg:p-[26px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] border border-white/20 min-w-0"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center w-full">
                <div className="w-14 h-14 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mb-4">
                  <Send size={24} />
                </div>
                <h3 className="text-[18px] font-heading font-bold text-[#16172B] mb-2">Message Ready!</h3>
                <p className="text-[14px] text-[#4B5563]">Opening your email client...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col min-w-0">
                    <label htmlFor="name" className="text-[12px] lg:text-[13px] font-semibold text-[#374151] mb-1.5">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full box-border h-[44px] lg:h-[46px] px-4 rounded-[10px] bg-[#F9FAFB] border ${errors.name ? 'border-red-400 focus:ring-red-400/20' : 'border-[#E5E7EB] focus:border-[#9333EA] focus:ring-[#9333EA]/20'} outline-none focus:ring-4 focus:bg-white transition-all text-[14px] text-[#16172B] placeholder:text-[#9CA3AF]`}
                    />
                    {errors.name && <span className="text-[11px] text-red-500 mt-1 font-medium">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <label htmlFor="email" className="text-[12px] lg:text-[13px] font-semibold text-[#374151] mb-1.5">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full box-border h-[44px] lg:h-[46px] px-4 rounded-[10px] bg-[#F9FAFB] border ${errors.email ? 'border-red-400 focus:ring-red-400/20' : 'border-[#E5E7EB] focus:border-[#9333EA] focus:ring-[#9333EA]/20'} outline-none focus:ring-4 focus:bg-white transition-all text-[14px] text-[#16172B] placeholder:text-[#9CA3AF]`}
                    />
                    {errors.email && <span className="text-[11px] text-red-500 mt-1 font-medium">{errors.email}</span>}
                  </div>
                </div>

                <div className="flex flex-col min-w-0 w-full">
                  <label htmlFor="subject" className="text-[12px] lg:text-[13px] font-semibold text-[#374151] mb-1.5">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="Project collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className={`w-full box-border h-[44px] lg:h-[46px] px-4 rounded-[10px] bg-[#F9FAFB] border ${errors.subject ? 'border-red-400 focus:ring-red-400/20' : 'border-[#E5E7EB] focus:border-[#9333EA] focus:ring-[#9333EA]/20'} outline-none focus:ring-4 focus:bg-white transition-all text-[14px] text-[#16172B] placeholder:text-[#9CA3AF]`}
                  />
                  {errors.subject && <span className="text-[11px] text-red-500 mt-1 font-medium">{errors.subject}</span>}
                </div>

                <div className="flex flex-col min-w-0 w-full">
                  <label htmlFor="message" className="text-[12px] lg:text-[13px] font-semibold text-[#374151] mb-1.5">Your Message</label>
                  <textarea 
                    id="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full box-border min-h-[110px] lg:min-h-[125px] p-4 rounded-[10px] bg-[#F9FAFB] border ${errors.message ? 'border-red-400 focus:ring-red-400/20' : 'border-[#E5E7EB] focus:border-[#9333EA] focus:ring-[#9333EA]/20'} outline-none focus:ring-4 focus:bg-white transition-all text-[14px] text-[#16172B] resize-none placeholder:text-[#9CA3AF]`}
                  />
                  {errors.message && <span className="text-[11px] text-red-500 mt-1 font-medium">{errors.message}</span>}
                </div>

                <button 
                  type="submit"
                  className="mt-2 w-full h-[48px] lg:h-[50px] rounded-[10px] bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold text-[15px] flex items-center justify-center gap-2 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(147,51,234,0.3)] transition-all duration-300"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex justify-center mt-6 lg:mt-0 min-w-0 md:col-span-2 lg:col-span-1"
          >
            <div className="relative w-full max-w-[260px] lg:max-w-[380px] flex items-center justify-center">
              {imageError ? (
                <div className="relative w-full aspect-[4/5] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#9333EA]/10 rounded-full blur-[60px]"></div>
                </div>
              ) : (
                <div className="relative w-full h-full flex items-end justify-center">
                  {/* Floating Paper Plane */}
                  <motion.div 
                    animate={{ y: [0, -8, 0] }} 
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[5%] right-[-8%] z-20 flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                    aria-hidden="true"
                  >
                    <Send size={18} className="text-[#C4B5FD] -rotate-12" />
                  </motion.div>
                  
                  {/* Floating Code Tag */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }} 
                    transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[-12%] z-20 flex items-center justify-center w-11 h-11 rounded-xl bg-white/8 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                    aria-hidden="true"
                  >
                    <span className="text-[#C4B5FD] font-mono text-[13px] font-bold">&lt;/&gt;</span>
                  </motion.div>

                  <img 
                    src="/illustrations/contact-developer.png" 
                    alt="Rakindu pointing to contact form" 
                    className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)] relative z-10"
                    onError={() => setImageError(true)}
                  />
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
