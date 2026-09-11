import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { STUDIO_INFO } from '../data/config';
import musculacaoImg from '../assets/images/musculacao.png';
import hipopressivoImg from '../assets/images/hipopressivo.png';

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const serviceImages = [
    musculacaoImg,
    hipopressivoImg,
  ];

  return (
    <section id="modalidades" className="py-24 bg-zinc-900 border-y border-zinc-800 relative">
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
            const isHipopressivo = service.title.toLowerCase().includes('hipopressivo');

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
                  {/* Ícone: se for hipopressivo, vira um botão clicável que abre o modal */}
                  {isHipopressivo ? (
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="absolute -top-8 right-8 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 text-emerald-500 hover:bg-emerald-500 hover:text-zinc-950 transition-colors z-20 cursor-pointer shadow-lg group-hover:scale-110 duration-300"
                      title="Clique para saber mais sobre o Hipopressivo"
                    >
                      <Icon size={28} />
                    </button>
                  ) : (
                    <div className="absolute -top-8 right-8 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors z-20">
                      <Icon size={28} />
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 mt-2">{service.title}</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    {isHipopressivo && (
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="text-emerald-500 text-sm font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        Ver detalhes e benefícios →
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Modal com Animação */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl text-zinc-300"
            >
              {/* Botão de Fechar */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 bg-zinc-900 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 pr-10">
                Método <span className="text-emerald-500">Hipopressivo</span>
              </h3>

              <div className="space-y-4 text-sm md:text-base leading-relaxed text-zinc-300">
                <p>
                  O Método de Abdominal Hipopressivo é uma técnica que combina respiração, postura e vácuo abdominal de forma estratégica, promovendo benefícios que vão muito além da estética. ✨
                </p>

                <p className="font-medium text-white pt-2">
                  Com a prática correta podemos trabalhar objetivos como:
                </p>

                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Redução de cólicas menstruais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Alívio de dores na coluna e desconfortos articulares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Melhora da postura e da consciência corporal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Auxílio no tratamento da incontinência urinária</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Melhora do desempenho esportivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Fortalecimento e ativação da musculatura abdominal e do assoalho pélvico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Redução da circunferência abdominal — podendo chegar a 4 a 12 cm em alguns casos, dependendo de cada pessoa e da resposta ao método</span>
                  </li>
                </ul>

                <p className="pt-2">
                  E esses são apenas alguns dos benefícios que o método pode proporcionar.
                </p>

                <p className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 text-zinc-200 font-medium">
                  Mais do que buscar uma barriga mais definida, o Hipopressivo é uma ferramenta para cuidar do corpo, melhorar sua funcionalidade e promover mais qualidade de vida.
                </p>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold py-3 px-6 rounded-xl transition-colors cursor-pointer"
                >
                  Entendi, fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}