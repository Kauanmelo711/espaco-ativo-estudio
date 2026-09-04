import { motion } from 'framer-motion';
import { MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { STUDIO_INFO } from '../data/config';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
              Entre em <span className="text-emerald-500">contato</span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-4 rounded-full text-emerald-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Localização</h4>
                  <p className="text-zinc-400 leading-relaxed max-w-sm">{STUDIO_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-4 rounded-full text-emerald-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Horários de Funcionamento</h4>
                  <p className="text-zinc-400 leading-relaxed">Segunda a Sexta: {STUDIO_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={STUDIO_INFO.whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-zinc-900 hover:bg-emerald-500 text-white hover:text-zinc-950 font-bold px-8 py-4 rounded-full transition-all border border-zinc-800 hover:border-emerald-500">
                <MessageCircle size={20} />
                Falar pelo WhatsApp
              </a>
              <a 
  href="https://instagram.com/espacoativostudio" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-zinc-400 hover:text-emerald-500 transition-colors flex items-center gap-2"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-instagram"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
  <span>Instagram</span>
</a>        
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-3xl overflow-hidden border border-zinc-800 relative shadow-lg"
          >
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1633519803893!2d-43.18128362486798!3d-22.50854442650743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9907f7b3c2bb1d%3A0x6d90a98c56c2e742!2sR.%20Dezesseis%20de%20Mar%C3%A7o%2C%20170%20-%20Centro%2C%20Petr%C3%B3polis%20-%20RJ%2C%2025620-040!5e0!3m2!1spt-BR!2sbr!4v1711234567890!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Espaço Ativo Studio"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}