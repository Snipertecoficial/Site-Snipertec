
import React, { useEffect, useState, useRef, useMemo } from 'react';
import type { Solution } from '../types';
import { solutionsData } from '../data/solutionsData';
import { FlutterFlowIcon } from './icons/TechIcons';


type PageRoute = 'home' | 'blog-post' | 'join-team' | 'blog' | 'solution';

interface SolutionPageProps {
  slug: string;
  navigate: (route: PageRoute, slugOrSection?: string) => void;
}

// --- Componentes para o Novo Design de Automação com IA ---

const AutomationParticleHero: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            x: number; y: number; directionX: number; directionY: number; size: number; color: string;
            constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
                this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY; this.size = size; this.color = color;
            }
            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
                if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }
        let particlesArray: Particle[] = [];
        const mouse = { x: null as number | null, y: null as number | null };
        
        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });


        function init() {
            particlesArray = [];
            const numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = (Math.random() * 2) + 1;
                const x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
                const y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
                const directionX = (Math.random() * .4) - .2;
                const directionY = (Math.random() * .4) - .2;
                const color = Math.random() > 0.5 ? '#E6007A' : '#00C0FF';
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        function connect() {
            if (!ctx) return;
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                                     ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        let dx = mouse.x ? mouse.x - particlesArray[a].x : 0;
                        let dy = mouse.y ? mouse.y - particlesArray[a].y : 0;
                        let mouseDistance = Math.sqrt(dx*dx+dy*dy);
                        if(mouseDistance < 150){
                           opacityValue = 1 - (distance / 10000);
                           ctx.strokeStyle = `rgba(230, 0, 122, ${opacityValue})`;
                        } else {
                           ctx.strokeStyle = `rgba(200, 200, 200, ${opacityValue})`;
                        }
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            if (!ctx) return;
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        }

        const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init(); }
        window.addEventListener('resize', handleResize);

        init();
        animate();

        return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', handleResize); };
    }, []);

    return (
         <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-[#0a0a0a]">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
            <div className="absolute inset-0 bg-black/60 z-1"></div>
            <div className="relative z-10 px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
                    Automação Inteligente com IA
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
                    Transformamos processos complexos em sistemas autônomos que impulsionam seu crescimento.
                </p>
            </div>
        </section>
    );
};

const GrowthIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20V14"></path></svg>;
const FunnelIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v2L12 14 3 5V3z"></path></svg>;
const TrophyIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>;

