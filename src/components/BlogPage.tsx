import React, { useEffect, useState } from 'react';
import type { BlogPost } from '../types';
import { blogData } from '../data/blogData';
declare const marked: any;

type PageRoute = 'home' | 'blog-post' | 'join-team' | 'blog';

interface BlogPageProps {
  slug: string;
  navigate: (route: PageRoute, slugOrSection?: string) => void;
}

const RecommendedPostCard: React.FC<{ post: BlogPost; navigate: (route: 'blog-post', slug: string) => void; }> = ({ post, navigate }) => (
    <div 
      onClick={() => navigate('blog-post', post.slug)} 
      className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group transition-all duration-300 hover:border-[#E6007A]/50 transform hover:-translate-y-1 cursor-pointer flex flex-col"
    >
      <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-sm text-gray-400 font-semibold mb-1">{post.category}</span>
        <h4 className="text-md font-bold text-white flex-grow">{post.title}</h4>
      </div>
    </div>
);

const BlogPage: React.FC<BlogPageProps> = ({ slug, navigate }) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [recommendedPosts, setRecommendedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const foundPost = blogData.find(p => p.slug === slug);
    setPost(foundPost || null);

    if (foundPost) {
        // Lógica para artigos recomendados
        const sameCategory = blogData.filter(p => p.category === foundPost.category && p.slug !== slug);
        const otherCategories = blogData.filter(p => p.category !== foundPost.category && p.slug !== slug);
        
        // Embaralha para ter variedade
        const shuffledOthers = otherCategories.sort(() => 0.5 - Math.random());
        
        const recommendations = [...sameCategory, ...shuffledOthers].slice(0, 3);
        setRecommendedPosts(recommendations);
    }
    
    // Rola para o topo ao navegar para um novo post
    window.scrollTo(0, 0);

  }, [slug]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('home', 'contato');
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Artigo não encontrado</h2>
            <button onClick={() => navigate('blog')} className="bg-[#E6007A] text-white font-semibold py-2 px-5 rounded-md hover:bg-[#d1006f]">
                Voltar para o Blog
            </button>
        </div>
      </div>
    );
  }
  
  const parsedContent = typeof marked !== 'undefined' ? marked.parse(post.content) : '<p>Erro ao carregar conteúdo.</p>';

  return (
    <div className="pt-24 pb-16 bg-[#121212]">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={() => navigate('blog')} className="text-[#E6007A] hover:text-[#eb3393] mb-8">
            &larr; Voltar para todos os artigos
        </button>
        
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-300 mb-6">
            <span className="font-semibold">{post.category}</span>
            <span className="mx-2">&bull;</span>
            <span>{post.date}</span>
        </div>
        
        <img src={post.image} alt={post.title} className="w-full h-auto max-h-96 object-cover rounded-2xl mb-8" />
        
        <div 
          className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-white prose-a:text-[#E6007A] prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        >
        </div>
        
        {recommendedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-800">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Leia Também</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendedPosts.map(recPost => (
                <RecommendedPostCard key={recPost.slug} post={recPost} navigate={(route, slug) => navigate(route, slug!)} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-24 text-center bg-gray-900 border border-[#E6007A]/50 rounded-2xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Gostou do que leu?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Vamos transformar essa inspiração em ação. Agende uma conversa com nossos especialistas e descubra como podemos aplicar essas ideias no seu negócio.</p>
            <button onClick={handleContactClick} className="bg-[#E6007A] text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-[#d1006f] transition-all duration-300 transform hover:scale-105">
                Fale Com um Especialista
            </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;