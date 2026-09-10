import { motion } from 'framer-motion';
import musculacaoImg from '../assets/images/espacopvaranda.png';
import cadeiraImg from '../assets/images/Bicicleta.png';
import esopacoImg from '../assets/images/aparelhos__01.png';
import espacoCadeiraImg from '../assets/images/espaco_btb.png';

export default function Gallery() {
  const photos = [
    esopacoImg,
    cadeiraImg,
    musculacaoImg,
    espacoCadeiraImg,
    
  ];

  return (
    <section id="estrutura" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Conheça nosso <span className="text-emerald-500">espaço</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group"
          >
            <img src={photos[0]} alt="Estrutura" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden relative group"
          >
            <img src={photos[1]} alt="Estrutura" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden relative group"
          >
            <img src={photos[2]} alt="Estrutura" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden relative group"
          >
            <img src={photos[3]} alt="Estrutura" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}