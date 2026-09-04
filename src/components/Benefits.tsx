import { motion } from 'framer-motion';
import { STUDIO_INFO } from '../data/config';

export default function Benefits() {
  return (
    <section className="py-24 bg-emerald-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-950 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 mb-6">
            Por que treinar no Espaço Ativo?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDIO_INFO.benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800/50 hover:border-zinc-700 transition-colors"
              >
                <div className="text-emerald-500 mb-6">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}