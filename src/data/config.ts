import { Activity, Dumbbell, Flower, Users, Sparkles, Target, TrendingUp } from 'lucide-react';

export const STUDIO_INFO = {
  name: "Espaço Ativo Studio",
  whatsappNumber: "5524981156086", // Número real encontrado
  whatsappMsg: "Olá! Gostaria de conhecer o Espaço Ativo Studio e saber mais sobre as aulas.",
  instagram: "https://www.instagram.com/espacoativostudio/",
  address: "R. Dezesseis de Março, 170 - 2° andar, Sala 01 - Centro, Petrópolis - RJ",
  hours: "06:00 às 20:00",
  whatsappLink: function() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMsg)}`;
  },
  services: [
    {
      id: 1,
      title: "Treinamento Funcional",
      desc: "Aulas dinâmicas focadas em mobilidade, ganho de força e condicionamento físico geral.",
      icon: Activity
    },
    {
      id: 2,
      title: "Musculação",
      desc: "Treinamento de força estruturado, com acompanhamento focado nos seus objetivos.",
      icon: Dumbbell
    },
    {
      id: 3,
      title: "Hipopressivo",
      desc: "Técnica focada na tonificação da musculatura abdominal, melhora da postura e respiração.",
      icon: Flower
    }
  ],
  benefits: [
    {
      id: 1,
      title: "Atendimento próximo",
      desc: "Profissionais qualificados e dedicados a entender as suas necessidades e objetivos.",
      icon: Users
    },
    {
      id: 2,
      title: "Ambiente exclusivo",
      desc: "Espaço sofisticado e acolhedor, pensado para o seu máximo conforto e performance.",
      icon: Sparkles
    },
    {
      id: 3,
      title: "Treinos personalizados",
      desc: "Cada aluno é único. Nossos treinos são adaptados para o seu nível de experiência.",
      icon: Target
    },
    {
      id: 4,
      title: "Foco em resultados",
      desc: "Evolução constante com metodologias seguras, priorizando sempre a sua saúde.",
      icon: TrendingUp
    }
  ]
};