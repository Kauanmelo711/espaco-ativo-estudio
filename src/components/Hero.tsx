import { motion } from 'framer-motion';
import { STUDIO_INFO } from '../data/config';
import { ArrowRight } from 'lucide-react';
import aparelhosImg from '../assets/images/aparelhos__01.png';

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aparelhosImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-zinc-950/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 pt-24 md:pt-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Seu corpo em movimento. <br/>
            Sua <span className="text-emerald-500">melhor versão</span> em construção.
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl font-light">
            Treinamento, saúde e qualidade de vida em um espaço pensado para você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={STUDIO_INFO.whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105">
              Agende sua aula
              <ArrowRight size={20} />
            </a>
            <a href="#sobre" className="flex items-center justify-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-white font-medium px-8 py-4 rounded-full transition-colors border border-zinc-700">
              Conheça o studio
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}