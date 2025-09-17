

import React, { useRef, MouseEvent, useEffect } from 'react';
import type { Service } from '../types';
import { ChartBarIcon, CodeIcon, RocketIcon, ZapIcon } from './icons/TechIcons';

declare const THREE: any;

type PageRoute = 'home' | 'solution';

interface ServicesProps {
    navigate: (route: PageRoute, slug: string) => void;
}

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

    let animationFrameId: number;
    const canvas = canvasRef.current;

    const vertexShader = `
      uniform float uTime;
      attribute float aRandom;
      varying vec3 vPosition;

      void main() {
        vec3 pos = position;
        pos.z += sin(pos.y * 0.05 + uTime * 0.5 + aRandom * 3.14) * 1.5;

        vPosition = pos;

        vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * modelViewPosition;
        gl_PointSize = (1.5 + aRandom * 1.5) * (200.0 / -modelViewPosition.z);
      }
    `;

    const fragmentShader = `
      uniform vec3 uColorCyan;
      uniform vec3 uColorPink;
      uniform vec2 uMouse;

      varying vec3 vPosition;

      void main() {
        float dist = distance(vPosition.xy, uMouse);
        float strength = 1.0 - smoothstep(0.0, 15.0, dist);

        vec3 color = mix(uColorCyan, uColorPink, strength);

        float alpha = 1.0 - step(0.5, distance(gl_PointCoord, vec2(0.5)));
        gl_FragColor = vec4(color, alpha * (0.6 + strength * 0.4));
      }
    `;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const planeSize = 100;
    const segments = isMobile ? 40 : 60;
    const geometry = new THREE.PlaneGeometry(planeSize, planeSize, segments, segments);
    
    const count = geometry.attributes.position.count;
    const randoms = new Float32Array(count);
    for (let i = 0; i < count; i++) {
        randoms[i] = Math.random();
    }
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));
    
    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(-100, -100) },
            uColorCyan: { value: new THREE.Color('#00C0FF') },
            uColorPink: { value: new THREE.Color('#E6007A') },
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    points.rotation.x = -Math.PI * 0.2;
    points.position.y = -5;
    scene.add(points);

    const mouse = new THREE.Vector2(-100, -100);
    const parallaxMouse = new THREE.Vector2();

    const handleMouseMove = (event: globalThis.MouseEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const vec = new THREE.Vector3((x / rect.width) * 2 - 1, -(y / rect.height) * 2 + 1, 0.5);
        vec.unproject(camera);
        const dir = vec.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));
        mouse.copy(pos);
        
        parallaxMouse.x = (event.clientX / window.innerWidth) - 0.5;
        parallaxMouse.y = (event.clientY / window.innerHeight) - 0.5;
    };
    if (!isMobile) {
        window.addEventListener('mousemove', handleMouseMove);
    }

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        material.uniforms.uTime.value = elapsedTime;
        
        if (isMobile) {
            const mobileMouseX = Math.sin(elapsedTime * 0.2) * 20;
            const mobileMouseY = Math.cos(elapsedTime * 0.2) * 20;
            material.uniforms.uMouse.value.set(mobileMouseX, mobileMouseY);
        } else {
            material.uniforms.uMouse.value.lerp(mouse, 0.05);
        }
        
        camera.position.x += (parallaxMouse.x * 4 - camera.position.x) * 0.03;
        camera.position.y += (-parallaxMouse.y * 4 - camera.position.y) * 0.03;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        renderer.dispose();
        material.dispose();
        geometry.dispose();
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
