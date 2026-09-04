import { motion } from 'framer-motion';
import { STUDIO_INFO } from '../data/config';
import personalImg from '../assets/images/hipopressivo.png';
import musculacaoImg from '../assets/images/musculacao.jpeg';
import funcionaImg from '../assets/images/funcional.png';

export default function Services() {
  const images = [
    funcionaImg, // Funcional
    musculacaoImg, // Musculação
    personalImg // Hipopressivo
  ];

  return (
    <section id="modalidades" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Encontre o <span className="text-emerald-500">treino ideal</span> para você.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDIO_INFO.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-colors shadow-lg"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/10 transition-colors z-10" />
                  <img 
                    src={images[index % images.length]} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 relative">
                  <div className="absolute -top-8 right-8 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors z-20">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 mt-2">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}