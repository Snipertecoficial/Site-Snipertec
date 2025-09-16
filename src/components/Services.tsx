
import React from 'react';
import type { Service } from '../types';
import { ChartBarIcon, CodeIcon, RocketIcon, ZapIcon } from './icons/TechIcons';

type PageRoute = 'home' | 'solution';

interface ServicesProps {
    navigate: (route: PageRoute, slug: string) => void;
}

const services: Service[] = [
  {
    icon: <CodeIcon className="w-8 h-8 text-[#E6007A]" />,
    title: 'Desenvolvimento Ágil',
    description: 'Lançamos seu App, SaaS ou plataforma no mercado com velocidade recorde, focando em performance e experiência do usuário.',
    slug: 'plataformas-saas'
  },
  {
    icon: <ZapIcon className="w-8 h-8 text-[#E6007A]" />,
    title: 'Automação com IA',
    description: 'Elevamos sua eficiência a outro nível. Implementamos IA para automatizar fluxos complexos, liberando sua equipe para focar em estratégia.',
    slug: 'automacao-ia'
  },
  {
    icon: <RocketIcon className="w-8 h-8 text-[#E6007A]" />,
    title: 'Aplicativos Nativos',
    description: 'Criamos apps para iOS e Android com performance nativa para engajar e converter seus clientes onde eles estiverem.',
    slug: 'aplicativos-nativos'
  },
  {
    icon: <ChartBarIcon className="w-8 h-8 text-[#E6007A]" />,
    title: 'Estratégia Digital',
    description: 'Mais do que tecnologia, entregamos estratégia. Mapeamos oportunidades e desenhamos o plano tecnológico ideal para seu negócio.',
    slug: 'plataformas-saas' // Link para a solução mais abrangente
  }
];

const ServiceCard: React.FC<{ service: Service; navigate: (route: PageRoute, slug: string) => void; }> = ({ service, navigate }) => (
  <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-[#E6007A] transform hover:-translate-y-2 flex flex-col">
    <div className="mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-white mb-2 flex-grow">{service.title}</h3>
    <p className="text-gray-300 mb-6">{service.description}</p>
    <button onClick={() => navigate('solution', service.slug)} className="self-start font-semibold text-[#E6007A] hover:text-[#eb3393] transition-colors mt-auto">
        Saiba Mais &rarr;
    </button>
  </div>
);

const Services: React.FC<ServicesProps> = ({ navigate }) => {
  return (
    <section id="solucoes" className="py-20 md:py-32 particle-flow-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">Nossas Soluções</h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Capacitamos seu negócio com tecnologia de ponta, foco em resultados e agilidade sem precedentes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
