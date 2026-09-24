import { motion } from 'framer-motion';
import { STUDIO_INFO } from '../data/config';
import  halter from '../assets/images/halter.png'

export default function CTA() {
  return (
    <section className="relative py-32 bg-zinc-900 flex items-center justify-center overflow-hidden border-t border-zinc-800">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{ backgroundImage: `url(${halter})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Pronto para <span className="text-emerald-500">começar?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto"
        >
          Dê o primeiro passo para uma rotina mais ativa e saudável.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href={STUDIO_INFO.whatsappLink()} target="_blank" rel="noreferrer" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-lg px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/20">
            Agende sua aula
          </a>
        </motion.div>
      </div>
    </section>
  );
}