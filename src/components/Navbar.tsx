import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/config';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/images/Logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-md py-4 shadow-lg border-b border-zinc-900' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
             <img src={logoImg} alt="Logo Espaço Ativo" className="h-9 w-auto object-contain" />
                 <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">
               ESPAÇO ATIVO <span className="text-emerald-500">STUDIO</span>
         </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-zinc-300 hover:text-emerald-500 transition-colors text-sm uppercase tracking-wider font-medium">
              {link.name}
            </a>
          ))}
          <a href={STUDIO_INFO.whatsappLink()} target="_blank" rel="noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold px-6 py-2 rounded-full transition-all transform hover:scale-105">
            Agende sua aula
          </a>
        </nav>

        <button className="md:hidden text-zinc-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-zinc-950 shadow-xl border-b border-zinc-800 md:hidden flex flex-col items-center py-6 gap-6"
          >
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 text-lg uppercase tracking-wider hover:text-emerald-500">
                {link.name}
              </a>
            ))}
            <a href={STUDIO_INFO.whatsappLink()} target="_blank" rel="noreferrer" className="bg-emerald-500 text-zinc-950 font-bold px-8 py-3 rounded-full mt-4 w-[80%] text-center">
              Agende sua aula
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}