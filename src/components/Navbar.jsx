import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data/personal';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(7,11,42,0.88)] backdrop-blur-[12px] border-b border-white/5'
          : 'bg-dark-bg border-b border-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-4 lg:px-8 h-[72px] lg:h-[76px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center group" aria-label="Home">
          <span className="font-heading font-extrabold text-[19px] lg:text-[23px] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF]">
            Rakindu Rajapaksha
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[13px] font-medium text-white/70 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-[4px] left-0 w-0 h-[2px] bg-brand-light-purple transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personal.cvPath}
            download="Rakindu_Rajapaksha_CV.pdf"
            aria-label="Download Rakindu Rajapaksha CV"
            className="flex items-center justify-center h-[36px] px-[18px] rounded-lg text-[13px] font-medium text-white border border-white/20 bg-white/5 hover:bg-brand-purple/20 hover:border-brand-purple transition-all duration-300 hover:-translate-y-[2px]"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[rgba(7,11,42,0.95)] backdrop-blur-xl border-b border-white/10 shadow-2xl rounded-b-2xl overflow-hidden"
          >
            <ul className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personal.cvPath}
                  download="Rakindu_Rajapaksha_CV.pdf"
                  aria-label="Download Rakindu Rajapaksha CV"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 mt-2 text-center rounded-lg text-[14px] font-medium text-white border border-white/20 bg-white/5 hover:bg-brand-purple/20 transition-all"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
