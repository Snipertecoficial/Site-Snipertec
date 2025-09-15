import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TechArsenal from './components/TechArsenal';
import Methodology from './components/Methodology';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';
import BlogPage from './components/BlogPage';
import JoinTeamPage from './components/JoinTeamPage';
import AllPostsPage from './components/Portfolio'; // Using Portfolio as AllPostsPage
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SolutionPage from './components/SolutionPage';

type PageRoute = 'home' | 'blog-post' | 'join-team' | 'blog' | 'solution';

const App: React.FC = () => {
  const [page, setPage] = useState<{ route: PageRoute; slug?: string, section?: string }>({ route: 'home' });

  useEffect(() => {
    if (page.route === 'home' && page.section) {
        setTimeout(() => {
            const element = document.getElementById(page.section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else {
        window.scrollTo(0, 0);
    }
  }, [page]);

  const navigate = (route: PageRoute, slugOrSection?: string) => {
    if (route === 'home' && slugOrSection) {
        setPage({ route, section: slugOrSection });
    } else if ((route === 'blog-post' || route === 'solution') && slugOrSection) {
        setPage({ route, slug: slugOrSection });
    } else {
        setPage({ route, section: undefined, slug: undefined });
    }
  };

  const renderPage = () => {
    switch (page.route) {
      case 'blog-post':
        return <BlogPage slug={page.slug!} navigate={navigate} />;
      case 'solution':
        return <SolutionPage slug={page.slug!} navigate={navigate} />;
      case 'join-team':
        return <JoinTeamPage navigate={navigate} />;
      case 'blog':
        return <AllPostsPage navigate={navigate} />;
      case 'home':
      default:
        return (
          <>
            <FadeInSection>
              <Hero />
            </FadeInSection>
            <FadeInSection>
              <Services navigate={navigate}/>
            </FadeInSection>
            <FadeInSection>
              <TechArsenal />
            </FadeInSection>
            <FadeInSection>
              <Methodology />
            </FadeInSection>
            <FadeInSection>
              <Blog navigate={navigate} />
            </FadeInSection>
            <FadeInSection>
              <Contact />
            </FadeInSection>
          </>
        );
    }
  };

  return (
    <div className="bg-[#121212] text-white antialiased overflow-x-hidden">
      <Header navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;