const IntelligentOrchestrationAnimation: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isAnimated, setIsAnimated] = useState(false);
    const [beams, setBeams] = useState<React.CSSProperties[]>([]);
   
    const devices = useMemo(() => [
        { id: 'dev1', chaos: { top: '10%', left: '15%' }, order: { top: '25%', left: '5%' } },
        { id: 'dev2', chaos: { top: '20%', left: '85%' }, order: { top: '25%', left: '80%' } },
        { id: 'dev3', chaos: { top: '85%', left: '75%' }, order: { top: '60%', left: '80%' } },
        { id: 'dev4', chaos: { top: '70%', left: '5%' }, order: { top: '60%', left: '5%' } },
    ], []);
    const results = useMemo(() => [
        { id: 'res1', pos: { top: '5%', left: '46%' }, icon: <GrowthIcon />, label: 'Crescimento' },
        { id: 'res2', pos: { top: '80%', left: '20%' }, icon: <FunnelIcon />, label: 'Otimização' },
        { id: 'res3', pos: { top: '80%', left: '72%' }, icon: <TrophyIcon />, label: 'Resultados' },
    ], []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsAnimated(true);
                    observer.disconnect();
                }
            }, { threshold: 0.5 }
        );
        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);
    
    useEffect(() => {
        const calculateBeams = () => {
            if (!containerRef.current) return;
            const container = containerRef.current;
            const { width, height } = container.getBoundingClientRect();
            if (width === 0 || height === 0) return;
            const coreCenter = { x: width / 2, y: height / 2 };
            
            const newBeams: React.CSSProperties[] = [];
            
            devices.forEach(d => {
                const deviceEl = document.getElementById(d.id);
                if (!deviceEl) return;
                const deviceRect = deviceEl.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const start = {
                    x: (deviceRect.left - containerRect.left) + deviceRect.width / 2,
                    y: (deviceRect.top - containerRect.top) + deviceRect.height / 2,
                };
                const dx = coreCenter.x - start.x;
                const dy = coreCenter.y - start.y;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                newBeams.push({ top: `${start.y}px`, left: `${start.x}px`, width: `${length}px`, transform: `rotate(${angle}deg)` });
            });

            results.forEach(r => {
                const resultEl = document.getElementById(r.id);
                if (!resultEl) return;
                const resultRect = resultEl.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const end = {
                    x: (resultRect.left - containerRect.left) + resultRect.width / 2,
                    y: (resultRect.top - containerRect.top) + resultRect.height / 2,
                };
                const dx = end.x - coreCenter.x;
                const dy = end.y - coreCenter.y;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                newBeams.push({ top: `${coreCenter.y}px`, left: `${coreCenter.x}px`, width: `${length}px`, transform: `rotate(${angle}deg)` });
            });
            setBeams(newBeams);
        };
        
        if (isAnimated) {
           const timeoutId = setTimeout(calculateBeams, 1600); 
           window.addEventListener('resize', calculateBeams);
           return () => { clearTimeout(timeoutId); window.removeEventListener('resize', calculateBeams); }
        }
    }, [isAnimated, devices, results]);

    return (
        <section ref={sectionRef} className={`orchestration-section ${isAnimated ? 'is-visible' : ''}`}>
            <div ref={containerRef} className={`orchestration-animation-container ${isAnimated ? 'animate' : ''}`}>
                
                {beams.slice(0, devices.length).map((style, i) => (
                    <div key={`beam-to-${i}`} className="connection-beam connection-beam-to-core" style={style} />
                ))}
                {beams.slice(devices.length).map((style, i) => (
                    <div key={`beam-from-${i}`} className="connection-beam connection-beam-from-core" style={style} />
                ))}
                {devices.map(d => (
                    <div id={d.id} key={d.id} className="glass-device" style={isAnimated ? d.order : d.chaos}>
                        <div className="glass-device-inner"></div>
                    </div>
                ))}
                <div className="ai-core-v2">
                    <div className="orbital-ring orbital-ring-1"></div>
                    <div className="orbital-ring orbital-ring-2"></div>
                    <div className="ai-core-v2-inner"></div>
                </div>
                {results.map(r => (
                    <div id={r.id} key={r.id} className="business-result-icon" style={r.pos}>
                        {r.icon}
                        <span>{r.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};


// Icons for HolographicTabs
const LeadIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7.5" r="4.5"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line></svg>;
const ContentIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>;
const CampaignIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;
const SegmentIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path><path d="M12 2v20"></path><path d="M2 12h20"></path></svg>;
const CallAnalysisIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M18 2l4 4-4 4"></path><path d="M14 8h8"></path></svg>;
const FollowUpIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z"></path><path d="M12 6v6l4 2"></path><path d="M22 4L12 14.01l-3-3"></path></svg>;
const ProjectManagementIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>;
const OnboardingIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path><line x1="12" y1="22" x2="12" y2="17"></line><line x1="20" y1="14" x2="20" y2="19"></line><line x1="17" y1="16.5" x2="23" y2="16.5"></line></svg>;
const TicketTriageIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v2L12 14 3 5V3z"></path><path d="M3 10h18"></path><path d="M3 17h18"></path></svg>;

const HolographicTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState('marketing');
    const [openDossier, setOpenDossier] = useState<string | null>(null);

    const tabsData = {
        marketing: {
            title: 'Marketing',
            items: [
                { id: 'mkt1', title: 'Qualificação e Nutrição de Leads', icon: <LeadIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'Nossa IA analisa o comportamento do usuário, pontua leads em tempo real e entrega apenas oportunidades prontas para a venda, nutrindo o restante com conteúdo relevante e automatizado.', before: 'Leads frios e desqualificados', after: '+30% em Leads Qualificados (SQLs)' },
                { id: 'mkt2', title: 'Geração de Conteúdo Personalizado', icon: <ContentIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'Crie posts para blog, e-mails e copies para anúncios em escala. A IA aprende o tom de voz da sua marca e gera conteúdo que engaja e converte.', before: 'Conteúdo genérico e demorado', after: 'Redução de 80% no tempo de criação' },
                { id: 'mkt3', title: 'Análise Preditiva de Campanhas', icon: <CampaignIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'Antes de lançar, nossa IA analisa sua campanha e prevê o potencial de sucesso, sugerindo otimizações em público, copy e criativos para maximizar o ROI.', before: 'Adivinhação no resultado de campanhas', after: 'Otimização de 25% no ROI de Mídia' },
                 { id: 'mkt4', title: 'Segmentação Dinâmica de Audiência', icon: <SegmentIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'Abandone as listas estáticas. Nossa IA analisa o comportamento em tempo real para criar micro-segmentos, permitindo campanhas de marketing ultra-personalizadas e com maior conversão.', before: "Campanhas genéricas 'one-size-fits-all'", after: "+20% de Engajamento em Campanhas" },
            ],
        },
        vendas: { 
            title: 'Vendas', 
            items: [
                { id: 'ven1', title: 'Prospecção Inteligente', icon: <LeadIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'A IA varre o mercado em busca de empresas com o perfil ideal e sinais de intenção de compra, entregando uma lista de prospecção altamente qualificada para sua equipe.', before: 'Prospecção manual e ineficiente', after: 'Aumento de 40% na taxa de resposta' },
                { id: 'ven2', title: 'Geração de Propostas', icon: <ContentIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'Automatize a criação de propostas comerciais. A IA coleta os dados do CRM e gera um documento completo e personalizado em segundos.', before: 'Horas gastas em propostas', after: 'Criação de propostas 90% mais rápida' },
                { id: 'ven3', title: 'Análise de Chamadas de Vendas com IA', icon: <CallAnalysisIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'Extraia insights sobre objeções, menções à concorrência e os argumentos que mais convertem, otimizando seu pitch de vendas e treinando sua equipe.', before: "Feedback de vendas baseado em achismo", after: "Insights acionáveis de 100% das chamadas" },
                { id: 'ven4', title: 'Automação de Follow-up Inteligente', icon: <FollowUpIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'Configure cadências de follow-up que se adaptam à interação do lead, garantindo um toque pessoal no momento certo para maximizar as chances de fechar negócio.', before: "Oportunidades perdidas por falta de FUP", after: "Aumento de 15% na taxa de conversão" },
            ] 
        },
        operacoes: { 
            title: 'Operações', 
            items: [
                { id: 'ops1', title: 'Relatórios Financeiros em Tempo Real', icon: <CampaignIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'Conecte suas fontes de dados e tenha relatórios de DRE, fluxo de caixa e outros KPIs gerados automaticamente, com insights e alertas da IA.', before: 'Fechamento mensal demorado', after: 'Relatórios diários e automatizados' },
                { id: 'ops2', title: 'Gestão de Projetos Inteligente', icon: <ProjectManagementIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'Nossa IA monitora o progresso de tarefas, identifica gargalos potenciais antes que aconteçam e aloca recursos de forma otimizada para manter seus projetos no prazo.', before: "Atrasos e estouro de orçamento", after: "Redução de 20% no tempo de ciclo" },
                { id: 'ops3', title: 'Onboarding Automatizado', icon: <OnboardingIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'Crie jornadas de onboarding personalizadas para clientes ou colaboradores. Garanta que a informação certa seja entregue na hora certa, melhorando a retenção.', before: "Onboarding manual e inconsistente", after: "Aumento de 25% na satisfação (NPS)" },
            ] 
        },
        atendimento: { 
            title: 'Atendimento', 
            items: [
                { id: 'ate1', title: 'Chatbots com IA Contextual', icon: <SegmentIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'Vá além de menus. Nossos chatbots entendem a intenção do cliente, resolvem problemas complexos e sabem quando escalar para um humano, tudo isso com o tom da sua marca.', before: 'Alta demanda para time de suporte', after: '70% dos tickets resolvidos por IA' },
                 { id: 'ate2', title: 'Triagem e Roteamento de Tickets', icon: <TicketTriageIcon className="w-6 h-6 text-[#00C0FF] mr-4 flex-shrink-0" />, description: 'A IA analisa o conteúdo de cada ticket, classifica por prioridade e o direciona para o agente correto, reduzindo drasticamente o tempo de primeira resposta.', before: "Longa espera pela primeira resposta", after: "-50% no Tempo de Primeira Resposta (FRT)" },
            ] 
        },
    };

    const handleTabClick = (tabKey: string) => {
        if (tabKey === activeTab) return;
        setActiveTab(tabKey);
        setOpenDossier(null); // Close any open dossier when switching tabs
    };
    
    const handleDossierClick = (id: string) => {
        setOpenDossier(prev => prev === id ? null : id);
    };

    const activeTabData = tabsData[activeTab as keyof typeof tabsData];

    return (
        <div className="mt-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Universo de Possibilidades</h3>
            <div className="holographic-tabs-container">
                <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-8">
                    {Object.keys(tabsData).map(key => (
                        <button key={key} onClick={() => handleTabClick(key)} className={`holographic-tab ${activeTab === key ? 'active' : ''}`}>
                            {tabsData[key as keyof typeof tabsData].title}
                        </button>
                    ))}
                </div>
                
                <div className="dossier-grid">
                    {activeTabData.items.map(item => (
                        <div key={item.id} className="bg-gray-900/50 border border-transparent rounded-lg overflow-hidden transition-all duration-300">
                            <button onClick={() => handleDossierClick(item.id)} className="automation-dossier-header">
                                {item.icon}
                                <span className="text-white font-semibold flex-grow">{item.title}</span>
                                <svg className={`w-5 h-5 text-gray-400 ml-4 transition-transform duration-300 ${openDossier === item.id ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className={`dossier-details ${openDossier === item.id ? 'open' : ''}`}>
                                <p className="text-gray-300">{item.description}</p>
                                <div className="dossier-metrics">
                                    <div className="metric-before">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase mb-1">Antes</h4>
                                        <p className="text-gray-200 font-medium">{item.before}</p>
                                    </div>
                                    <div className="metric-after">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase mb-1">Depois</h4>
                                        <p className="text-white font-semibold">{item.after}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

const AutomationPillarCard: React.FC<{feature: {icon: React.ReactNode, title: string, description: string}}> = ({ feature }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current; if (!card) return;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left; const y = e.clientY - top;
        const rotateY = ((x / width) - 0.5) * 2 * 10;
        const rotateX = -(((y / height) - 0.5) * 2 * 10);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current; if (!card) return;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

     const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current; if (!card) return;
        const pulse = document.createElement('div');
        pulse.className = 'pulse-effect';
        card.appendChild(pulse);
        pulse.onanimationend = () => { pulse.remove(); };
    };

    return (
        <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="blueprint-pillar bg-gray-900/80 p-8 rounded-2xl border border-gray-800 transition-all duration-200 ease-out group hover:border-[#E6007A] hover:bg-black/60 transform hover:-translate-y-1" style={{ transformStyle: "preserve-3d" }}>
            <div style={{ transform: 'translateZ(40px)' }}>
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
            </div>
        </div>
    );
};

const RealTimeAutomationFeed: React.FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [messageIndex, setMessageIndex] = useState(0);

    const messages = useMemo(() => [
        "[Processando] Qualificação de lead: empresa_abc.com... OK",
        "[Concluído] Relatório de vendas Q3 gerado.",
        "[Em Ação] Campanha de e-mail para 'Clientes Inativos' iniciada.",
        "[Sucesso] Ticket de suporte #4821 resolvido via IA.",
        "[Analisando] Padrões de consumo para otimização de estoque...",
    ], []);

    useEffect(() => {
        const fullMessage = messages[messageIndex];
        let currentText = '';
        let i = 0;

        const typingInterval = setInterval(() => {
            if (i < fullMessage.length) {
                currentText += fullMessage.charAt(i);
                setDisplayedText(currentText);
                i++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
                }, 3000); // Wait 3 seconds before starting next message
            }
        }, 50); // Typing speed

        return () => clearInterval(typingInterval);
    }, [messageIndex, messages]);

    return (
        <div className="automation-feed-container">
            <span className="text-gray-400 mr-2">[LIVE]</span>
            <span className="typing-effect">{displayedText}</span>
        </div>
    );
};

const InteractiveROICalculator: React.FC = () => {
    const [teamSize, setTeamSize] = useState(10);
    const [wastedHours, setWastedHours] = useState(5);
    const [isInteracting, setIsInteracting] = useState(false);
    const interactionTimeoutRef = useRef<number | null>(null);

    const handleInteraction = () => {
        setIsInteracting(true);
        if (interactionTimeoutRef.current) {
            clearTimeout(interactionTimeoutRef.current);
        }
        interactionTimeoutRef.current = window.setTimeout(() => {
            setIsInteracting(false);
        }, 700); // Match shockwave animation duration
    };

    const handleTeamSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTeamSize(Number(e.target.value));
        handleInteraction();
    };
    
    const handleWastedHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWastedHours(Number(e.target.value));
        handleInteraction();
    };

    const pulses = useMemo(() => 
        Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 5}s`
        })), []);

    const hoursSavedPerMonth = teamSize * wastedHours * 4;
    const moneySavedPerYear = hoursSavedPerMonth * 12 * 50; // Assuming R$50/hr average cost

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    return (
         <section className={`py-20 md:py-24 roi-calculator-bg ${isInteracting ? 'is-interacting' : ''}`}>
            <div className="data-pulse-container" aria-hidden="true">
                {pulses.map(p => (
                    <div
                        key={p.id}
                        className="data-pulse"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.animationDelay,
                            animationDuration: p.animationDuration,
                        }}
                    ></div>
                ))}
            </div>
            <div className="container mx-auto px-6 max-w-4xl text-center roi-calculator-content">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Calcule sua Eficiência</h2>
                <p className="text-gray-300 mb-12 max-w-2xl mx-auto">Veja o impacto real da automação no seu negócio. Arraste os sliders para personalizar a simulação.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-left">
                        <div>
                            <label className="flex justify-between items-center font-semibold text-white mb-3">
                                <span>Quantas pessoas na sua equipe?</span>
                                <span className="text-2xl font-bold text-[#00C0FF]">{teamSize}</span>
                            </label>
                            <input type="range" min="1" max="100" value={teamSize} onChange={handleTeamSizeChange} className="roi-slider" />
                        </div>
                        <div>
                            <label className="flex justify-between items-center font-semibold text-white mb-3">
                                <span>Horas gastas por semana em tarefas manuais?</span>
                                <span className="text-2xl font-bold text-[#00C0FF]">{wastedHours}h</span>
                            </label>
                            <input type="range" min="1" max="20" value={wastedHours} onChange={handleWastedHoursChange} className="roi-slider" />
                        </div>
                    </div>

                    <div className="bg-gray-900/50 border border-[#E6007A]/50 rounded-2xl p-8 space-y-6">
                        <div>
                            <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Horas recuperadas por mês</p>
                            <p className="text-4xl lg:text-5xl font-black text-[#E6007A] roi-result-number">{hoursSavedPerMonth.toLocaleString('pt-BR')}</p>
                        </div>
                         <div>
                            <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Potencial de economia anual</p>
                            <p className="text-4xl lg:text-5xl font-black text-[#E6007A] roi-result-number">{formatCurrency(moneySavedPerYear)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const AutomationPageContent: React.FC<{ solution: Solution, handleContactClick: (e: React.MouseEvent) => void }> = ({ solution, handleContactClick }) => {
    return (
        <div className="bg-[#121212] text-white">
            <AutomationParticleHero />
            
            <div className="py-20 md:py-24">
                 <div className="container mx-auto px-6 max-w-4xl text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Do Caos à Ordem Inteligente</h2>
                     <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-12">{solution.description}</p>
                </div>
                <IntelligentOrchestrationAnimation />
            </div>
            
            <section className="py-20 md:py-24 blueprint-bg">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h3 className="text-3xl font-bold text-white text-center mb-12">Pilares da Nossa Automação</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solution.features.map((feature, index) => (
                            <AutomationPillarCard key={index} feature={feature} />
                        ))}
                    </div>
                    <RealTimeAutomationFeed />
                </div>
            </section>

            <section className="py-20 md:py-24 particle-flow-bg">
                <div className="container mx-auto px-6 max-w-4xl">
                    <HolographicTabs />
                </div>
            </section>

            <InteractiveROICalculator />

            <section className="py-20 md:py-24 tech-interface-bg">
                <div className="container mx-auto px-6">
                     <div className="text-center bg-gray-900/80 backdrop-blur-sm border border-[#E6007A]/50 rounded-2xl p-10 shadow-lg max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Qual processo vamos automatizar primeiro?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Agora que você viu o potencial, vamos conversar sobre como aplicar essa eficiência no seu negócio.</p>
                        <button onClick={handleContactClick} className="bg-[#E6007A] text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-[#d1006f] transition-all duration-300 transform hover:scale-105">
                            Fale Com um Especialista
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

// --- Componentes para a Nova Página de Aplicativos Nativos ---

const BarcodeIcon = () => (
    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7v10" /><path d="M6 7v10" /><path d="M10 7v10" /><path d="M14 7v10" /><path d="M18 7v10" /><path d="M21 7v10" />
    </svg>
);

const TransferIcon = () => (
    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 014-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
);

const PixIcon = () => (
    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const NativeAppHero: React.FC<{ solution: Solution }> = ({ solution }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/?;:"[]{}\\|=+-_*!@#$%^&()';
  const columns = useMemo(() => Array.from({ length: 15 }).map(() => ({
      chars: Array.from({ length: 30 }).map(() => matrixChars[Math.floor(Math.random() * matrixChars.length)]).join(''),
      delay: Math.random() * 2,
  })), []);
  
  const actionIcons: { [key: string]: React.ReactNode } = {
    Pagar: <BarcodeIcon />,
    Transferir: <TransferIcon />,
    Pix: <PixIcon />,
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);
      const rotateY = (x / (width / 2)) * 10; // Reduced rotation for subtlety
      const rotateX = -(y / (height / 2)) * 10;
      container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      container.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const ShoppingCartIcon = () => <svg fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>;
  const BuildingIcon = () => <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"></path></svg>;
  const UtensilsIcon = () => <svg fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a1 1 0 00-1 1v12a1 1 0 00.293.707l1.414 1.414a1 1 0 001.414 0l1.414-1.414A1 1 0 0010 15V3a1 1 0 00-1-1H6z"></path><path d="M14 2a1 1 0 00-1 1v12a1 1 0 00.293.707l1.414 1.414a1 1 0 001.414 0l1.414-1.414A1 1 0 0018 15V3a1 1 0 00-1-1h-3z"></path></svg>;

  return (
    <section className="native-hero-bg">
        <div className="container mx-auto px-6 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">{solution.title}</h1>
                    <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-300">{solution.subtitle}</p>
                </div>
                 <div className="flex justify-center items-center -mt-8 lg:mt-0">
                    <div ref={containerRef} className="phone-3d-container">
                        <div className="phone-mockup">
                            <div className="phone-screen">
                                <div className="dynamic-island"></div>
                                <div className="financial-journey-pro-container">
                                    
                                    {/* Act 1: Matrix Code & Brand */}
                                    <div className="fj-matrix-code">
                                        {columns.map((col, i) => (
                                            <p key={i} className="fj-matrix-column" style={{ animationDelay: `${col.delay}s`}}>{col.chars}</p>
                                        ))}
                                    </div>
                                    <div className="fj-logo-pro">
                                        <div className="fj-logo-pro-icon"></div>
                                        <span>Zenith</span>
                                    </div>

                                    {/* Act 2: Auth */}
                                    <div className="fj-auth-pro">
                                        <div className="fj-face-icon-pro">
                                            <div className="fj-face-scanner-pro"></div>
                                        </div>
                                        <svg className="fj-check-icon" viewBox="0 0 24 24"><path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    </div>

                                    {/* Act 3: Dashboard */}
                                    <div className="fj-dashboard-pro">
                                        <div className="fj-balance-pro">
                                            <div className="fj-balance-label-pro">Saldo Disponível</div>
                                            <div className="fj-balance-amount-pro">
                                                R$ 12.480,75
                                                <div className="fj-balance-shimmer-pro"></div>
                                            </div>
                                        </div>

                                        <div className="fj-graph-pro">
                                            <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                                                <defs>
                                                  <linearGradient id="graph-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" style={{stopColor: '#00C0FF', stopOpacity:1}} />
                                                    <stop offset="100%" style={{stopColor: '#E6007A', stopOpacity:1}} />
                                                  </linearGradient>
                                                </defs>
                                                <path d="M 0,35 C 10,10, 20,15, 30,25 S 50,30, 60,20 S 80,5, 100,15" className="fj-graph-line-bg-pro" />
                                                <path d="M 0,35 C 10,10, 20,15, 30,25 S 50,30, 60,20 S 80,5, 100,15" className="fj-graph-line-pro" />
                                                <circle cx="100" cy="15" r="3" className="fj-graph-pulse-pro" />
                                            </svg>
                                        </div>
                                        
                                        <div className="fj-actions-pro">
                                           {Object.keys(actionIcons).map(action => (
                                             <div key={action} className="fj-action-btn-pro">
                                                <div className="fj-action-icon-pro">
                                                  {actionIcons[action]}
                                                </div>
                                                <span>{action}</span>
                                            </div>
                                           ))}
                                        </div>
                                        
                                        <div className="fj-transactions-pro">
                                            <div className="fj-transactions-pro-header">
                                                <span>Transações Recentes</span>
                                                <a href="#/" className="text-gray-400">Ver tudo</a>
                                            </div>
                                            <div className="fj-transaction-item-pro">
                                                <div className="fj-transaction-details">
                                                    <div className="fj-transaction-icon"><ShoppingCartIcon /></div>
                                                    <div className="fj-transaction-info">
                                                        <span>Compra Online</span>
                                                        <span>E-commerce</span>
                                                    </div>
                                                </div>
                                                <span className="fj-transaction-amount">- R$ 250,00</span>
                                            </div>
                                            <div className="fj-transaction-item-pro">
                                                <div className="fj-transaction-details">
                                                    <div className="fj-transaction-icon"><BuildingIcon /></div>
                                                    <div className="fj-transaction-info">
                                                        <span>Salário</span>
                                                        <span>Empresa X</span>
                                                    </div>
                                                </div>
                                                <span className="fj-transaction-amount text-green-400">+ R$ 5.000,00</span>
                                            </div>
                                             <div className="fj-transaction-item-pro">
                                                <div className="fj-transaction-details">
                                                     <div className="fj-transaction-icon"><UtensilsIcon /></div>
                                                    <div className="fj-transaction-info">
                                                        <span>Restaurante</span>
                                                        <span>Alimentação</span>
                                                    </div>
                                                </div>
                                                <span className="fj-transaction-amount">- R$ 120,50</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

const QuantumWorkflow: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set());
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const pulsePathRef = useRef<SVGPathElement | null>(null);
    const nodesRef = useRef<Map<string, HTMLElement | null>>(new Map());

    const processSteps = useMemo(() => [
        { id: 'step-1', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: "Estratégia & UX Design", description: "Mapeamos a jornada e criamos um protótipo interativo de alta fidelidade." },
        { id: 'step-2', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>, title: "Desenvolvimento Nativo", description: "Construímos o app para iOS e Android com FlutterFlow para performance e agilidade." },
        { id: 'step-3', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>, title: "Back-end & APIs", description: "Implementamos um back-end robusto com Xano ou Supabase para segurança." },
        { id: 'step-4', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Testes & QA", description: "Garantimos uma experiência livre de bugs através de testes rigorosos." },
        { id: 'step-5', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>, title: "Lançamento & Suporte", description: "Publicamos nas lojas da Apple e Google e oferecemos suporte contínuo." },
    ], []);

    useEffect(() => {
        const pulsePath = pulsePathRef.current;
        if (pulsePath) {
            const length = pulsePath.getTotalLength();
            pulsePath.style.setProperty('--path-length', `${length}`);
        }

        const mainObserver = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    mainObserver.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        const currentWrapper = wrapperRef.current;
        if (currentWrapper) mainObserver.observe(currentWrapper);

        const nodeObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = (entry.target as HTMLElement).dataset.id;
                    if (id) {
                        if (entry.isIntersecting) {
                            setActiveNodes(prev => new Set(prev).add(id));
                        } else {
                            setActiveNodes(prev => {
                                const next = new Set(prev);
                                next.delete(id);
                                return next;
                            });
                        }
                    }
                });
            },
            { threshold: 0.6 }
        );
        const currentNodes = nodesRef.current;
        currentNodes.forEach((node) => {
            if (node) nodeObserver.observe(node);
        });

        return () => {
            if (currentWrapper) mainObserver.unobserve(currentWrapper);
            currentNodes.forEach((node) => {
                if (node) nodeObserver.unobserve(node);
            });
        };
    }, []);

    const pathD = "M 0,300 C 150,500 250,100 580,300 S 950,500 1150,150 L 1200,150";

    return (
        <section id="processo" className="quantum-workflow-bg">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-black text-white mb-4">A Supervia de Dados: Da Ideia ao Impacto</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">Siga nosso fluxo de valor, uma jornada clara e progressiva que transforma conceitos em resultados de mercado tangíveis.</p>
            </div>
            <div ref={wrapperRef} className={`quantum-workflow-wrapper ${isVisible ? 'is-visible' : ''}`}>
                <div className="superhighway-node origin-node">
                    <div className="superhighway-node-core"><div></div></div>
                    <span>Ideia</span>
                </div>
                <div className="quantum-data-backbone">
                    <svg width="1200" height="600" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00C0FF" />
                                <stop offset="100%" stopColor="#E6007A" />
                            </linearGradient>
                        </defs>
                        <path d={pathD} className="quantum-data-backbone-path" />
                        <path ref={pulsePathRef} d={pathD} className="quantum-data-backbone-pulse" />
                    </svg>
                </div>
                {processSteps.map((step, index) => (
                    <div
                        key={step.id}
                        ref={(el: HTMLDivElement | null) => { if(el) { nodesRef.current.set(step.id, el); }}}
                        data-id={step.id}
                        className={`quantum-node-container step-${index + 1} ${activeNodes.has(step.id) ? 'is-active' : ''}`}
                    >
                        <div className="quantum-node">
                            <div className="quantum-node-icon">{step.icon}</div>
                            <h3 className="quantum-node-title">{step.title}</h3>
                            <p className="quantum-node-description">{step.description}</p>
                        </div>
                    </div>
                ))}
                 <div className="superhighway-node destination-node">
                    <div className="superhighway-node-core"><div></div></div>
                    <span>Lançamento</span>
                </div>
            </div>
        </section>
    );
};

const IntegratedEcosystemBenefits: React.FC = () => {
    const [activeBenefit, setActiveBenefit] = useState('performance');
    const containerRef = useRef<HTMLDivElement>(null);
    const [beams, setBeams] = useState<{ [key: string]: React.CSSProperties }>({});

    const benefits = useMemo(() => ({
        performance: {
            angle: -90,
            icon: <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
            title: "Performance Absoluta",
            description: "Acesso direto ao hardware do dispositivo resulta em velocidade e responsividade incomparáveis, criando uma experiência de usuário fluida e sem atritos."
        },
        experience: {
            angle: 30,
            icon: <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
            title: "Experiência Superior",
            description: "Aproveite ao máximo os recursos nativos como câmera, GPS e biometria para criar funcionalidades ricas e uma UI/UX totalmente integrada ao sistema."
        },
        engagement: {
            angle: 150,
            icon: <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
            title: "Engajamento e Retenção",
            description: "Notificações push e a presença constante na tela inicial do usuário criam um canal direto de comunicação, aumentando o engajamento e a fidelidade."
        }
    }), []);

    useEffect(() => {
        const calculateBeams = () => {
            if (!containerRef.current) return;
            const container = containerRef.current;
            const { width, height } = container.getBoundingClientRect();
            if (width === 0) return;

            const radius = Math.min(width, height) / 2 * 0.7; // 70% of half the smallest dimension
            const coreCenter = { x: width / 2, y: height / 2 };
            const newBeams: { [key: string]: React.CSSProperties } = {};

            Object.keys(benefits).forEach(key => {
                const benefit = benefits[key as keyof typeof benefits];
                const angleRad = (benefit.angle * Math.PI) / 180;
                const nodeCenter = {
                    x: coreCenter.x + radius * Math.cos(angleRad),
                    y: coreCenter.y + radius * Math.sin(angleRad),
                };
                const dx = nodeCenter.x - coreCenter.x;
                const dy = nodeCenter.y - coreCenter.y;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
                newBeams[key] = {
                    top: '50%',
                    left: '50%',
                    width: `${length}px`,
                    transform: `rotate(${angleDeg}deg)`,
                };
            });
            setBeams(newBeams);
        };

        calculateBeams();
        window.addEventListener('resize', calculateBeams);
        return () => window.removeEventListener('resize', calculateBeams);
    }, [benefits]);
    
    const radius = 210;

    return (
        <section className="py-20 md:py-32 integrated-ecosystem-bg particle-flow-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white">Ecossistema de Benefícios Conectados</h2>
                    <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Um aplicativo nativo não é uma solução isolada, é um ecossistema de vantagens que trabalham em conjunto.</p>
                </div>
                <div className="lg:flex lg:justify-center lg:items-center">
                    <div ref={containerRef} className="ecosystem-benefits-container">
                        <div className="ecosystem-core">
                            <FlutterFlowIcon className="w-12 h-12" />
                            <span className="font-bold mt-2 text-white">App Nativo</span>
                        </div>
                        {Object.keys(benefits).map(key => {
                            const benefit = benefits[key as keyof typeof benefits];
                            const angleRad = (benefit.angle * Math.PI) / 180;
                            const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
                            const style: React.CSSProperties = isMobile ? {} : {
                                transform: `translate(${radius * Math.cos(angleRad)}px, ${radius * Math.sin(angleRad)}px)`
                            };
                            return (
                                <React.Fragment key={key}>
                                    <div
                                        className="ecosystem-node"
                                        style={style}
                                        onMouseEnter={() => setActiveBenefit(key)}
                                    >
                                        {benefit.icon}
                                    </div>
                                    <div className="ecosystem-beam" style={beams[key] || {}}></div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                    <div className="text-center lg:text-left lg:w-1/3 lg:pl-16 mt-8 lg:mt-0">
                         {Object.keys(benefits).map(key => {
                             const benefit = benefits[key as keyof typeof benefits];
                             return (
                                <div key={key} className={`ecosystem-description ${activeBenefit === key ? 'active' : ''}`}>
                                    <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-gray-300">{benefit.description}</p>
                                </div>
                             )
                         })}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TechEcosystem: React.FC = () => {
    return (
        <section className="tech-ecosystem-bg py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-black text-white mb-4">Nosso Ecossistema Tecnológico</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-16">Integramos as melhores tecnologias para criar aplicativos robustos e escaláveis.</p>
                <div className="flex justify-center">
                    <div className="ecosystem-container">
                        <div className="core-tech"><FlutterFlowIcon className="w-full h-full" /></div>
                        <div className="orbit orbit-1">
                            <div className="orbiting-tech orbiting-tech-1"><svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7.5" r="4.5"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line></svg></div>
                            <div className="orbiting-tech orbiting-tech-2"><svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg></div>
                        </div>
                        <div className="orbit orbit-2">
                             <div className="orbiting-tech orbiting-tech-3"><svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const ImmersiveCTA: React.FC<{ handleContactClick: (e: React.MouseEvent) => void }> = ({ handleContactClick }) => {
    return (
        <section className="py-20 md:py-24 immersive-cta-bg">
            <div className="relative z-10 container mx-auto px-6">
                 <div className="text-center bg-black/50 backdrop-blur-lg border border-white/20 rounded-2xl p-10 shadow-lg max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Pronto para ter seu App nas Lojas?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Sua ideia merece uma execução impecável. Vamos conversar sobre como podemos transformar seu conceito em um aplicativo de sucesso.</p>
                    <button onClick={handleContactClick} className="bg-[#E6007A] text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-[#d1006f] transition-all duration-300 transform hover:scale-105">
                        Fale Com um Especialista
                    </button>
                </div>
            </div>
        </section>
    );
}

const NativeAppsPageContent: React.FC<{ solution: Solution, handleContactClick: (e: React.MouseEvent) => void }> = ({ solution, handleContactClick }) => {
    return (
        <div className="bg-[#0a0a0a] text-white">
            <NativeAppHero solution={solution} />
            <QuantumWorkflow />
            <IntegratedEcosystemBenefits />
            <TechEcosystem />
            <ImmersiveCTA handleContactClick={handleContactClick} />
        </div>
    );
};

// --- Componentes para a Nova Página de SaaS e MVPs ---

const SaaSBlueprintHero: React.FC<{ solution: Solution }> = ({ solution }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            }, { threshold: 0.3 }
        );
        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);
    
    const lines = useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
        transform: `rotate(${i * 30}deg)`,
        width: `${150 + Math.random() * 100}px`,
        transitionDelay: `${0.5 + Math.random() * 0.5}s`
    })), []);

    return (
        <section ref={sectionRef} className={`relative w-full flex items-center justify-center text-center overflow-hidden saas-hero-bg ${isVisible ? 'is-visible' : ''}`}>
            <div className="blueprint-animation-container">
                <div className="blueprint-core"></div>
                {lines.map((line, i) => (
                    <div key={i} className="blueprint-line" style={line}></div>
                ))}
            </div>
            <div className="relative z-10 px-4 py-32">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
                    From Concept to Code:<br /> Architecting Your Market-Ready SaaS
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
                    {solution.subtitle}
                </p>
            </div>
        </section>
    );
};

const StrategicPillarsSection: React.FC<{ solution: Solution }> = ({ solution }) => (
    <section className="py-20 md:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-white">A Fundação Estratégica</h2>
                <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">{solution.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {solution.features.map((feature, index) => (
                    <div key={index} className="strategic-pillar p-8 rounded-2xl">
                        <div style={{ transform: 'translateZ(30px)' }}>
                           <div className="mb-4">{feature.icon}</div>
                           <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                           <p className="text-gray-400">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const InteractiveProcessTimeline: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        { label: "Blueprint", title: "Fase 01: Blueprint (Estratégia & UX)", description: "Mergulhamos no seu negócio para mapear a jornada do usuário, definir os requisitos técnicos e criar um protótipo interativo de alta fidelidade. Cada tela, cada clique, planejado para o máximo impacto." },
        { label: "Fundação", title: "Fase 02: Fundação (Back-End & Banco de Dados)", description: "Construímos o alicerce do seu SaaS. Modelamos bancos de dados eficientes em Xano ou Supabase e desenvolvemos APIs seguras que garantirão a performance e a escalabilidade da sua plataforma." },
        { label: "Construção", title: "Fase 03: Construção (Front-End & UI)", description: "Damos vida ao design. Utilizando WeWeb ou Bubble, transformamos o protótipo em uma interface pixel-perfect, responsiva e intuitiva, focada na melhor experiência para o usuário final." },
        { label: "Integração", title: "Fase 04: Integração (Automação & APIs)", description: "Conectamos sua plataforma a serviços essenciais - gateways de pagamento, CRMs, ferramentas de análise - e criamos automações inteligentes para otimizar os processos internos e a jornada do cliente." },
        { label: "Lançamento", title: "Fase 05: Lançamento (Deploy & Escala)", description: "Preparamos a infraestrutura, realizamos os testes finais e publicamos sua aplicação. Após o lançamento, monitoramos a performance para garantir uma operação estável e otimizada para o crescimento." },
    ];
    const progress = (activeStep / (steps.length - 1)) * 100;

    return (
        <section className="py-20 md:py-32 blueprint-bg">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-white">Nossa Linha de Montagem Digital</h2>
                    <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">Um processo transparente e iterativo que transforma sua visão em um produto real, fase por fase.</p>
                </div>
                <div className="process-timeline-container">
                    <div className="timeline-track">
                        <div className="timeline-progress" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="timeline-steps">
                        {steps.map((step, index) => (
                             <div key={index} className={`timeline-step ${activeStep >= index ? 'active' : ''}`} onMouseEnter={() => setActiveStep(index)}>
                                <div className="timeline-node">{index + 1}</div>
                                <div className="timeline-step-label">{step.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="mt-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 timeline-content-viewer">
                    {steps.map((step, index) => (
                         <div key={index} className={`timeline-content ${activeStep === index ? 'active' : ''}`}>
                            <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-300 text-lg">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const DataDashboardResults: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) setIsVisible(true);
        }, { threshold: 0.5 });
        const currentRef = sectionRef.current;
        if(currentRef) observer.observe(currentRef);
        return () => { if(currentRef) observer.unobserve(currentRef); };
    }, []);

    const Counter = ({ target, duration = 2000, suffix = '', prefix = '' }: { target: number, duration?: number, suffix?: string, prefix?: string }) => {
        const [count, setCount] = useState(0);
        
        useEffect(() => {
            if (!isVisible) return;
            let start = 0;
            const end = target;
            if (start === end) return;
            const incrementTime = (duration / end);
            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);
            return () => clearInterval(timer);
        }, [isVisible, target, duration]);

        return <span className="font-black text-4xl md:text-5xl text-white">{prefix}{count.toLocaleString('pt-BR')}{suffix}</span>;
    };

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-[#0a0a0a]">
            <div className="container mx-auto px-6 max-w-5xl">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white">Impacto Mensurável</h2>
                    <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">Nossa metodologia não entrega apenas software, entrega resultados de negócio exponenciais.</p>
                </div>
                <div className="data-dashboard p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="data-card p-6 col-span-1 md:col-span-2 text-center">
                        <h3 className="text-lg font-semibold text-[#00C0FF] mb-2">Time to Market</h3>
                        <p className="text-gray-400 mb-4">De 9 meses para</p>
                        <Counter target={3} suffix=" meses" />
                    </div>
                     <div className="data-card p-6 text-center">
                        <h3 className="text-lg font-semibold text-[#00C0FF] mb-2">Custo de Desenvolvimento</h3>
                        <p className="text-gray-400 mb-4">Redução de até</p>
                        <Counter target={70} suffix="%" />
                    </div>
                     <div className="data-card p-6 text-center">
                        <h3 className="text-lg font-semibold text-[#00C0FF] mb-2">Escalabilidade</h3>
                        <p className="text-gray-400 mb-4">Pronto para</p>
                         <Counter target={1000000} prefix="+" suffix=" usuários" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SaaSPlatformPageContent: React.FC<{ solution: Solution, handleContactClick: (e: React.MouseEvent) => void }> = ({ solution, handleContactClick }) => {
    return (
        <div className="bg-[#0a0a0a] text-white">
            <SaaSBlueprintHero solution={solution} />
            <StrategicPillarsSection solution={solution} />
            <InteractiveProcessTimeline />
            <DataDashboardResults />
            <section className="py-20 md:py-24 tech-interface-bg">
                <div className="container mx-auto px-6">
                     <div className="text-center bg-gray-900/80 backdrop-blur-sm border border-[#E6007A]/50 rounded-2xl p-10 shadow-lg max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Pronto para Arquitetar seu Projeto?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Sua visão merece uma equipe de elite em estratégia e engenharia. Vamos agendar uma sessão de blueprint e desenhar seu sucesso.</p>
                        <button onClick={handleContactClick} className="bg-[#E6007A] text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-[#d1006f] transition-all duration-300 transform hover:scale-105">
                            Agendar Sessão de Blueprint
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

// --- Componente Original para as outras soluções ---

const DefaultSolutionPageContent: React.FC<{ solution: Solution, handleContactClick: (e: React.MouseEvent) => void }> = ({ solution, handleContactClick }) => {
    return (
        <div className="bg-[#121212] text-white">
            <section className="relative pt-48 pb-32 flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${solution.heroImage})` }}>
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                <div className="relative z-10 container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{solution.title}</h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">{solution.subtitle}</p>
                </div>
            </section>

            <section className="py-20 md:py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center md:text-left md:flex md:items-center md:gap-12">
                        <div className="md:w-2/3">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">O que fazemos</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">{solution.description}</p>
                        </div>
                         <div className="hidden md:block md:w-1/3 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 mx-auto text-[#E6007A]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V5m0 14v-1m-6.364 1.636l-.707.707M17.636 5.636l-.707.707M5.636 5.636l.707.707M17.636 17.636l.707.707M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>
                        </div>
                    </div>
                    <div className="mt-20">
                        <h3 className="text-3xl font-bold text-white text-center mb-12">Principais Vantagens</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {solution.features.map((feature, index) => (
                                 <div key={index} className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-[#E6007A] transform hover:-translate-y-2">
                                    <div className="mb-4">{feature.icon}</div>
                                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                    <p className="text-gray-300">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                     <div className="text-center bg-gray-900 border border-[#E6007A]/50 rounded-2xl p-10 shadow-lg max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Pronto para implementar esta solução?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Vamos conversar sobre como a expertise da SNIPERTEC em {solution.title} pode transformar seu negócio.</p>
                        <button onClick={handleContactClick} className="bg-[#E6007A] text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-[#d1006f] transition-all duration-300 transform hover:scale-105">
                            Fale Com um Especialista
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

const SolutionPage: React.FC<SolutionPageProps> = ({ slug, navigate }) => {
  const [solution, setSolution] = useState<Solution | null>(null);

  useEffect(() => {
    const foundSolution = solutionsData.find(s => s.slug === slug);
    setSolution(foundSolution || null);
    window.scrollTo(0, 0);
  }, [slug]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('home', 'contato');
  };

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Solução não encontrada</h2>
            <button onClick={() => navigate('home')} className="bg-[#E6007A] text-white font-semibold py-2 px-5 rounded-md hover:bg-[#d1006f]">
                Voltar para a Home
            </button>
        </div>
      </div>
    );
  }

  if (slug === 'automacao-ia') {
    return <AutomationPageContent solution={solution} handleContactClick={handleContactClick} />;
  }
  
  if (slug === 'aplicativos-nativos') {
    return <NativeAppsPageContent solution={solution} handleContactClick={handleContactClick} />;
  }

  if (slug === 'plataformas-saas') {
    return <SaaSPlatformPageContent solution={solution} handleContactClick={handleContactClick} />;
  }

  return <DefaultSolutionPageContent solution={solution} handleContactClick={handleContactClick} />;
};

export default SolutionPage;