

import React, { useRef, MouseEvent, useEffect } from 'react';
import type { Service } from '../types';

declare const THREE: any;

type PageRoute = 'home' | 'solution';

interface ServicesProps {
    navigate: (route: PageRoute, slug: string) => void;
}

const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ZapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const RocketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const services: Service[] = [
  {
    icon: <CodeIcon className="w-10 h-10 text-[#E6007A]" />,
    tag: "SAAS & MVPs",
    title: "Desenvolvimento Ágil de Plataformas",
    description: "Transformamos sua visão em um produto digital robusto. Lançamos seu SaaS ou MVP com velocidade recorde, focando em validação e crescimento.",
    slug: 'plataformas-saas',
    deliverables: ["MVP Funcional", "Plataforma SaaS Escalável", "Protótipo Interativo"]
  },
  {
    icon: <ZapIcon className="w-10 h-10 text-[#E6007A]" />,
    tag: "EFICIÊNCIA",
    title: "Automação Inteligente com IA",
    description: "Otimizamos seus processos com fluxos de trabalho inteligentes, liberando sua equipe para focar em estratégia e inovação.",
    slug: 'automacao-ia',
    deliverables: ["Mapeamento de Processos", "Integração de Sistemas", "Dashboards em Tempo Real"]
  },
  {
    icon: <RocketIcon className="w-10 h-10 text-[#E6007A]" />,
    tag: "MOBILE",
    title: "Aplicativos Nativos de Alta Performance",
    description: "Criamos apps para iOS e Android para engajar e converter seus clientes onde eles estiverem, na palma da mão.",
    slug: 'aplicativos-nativos',
    deliverables: ["App iOS & Android", "Design Focado em Conversão", "Publicação nas Lojas"]
  },
  {
    icon: <ChartBarIcon className="w-10 h-10 text-[#E6007A]" />,
    tag: "CRESCIMENTO",
    title: "Estratégia Digital e Growth",
    description: "Mais do que tecnologia, entregamos um plano de crescimento. Mapeamos oportunidades e desenhamos a arquitetura ideal.",
    slug: 'plataformas-saas',
    deliverables: ["Análise de Product-Market Fit", "Plano de Go-to-Market", "Arquitetura da Solução"]
  }
];

const BlueprintPillarCard: React.FC<{ service: Service; navigate: (route: PageRoute, slug: string) => void; }> = ({ service, navigate }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateY = ((x / width) - 0.5) * 2 * 10;
    const rotateX = -(((y / height) - 0.5) * 2 * 10);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (!card) return;
    const pulse = document.createElement('div');
    pulse.className = 'pulse-effect';
    card.appendChild(pulse);
    pulse.onanimationend = () => {
      pulse.remove();
    };
  };

  return (
    <div 
      ref={cardRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="blueprint-pillar bg-gray-900/80 p-8 rounded-2xl border border-gray-800 transition-all duration-200 ease-out group hover:border-[#E6007A] hover:bg-black/60" 
      style={{ transformStyle: "preserve-3d" }}
    >
      <div style={{ transform: 'translateZ(40px)' }} className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C0FF]">{service.tag}</span>
          <div className="transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
          <p className="text-gray-300 mb-6">{service.description}</p>
        </div>
        <div className="mt-auto">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Entregáveis Chave:</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {service.deliverables.map(item => (
              <span key={item} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">{item}</span>
            ))}
          </div>
          <button onClick={() => navigate('solution', service.slug)} className="font-bold text-white bg-[#E6007A]/80 group-hover:bg-[#E6007A] w-full py-3 rounded-lg transition-colors duration-300">
            Explorar Solução
          </button>
        </div>
      </div>
    </div>
  );
};


const Services: React.FC<ServicesProps> = ({ navigate }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof THREE === 'undefined' || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;
    
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    let mouse = new THREE.Vector2();
    
    const particleCount = window.innerWidth < 768 ? 2000 : 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 20;
        positions[i3 + 1] = (Math.random() - 0.5) * 20;
        positions[i3 + 2] = (Math.random() - 0.5) * 20;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        color: 0x00c0ff, // Cyan color
        size: 0.03,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.6
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    const handleMouseMove = (event: globalThis.MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        
        // Parallax effect
        camera.position.x += (mouse.x * 2 - camera.position.x) * 0.03;
        camera.position.y += (mouse.y * 2 - camera.position.y) * 0.03;
        camera.lookAt(scene.position);
        
        // Gentle rotation
        particleSystem.rotation.y = elapsedTime * 0.02;

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        renderer.dispose();
        particleMaterial.dispose();
        particles.dispose();
    };

  }, []);

  return (
    <section id="solucoes" className="py-20 md:py-32 particle-field-bg">
      <canvas id="particle-field-canvas" ref={canvasRef}></canvas>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">Nossas Soluções</h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Capacitamos seu negócio com tecnologia de ponta, foco em resultados e agilidade sem precedentes.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <BlueprintPillarCard key={index} service={service} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;