import React, { useState, useEffect } from 'react';
import { solutionsData } from '../data/solutionsData';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

type PageRoute = 'home' | 'blog-post' | 'join-team' | 'blog' | 'solution';

interface HeaderProps {
  navigate: (route: PageRoute, slugOrSection?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (route: PageRoute, slugOrSection?: string) => {
    navigate(route, slugOrSection);
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
  }
  
  const solutionLinks = solutionsData.map(solution => (
    <button
        key={solution.slug}
        onClick={() => handleNavigation('solution', solution.slug)}
        className="text-gray-300 hover:text-[#E6007A] transition-colors duration-300 w-full text-left py-2 px-4 md:py-1 md:w-auto md:p-0 md:hover:bg-transparent"
    >
        {solution.title}
    </button>
  ));

  const navLinks = (
    <>
      <div 
        className="relative md:inline-block"
        onMouseEnter={() => setIsSolutionsOpen(true)}
        onMouseLeave={() => setIsSolutionsOpen(false)}
      >
        <button 
            onClick={() => handleNavigation('home', 'solucoes')}
            className="text-gray-300 hover:text-[#E6007A] transition-colors duration-300 w-full text-left py-2 px-4 md:w-auto md:p-0 flex items-center"
        >
            Soluções
            <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isSolutionsOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
         {isSolutionsOpen && (
            <div className="hidden md:block absolute top-full left-0 w-64 bg-black/80 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl py-2 z-50">
                {solutionLinks}
            </div>
        )}
      </div>
      <div className="md:hidden flex flex-col items-start pl-4 border-l border-gray-700">
        {solutionLinks}
      </div>
      <button onClick={() => handleNavigation('home', 'arsenal')} className="text-gray-300 hover:text-[#E6007A] transition-colors duration-300 w-full text-left py-2 px-4 md:w-auto md:p-0">Arsenal</button>
      <button onClick={() => handleNavigation('home', 'metodologia')} className="text-gray-300 hover:text-[#E6007A] transition-colors duration-300 w-full text-left py-2 px-4 md:w-auto md:p-0">Metodologia</button>
      <button onClick={() => handleNavigation('blog')} className="text-gray-300 hover:text-[#E6007A] transition-colors duration-300 w-full text-left py-2 px-4 md:w-auto md:p-0">Blog</button>
      <button onClick={() => handleNavigation('home', 'contato')} className="text-gray-300 hover:text-[#E6007A] transition-colors duration-300 w-full text-left py-2 px-4 md:w-auto md:p-0">Contato</button>
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigate('home')} className="text-2xl font-bold tracking-wider text-white font-orbitron">
          <span className="text-[#E6007A]">&lt;/&gt;</span> SNIPERTEC
        </button>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks}
        </nav>
        <button onClick={() => handleNavigation('home', 'contato')} className="hidden md:block bg-[#E6007A] text-white font-semibold py-2 px-5 rounded-md hover:bg-[#d1006f] transition-all duration-300 transform hover:scale-105">
          Fale Conosco
        </button>
        <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-lg pb-6">
              <nav className="container mx-auto px-6 flex flex-col items-start space-y-2">
                  {navLinks}
                   <button onClick={() => handleNavigation('home', 'contato')} className="mt-4 w-full text-left bg-[#E6007A] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#d1006f] transition-all duration-300">
                    Fale Conosco
                  </button>
              </nav>
          </div>
      )}
    </header>
  );
};

export default Header;