import React from 'react';
import type { BlogPost } from '../types';
import { blogData } from '../data/blogData';

type PageRoute = 'home' | 'blog-post' | 'join-team' | 'blog';

interface BlogProps {
  navigate: (route: PageRoute, slug?: string) => void;
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
      <h3 className="text-xl font-bold text-white mb-3 h-20">{post.title}</h3>
      <p className="text-gray-300 text-sm mb-4 flex-grow">{post.excerpt}</p>
      <button onClick={() => navigate('blog-post', post.slug)} className="self-start font-semibold text-[#E6007A] hover:text-[#eb3393] transition-colors">
        Leia Mais &rarr;
      </button>
    </div>
  </div>
);

const Blog: React.FC<BlogProps> = ({ navigate }) => {
  return (
    <section id="blog" className="py-20 md:py-32 insights-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white">Insights do Futuro</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Artigos e análises sobre as tendências que estão moldando o mercado digital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} navigate={(route, slug) => navigate(route, slug)} />
          ))}
        </div>
        <div className="text-center mt-16">
            <button 
                onClick={() => navigate('blog')}
                className="bg-[#E6007A] text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-[#d1006f] transition-all duration-300 transform hover:scale-105"
            >
                Ver Todos os Artigos
            </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;