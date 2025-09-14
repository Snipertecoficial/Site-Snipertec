import React, { useRef, useEffect } from 'react';
import type { MethodologyStep } from '../types';

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const LightningBoltIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const TrendingUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
);

const methodologyData: MethodologyStep[] = [
  {
    step: '01',
    icon: <SearchIcon className="w-8 h-8 text-[#E6007A]" />,
    title: 'Imersão & Estratégia',
    description: 'Mergulhamos no seu negócio para entender seus desafios e definir os objetivos-chave da solução.',
  },
  {
    step: '02',
    icon: <CogIcon className="w-8 h-8 text-[#E6007A]" />,
    title: 'Desenvolvimento No-Code',
    description: 'Utilizamos nosso arsenal tecnológico para construir uma solução robusta, escalável e de forma ágil.',
  },
  {
    step: '03',
    icon: <LightningBoltIcon className="w-8 h-8 text-[#E6007A]" />,
    title: 'Automação & IA',
    description: 'Integramos inteligência artificial e automações para otimizar processos e maximizar a eficiência.',
  },
  {
    step: '04',
    icon: <TrendingUpIcon className="w-8 h-8 text-[#E6007A]" />,
    title: 'Lançamento & Otimização',
    description: 'Implementamos a solução e acompanhamos os resultados, realizando melhorias contínuas para o sucesso.',
  },
];

const MethodologyCard: React.FC<{ item: MethodologyStep }> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const rotateY = ((x / width) - 0.5) * 2 * 12; // Max 12deg rotation
      const rotateX = -(((y / height) - 0.5) * 2 * 12); // Max 12deg rotation

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      card.style.boxShadow = `0 15px 35px rgba(0,0,0,0.4), 0 0 30px rgba(230, 0, 122, 0.4)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.boxShadow = 'none';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="relative p-8 rounded-2xl transition-all duration-200 ease-out"
      style={{
        transformStyle: "preserve-3d",
        background: "rgba(23, 23, 23, 0.6)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div style={{ transform: 'translateZ(40px)' }}>
        <div className="absolute top-4 right-8 text-5xl font-black text-gray-800/50" style={{ transform: 'translateZ(-20px)' }}>{item.step}</div>
        <div className="relative z-10">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-20 md:py-32 methodology-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white">Nossa Metodologia Ágil</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Um processo transparente e eficiente para transformar ideias em resultados concretos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: '1500px' }}>
          {methodologyData.map((item) => (
            <MethodologyCard key={item.step} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;