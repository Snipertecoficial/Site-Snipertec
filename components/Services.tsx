import React from 'react';
import type { Service } from '../types';

const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ZapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const RocketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const services: Service[] = [
  {
    icon: <CodeIcon className="w-8 h-8 text-[#E6007A]" />,
    title: 'Desenvolvimento Ágil',
    description: 'Lançamos seu App, SaaS ou plataforma no mercado com velocidade recorde, focando em performance e experiência do usuário.'
  },
  {
    icon: <ZapIcon className="w-8 h-8 text-[#E6007A]" />,
    title: 'Automação com IA',
    description: 'Elevamos sua eficiência a outro nível. Implementamos IA para automatizar fluxos complexos, liberando sua equipe para focar em estratégia.'
  },
  {
    icon: <RocketIcon className="w-8 h-8 text-[#E6007A]" />,
    title: 'MVPs e Plataformas SaaS',
    description: 'Validamos sua ideia no mercado real. Construímos MVPs e plataformas SaaS robustas para gerar tração e crescimento sustentável.'
  },
  {
    icon: <ChartBarIcon className="w-8 h-8 text-[#E6007A]" />,
    title: 'Estratégia Digital',
    description: 'Mais do que tecnologia, entregamos estratégia. Mapeamos oportunidades e desenhamos o plano tecnológico ideal para seu negócio.'
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-[#E6007A] transform hover:-translate-y-2">
    <div className="mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
    <p className="text-gray-300">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="solucoes" className="py-20 md:py-32 particle-flow-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">Nossas Soluções</h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Capacitamos seu negócio com tecnologia de ponta, foco em resultados e agilidade sem precedentes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;