import { motion } from 'framer-motion';
import { STUDIO_INFO } from '../data/config';
import musculacaoImg from '../assets/images/Musculacao.png'
import hipopressivoImg from '../assets/images/hipopressivo.png';

export default function Services() {
  const serviceImages = [
    musculacaoImg, 
    hipopressivoImg, 
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

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {STUDIO_INFO.services.map((service, index) => {
            const Icon = service.icon;
            const currentImage = serviceImages[index] || musculacaoImg;

            return (
              <motion.div 
                key={service.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-colors shadow-lg w-full md:w-[calc(50%-1rem)] max-w-md flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/10 transition-colors z-10" />
                  <img 
                    src={currentImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 relative flex-1 flex flex-col justify-between">
                  <div className="absolute -top-8 right-8 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors z-20">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 mt-2">{service.title}</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}