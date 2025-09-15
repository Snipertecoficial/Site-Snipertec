import React, { useState } from 'react';
import type { BlogPost } from '../types';
import { blogData } from '../data/blogData';

type PageRoute = 'home' | 'blog-post' | 'join-team' | 'blog';

interface AllPostsPageProps {
  navigate: (route: PageRoute, slugOrSection?: string) => void;
}

const BlogCard: React.FC<{ post: BlogPost; navigate: (route: 'blog-post', slug: string) => void; }> = ({ post, navigate }) => (
    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group transition-all duration-300 hover:border-[#E6007A]/50 hover:shadow-2xl hover:shadow-[#E6007A]/10 transform hover:-translate-y-2 flex flex-col">
    <div className="overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
        <span className="font-semibold">{post.category}</span>
        <span>{post.date}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 flex-grow">{post.title}</h3>
      <p className="text-gray-300 text-sm mb-4 ">{post.excerpt}</p>
      <button onClick={() => navigate('blog-post', post.slug)} className="self-start font-semibold text-[#E6007A] hover:text-[#eb3393] transition-colors">
        Leia Mais &rarr;
      </button>
    </div>
  </div>
);

const AllPostsPage: React.FC<AllPostsPageProps> = ({ navigate }) => {
    const [filter, setFilter] = useState('Todos');
    const categories = ['Todos', ...Array.from(new Set(blogData.map(p => p.category)))];

    const filteredPosts = filter === 'Todos' ? blogData : blogData.filter(p => p.category === filter);

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('home', 'contato');
    };

    return (
        <div className="pt-32 pb-16 bg-[#121212]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-white">Insights do Futuro</h1>
                    <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Navegue por nossos artigos e análises sobre as tendências que estão moldando o mercado digital.</p>
                </div>

                <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-12">
                    {categories.map(category => (
                        <button 
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 text-sm md:text-base ${filter === category ? 'bg-[#E6007A] text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map(post => (
                        <BlogCard key={post.slug} post={post} navigate={(route, slug) => navigate(route, slug)} />
                    ))}
                </div>

                <div className="mt-24 text-center bg-gray-900 border border-[#E6007A]/50 rounded-2xl p-10 shadow-lg">
                    <h2 className="text-3xl font-bold text-white mb-4">Pronto para Acelerar seu Negócio?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Nossa equipe de especialistas está pronta para transformar sua ideia em uma solução de alto impacto. Vamos conversar.</p>
                    <button onClick={handleContactClick} className="bg-[#E6007A] text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-[#d1006f] transition-all duration-300 transform hover:scale-105">
                        Fale Com um Especialista
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllPostsPage;