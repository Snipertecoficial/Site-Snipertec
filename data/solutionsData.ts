import React from 'react';
import type { Solution } from '../types';

// FIX: Replaced JSX with React.createElement to support .ts file extension and avoid compilation errors.
const CodeIcon: React.FC<{ className?: string }> = ({ className }) => {
    return React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    }));
};

// FIX: Replaced JSX with React.createElement to support .ts file extension and avoid compilation errors.
const DeviceMobileIcon: React.FC<{ className?: string }> = ({ className }) => {
    return React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    }));
};

// FIX: Replaced JSX with React.createElement to support .ts file extension and avoid compilation errors.
const ServerIcon: React.FC<{ className?: string }> = ({ className }) => {
    return React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    }));
};


export const solutionsData: Solution[] = [
    {
        slug: 'automacao-ia',
        title: 'Automação Inteligente com IA',
        subtitle: 'Eleve sua eficiência a outro nível, automatizando processos complexos e liberando sua equipe para focar no que realmente importa: a estratégia do seu negócio.',
        heroImage: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description: 'Em um mercado cada vez mais competitivo, a eficiência operacional é a chave para o crescimento. Nossa solução de Automação com Inteligência Artificial vai além de simples robôs de tarefas. Nós mergulhamos nos seus processos de marketing, vendas e operações para desenhar e implementar fluxos de trabalho inteligentes que não apenas economizam tempo e reduzem custos, mas também geram insights valiosos para a tomada de decisão. Da qualificação de leads à gestão de projetos, transformamos seus processos manuais em um motor de crescimento autônomo e escalável.',
        features: [
            // FIX: Replaced JSX with React.createElement to support .ts file extension and avoid compilation errors.
            { icon: React.createElement(ServerIcon, { className: "w-8 h-8 text-[#E6007A]" }), title: 'Mapeamento de Processos', description: 'Analisamos seus fluxos de trabalho atuais para identificar os principais gargalos e oportunidades de automação.' },
            // FIX: Replaced JSX with React.createElement to support .ts file extension and avoid compilation errors.
            { icon: React.createElement(CodeIcon, { className: "w-8 h-8 text-[#E6007A]" }), title: 'Integração de Sistemas', description: 'Conectamos suas ferramentas favoritas (CRMs, ERPs, etc.) em um ecossistema coeso e automatizado.' },
            // FIX: Replaced JSX with React.createElement to support .ts file extension and avoid compilation errors.
            { icon: React.createElement(DeviceMobileIcon, { className: "w-8 h-8 text-[#E6007A]" }), title: 'IA Generativa', description: 'Implementamos IA para criar conteúdo, analisar dados e personalizar a comunicação com clientes em escala.' },
        ],
    },
    {
        slug: 'aplicativos-nativos',
        title: 'Aplicativos Nativos de Alta Performance',
        subtitle: 'Leve sua experiência de usuário para o bolso do seu cliente com aplicativos para iOS e Android construídos para performance, engajamento e conversão.',
        heroImage: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description: 'Um aplicativo nativo não é apenas um site adaptado. É uma ferramenta poderosa para criar um canal de comunicação direto com seu público, oferecendo uma experiência fluida, rápida e integrada aos recursos do dispositivo. Utilizando FlutterFlow, criamos aplicativos visualmente impressionantes e funcionalmente robustos para iOS e Android a partir de uma única base de código, o que acelera o tempo de lançamento e otimiza seu investimento. Do design da interface à publicação nas lojas, cuidamos de todo o ciclo de vida do seu app.',
        features: [
            // FIX: Replaced JSX with React.createElement to support .ts file extension and avoid compilation errors.
            { icon: React.createElement(DeviceMobileIcon, { className: "w-8 h-8 text-[#E6007A]" }), title: 'Design UI/UX Focado em Conversão', description: 'Criamos interfaces intuitivas e atraentes que guiam o usuário em uma jornada fluida até a ação desejada.' },
            // FIX: Replaced JSX with React.createElement to support .ts file extension and avoid compilation errors.
            { icon: React.createElement(CodeIcon, { className: "w-8 h-8 text-[#E6007A]" }), title: 'Desenvolvimento Multiplataforma', description: 'Lançamos seu app para iOS e Android simultaneamente, com performance nativa e consistência visual.' },
            // FIX: Replaced JSX with React.createElement to support .ts file extension and avoid compilation errors.
            { icon: React.createElement(ServerIcon, { className: "w-8 h-8 text-[#E6007A]" }), title: 'Integração com Back-end', description: 'Conectamos seu aplicativo a back-ends seguros e escaláveis para garantir a gestão de dados e usuários.' },
        ],
    },
    {
        slug: 'plataformas-saas',
        title: 'Plataformas SaaS e MVPs',
        subtitle: 'Transformamos sua visão em um produto digital robusto. Lançamos seu App, SaaS ou plataforma no mercado com velocidade recorde, focando em validação e crescimento.',
        heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        description: 'Validar uma ideia de negócio no mercado real é o passo mais crucial para qualquer startup ou nova iniciativa corporativa. Nossa especialidade é construir Produtos Mínimos Viáveis (MVPs) e plataformas SaaS completas de forma ágil e estratégica. Usando o poder do No-Code com ferramentas como Bubble e WeWeb, e back-ends robustos como Xano e Supabase, criamos a primeira versão do seu produto, pronta para receber os primeiros usuários, coletar feedback e iterar rapidamente. Nosso foco é entregar uma solução que não apenas funcione, mas que seja a base para um negócio escalável e de sucesso.',
        features: [
            // FIX: Replaced JSX with React.createElement to support .ts file extension and avoid compilation errors.
            { icon: React.createElement(CodeIcon, { className: "w-8 h-8 text-[#E6007A]" }), title: 'Estratégia de MVP', description: 'Ajudamos a definir o escopo enxuto e essencial para validar sua hipótese de negócio com o mínimo de risco.' },
            // FIX: Replaced JSX with React.createElement to support .ts file extension and avoid compilation errors.
            { icon: React.createElement(ServerIcon, { className: "w-8 h-8 text-[#E6007A]" }), title: 'Arquitetura Escalável', description: 'Construímos a base da sua aplicação pensando no crescimento futuro, com bancos de dados e lógicas bem estruturadas.' },
            // FIX: Replaced JSX with React.createElement to support .ts file extension and avoid compilation errors.
            { icon: React.createElement(DeviceMobileIcon, { className: "w-8 h-8 text-[#E6007A]" }), title: 'Desenvolvimento Full-Stack No-Code', description: 'Cuidamos do front-end, back-end, banco de dados e integrações, entregando uma solução completa.' },
        ],
    },
];
