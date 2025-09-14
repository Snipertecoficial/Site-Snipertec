import React from 'react';
import type { TechTool } from '../types';
import { BubbleIcon, FlutterFlowIcon, WeWebIcon, XanoIcon, SupabaseIcon, N8nIcon, MakeIcon, OpenAIIcon, FigmaIcon } from './icons/TechIcons';

const techArsenalData: TechTool[] = [
  {
    name: 'Bubble',
    description: 'Aplicações web e SaaS complexas e robustas.',
    logo: BubbleIcon,
    gridClass: 'col-span-3 row-span-2 md:col-span-2'
  },
  {
    name: 'FlutterFlow',
    description: 'Apps móveis nativos de alta performance para iOS e Android.',
    logo: FlutterFlowIcon,
    gridClass: 'col-span-3 row-span-2 md:col-span-2'
  },
  {
    name: 'WeWeb',
    description: 'Front-ends dinâmicos e escaláveis com design de ponta.',
    logo: WeWebIcon,
    gridClass: 'col-span-3 row-span-2 md:col-span-2'
  },
  {
    name: 'Xano & Supabase',
    description: 'Backends potentes, seguros e customizados.',
    logo: XanoIcon,
    gridClass: 'col-span-6 row-span-1 md:col-span-3'
  },
  {
    name: 'n8n & Make',
    description: 'Automação de fluxos de trabalho e integração de sistemas.',
    logo: N8nIcon,
    gridClass: 'col-span-6 row-span-1 md:col-span-3'
  },
  {
    name: 'OpenAI',
    description: 'Integração do poder da IA em todas as soluções.',
    logo: OpenAIIcon,
    gridClass: 'col-span-3 row-span-2 md:col-span-3'
  },
  {
    name: 'Figma',
    description: 'Design de UI/UX que encantam e convertem.',
    logo: FigmaIcon,
    gridClass: 'col-span-3 row-span-2 md:col-span-3'
  },
];


const TechCard: React.FC<{ tool: TechTool }> = ({ tool }) => {
  const Logo = tool.logo;
  return (
    <div className={`${tool.gridClass} bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 flex flex-col justify-between transition-all duration-300 hover:border-[#E6007A]/80 hover:bg-black/60 transform hover:-translate-y-1`}>
      <div>
        <Logo className="h-10 w-10 mb-4" />
        <h3 className="text-xl font-bold text-white">{tool.name}</h3>
      </div>
      <p className="text-gray-300 mt-2">{tool.description}</p>
    </div>
  );
};


const TechArsenal: React.FC = () => {
  return (
    <section id="arsenal" className="py-20 md:py-32 blueprint-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white">Nosso Arsenal Tecnológico</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Dominamos as ferramentas mais poderosas para construir o futuro do seu negócio.</p>
        </div>
        <div className="bento-grid">
          {techArsenalData.map((tool) => (
            <TechCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechArsenal;