import { motion } from 'framer-motion';
import { Target, Users, Heart, ShieldCheck } from 'lucide-react';
import personalImg from '../assets/images/ge_personal.png';

export default function About() {
  const highlights = [
    { icon: Target, text: 'Treinos personalizados' },
    { icon: Heart, text: 'Ambiente acolhedor' },
    { icon: Users, text: 'Acompanhamento profissional' },
    { icon: ShieldCheck, text: 'Foco em resultados' }
  ];

  return (
    <section id="sobre" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-zinc-900">
              <img 
                src={personalImg} 
                alt="Treino no Espaço Ativo Studio" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-zinc-950/10" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Mais que um treino. <br/> Um espaço para <span className="text-emerald-500">cuidar de você.</span>
            </h2>
            
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              O Espaço Ativo Studio nasceu com o propósito de oferecer um ambiente onde a saúde, o bem-estar e a evolução andam juntos. Fuja do padrão tradicional e descubra um local preparado para receber você com exclusividade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4 bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800/50">
                    <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-500">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-white font-medium text-sm">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}