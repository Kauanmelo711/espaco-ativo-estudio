import { STUDIO_INFO } from '../data/config';
import { MapPin, MessageCircle, ExternalLink, } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tighter">
              ESPAÇO ATIVO <span className="text-emerald-500">STUDIO</span>
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Treinamento, saúde e qualidade de vida em um espaço pensado exclusivamente para você em Petrópolis, RJ.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Modalidades', 'Estrutura'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace('í', 'i')}`} className="text-zinc-500 hover:text-emerald-500 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li>
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
                 
                
              </li>
              <li>
                <a href={STUDIO_INFO.whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-zinc-500 hover:text-emerald-500 text-sm transition-colors">
                  <MessageCircle size={18} /> (24) 98115-6086
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-500 text-sm">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 text-center md:text-left">
          <p className="text-zinc-600 text-sm">
            © {currentYear} {STUDIO_INFO.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}