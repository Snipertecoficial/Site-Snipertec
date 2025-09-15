import React, { useEffect, useRef } from 'react';

// To prevent TypeScript errors for THREE loaded via script tag
declare const THREE: any;

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!canvasRef.current || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(5);
    
    const geometry = new THREE.TorusKnotGeometry(2, 0.3, 150, 20);
    const material = new THREE.MeshStandardMaterial({ color: 0xE6007A, metalness: 0.9, roughness: 0.2 });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(pointLight, ambientLight);
    
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    document.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        torusKnot.rotation.x += 0.001;
        torusKnot.rotation.y += 0.002;
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
    }
  }, []);
    
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-[#121212]">
      <canvas id="hero-canvas" ref={canvasRef}></canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4 text-white leading-tight">
          SNIPERTEC: Acelerando o Futuro Digital com Soluções No-Code de Alto Impacto.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          Construímos ecossistemas de marketing, vendas e tecnologia que geram resultados reais, mais rápido.
        </p>
        <button 
          onClick={() => scrollToSection('solucoes')}
          className="bg-[#E6007A] text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-[#d1006f] transition-all duration-300 transform hover:scale-105">
          Explore Nossas Soluções
        </button>
      </div>
    </section>
  );
};

export default Hero;