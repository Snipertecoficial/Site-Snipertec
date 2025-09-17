
import React from 'react';
import type { Solution } from '../types';
import { CodeIcon, DeviceMobileIcon, ServerIcon } from '../components/icons/TechIcons';

export const solutionsData: Solution[] = [
    {
        slug: 'automacao-ia',
        title: 'Automação Inteligente com IA',
        subtitle: 'Eleve sua eficiência a outro nível, automatizando processos complexos e liberando sua equipe para focar no que realmente importa: a estratégia do seu negócio.',
        heroImage: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description: 'Em um mercado cada vez mais competitivo, a eficiência operacional é a chave para o crescimento. Nossa solução de Automação com Inteligência Artificial vai além de simples robôs de tarefas. Nós mergulhamos nos seus processos de marketing, vendas e operações para desenhar e implementar fluxos de trabalho inteligentes que não apenas economizam tempo e reduzem custos, mas também geram insights valiosos para a tomada de decisão. Da qualificação de leads à gestão de projetos, transformamos seus processos manuais em um motor de crescimento autônomo e escalável.',
        features: [
            { icon: <ServerIcon className="w-8 h-8 text-[#E6007A]" />, title: 'Mapeamento de Processos', description: 'Analisamos seus fluxos de trabalho atuais para identificar os principais gargalos e oportunidades de automação.' },
            { icon: <CodeIcon className="w-8 h-8 text-[#E6007A]" />, title: 'Integração de Sistemas', description: 'Conectamos suas ferramentas favoritas (CRMs, ERPs, etc.) em um ecossistema coeso e automatizado.' },
            { icon: <DeviceMobileIcon className="w-8 h-8 text-[#E6007A]" />, title: 'IA Generativa', description: 'Implementamos IA para criar conteúdo, analisar dados e personalizar a comunicação com clientes em escala.' },
        ],
    },
    {
        slug: 'aplicativos-nativos',
        title: 'Aplicativos Nativos de Alta Performance',
        subtitle: 'Leve sua experiência de usuário para o bolso do seu cliente com aplicativos para iOS e Android construídos para performance, engajamento e conversão.',
        heroImage: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description: 'Um aplicativo nativo não é apenas um site adaptado. É uma ferramenta poderosa para criar um canal de comunicação direto com seu público, oferecendo uma experiência fluida, rápida e integrada aos recursos do dispositivo. Utilizando FlutterFlow, criamos aplicativos visualmente impressionantes e funcionalmente robustos para iOS e Android a partir de uma única base de código, o que acelera o tempo de lançamento e otimiza seu investimento. Do design da interface à publicação nas lojas, cuidamos de todo o ciclo de vida do seu app.',
        features: [
            { icon: <DeviceMobileIcon className="w-8 h-8 text-[#E6007A]" />, title: 'Design UI/UX Focado em Conversão', description: 'Criamos interfaces intuitivas e atraentes que guiam o usuário em uma jornada fluida até a ação desejada.' },
            { icon: <CodeIcon className="w-8 h-8 text-[#E6007A]" />, title: 'Desenvolvimento Multiplataforma', description: 'Lançamos seu app para iOS e Android simultaneamente, com performance nativa e consistência visual.' },
            { icon: <ServerIcon className="w-8 h-8 text-[#E6007A]" />, title: 'Integração com Back-end', description: 'Conectamos seu aplicativo a back-ends seguros e escaláveis para garantir a gestão de dados e usuários.' },
        ],
    },
    {
        slug: 'plataformas-saas',
        title: 'Plataformas SaaS e MVPs',
        subtitle: 'Arquitetamos sua visão em uma plataforma digital robusta, validando seu modelo de negócio e preparando para o crescimento exponencial.',
        heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        description: 'Transformar uma ideia inovadora em um SaaS de sucesso exige mais do que apenas código. Exige uma estratégia de validação rigorosa, uma arquitetura que suporte a escala e a velocidade para capturar o mercado. Nossa especialidade é construir Produtos Mínimos Viáveis (MVPs) e plataformas SaaS completas de forma ágil e estratégica. Usando o poder do No-Code com ferramentas como Bubble e WeWeb, e back-ends robustos como Xano e Supabase, nós não apenas construímos seu produto; nós arquitetamos a fundação para um negócio de sucesso.',
        features: [
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#00C0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: 'Motor de Validação de Mercado', description: 'Não construímos no escuro. Utilizamos uma abordagem data-driven para garantir que seu produto resolva um problema real antes de escalar o investimento.' },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#00C0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>, title: 'Arquitetura Escalável', description: 'Construído para o amanhã. Projetamos back-ends robustos e front-ends flexíveis que escalam de 10 a 10 milhões de usuários sem atritos.' },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#00C0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Ciclo de Desenvolvimento Acelerado', description: 'Lance em semanas, não em anos. Nossa expertise em No-Code/Low-Code entrega seu MVP mais rápido, capturando oportunidades antes da concorrência.' },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#00C0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Design Focado em UX e Retenção', description: 'Criamos jornadas de usuário que não são apenas funcionais, mas intuitivas e prazerosas, garantindo a adoção e a retenção de seus clientes.' },
        ],
    },
];