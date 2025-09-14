import React from 'react';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

type PageRoute = 'home' | 'blog-post' | 'join-team' | 'blog';

interface FooterProps {
    navigate: (route: PageRoute, slugOrSection?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
    
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <h3 className="text-2xl font-bold tracking-wider text-white mb-4 font-orbitron">
                    <span className="text-[#E6007A]">&lt;/&gt;</span> SNIPERTEC
                </h3>
                <p className="text-gray-300">Acelerando o Futuro Digital com Soluções No-Code de Alto Impacto.</p>
                <div className="mt-6 flex items-center space-x-6">
                    <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></SocialIcon>
                    <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995.017-2.277-1.387-2.277-1.405 0-1.623 1.096-1.623 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0c0 1.14-.926 2.065-2.064 2.065zm-2.063 1.666h4.127v-8.59H3.274v8.59z" clipRule="evenodd"></path></svg></SocialIcon>
                </div>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-4 tracking-wide">Navegação</h4>
                <div className="flex flex-col space-y-3">
                    <button onClick={() => navigate('home', 'solucoes')} className="text-left text-gray-300 hover:text-[#E6007A] transition-colors duration-300">Soluções</button>
                    <button onClick={() => navigate('home', 'arsenal')} className="text-left text-gray-300 hover:text-[#E6007A] transition-colors duration-300">Arsenal</button>
                    <button onClick={() => navigate('home', 'metodologia')} className="text-left text-gray-300 hover:text-[#E6007A] transition-colors duration-300">Metodologia</button>
                    <button onClick={() => navigate('blog')} className="text-left text-gray-300 hover:text-[#E6007A] transition-colors duration-300">Blog</button>
                     <button onClick={() => navigate('join-team')} className="text-left text-gray-300 hover:text-[#E6007A] transition-colors duration-300">Faça Parte do Time</button>
                </div>
            </div>
            
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
                <h4 className="font-bold text-white mb-4 tracking-wide">Contato</h4>
                <div className="text-gray-300 space-y-3">
                    <p><strong>Email:</strong> <a href="mailto:contato@snipertec.com.br" className="hover:text-[#E6007A]">contato@snipertec.com.br</a></p>
                    <p><strong>Telefone:</strong> <a href="tel:+5511982093067" className="hover:text-[#E6007A]">(11) 98209-3067</a></p>
                    <p><strong>Endereço:</strong> R. Barão de Ladário, 566/670 - 4º andar - Sala 401 - Brás, São Paulo</p>
                    <p><strong>CNPJ:</strong> 41.617.306/0001-79</p>
                </div>
            </div>

        </div>
        <div className="mt-12 pt-8 border-t border-gray-900 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SNIPERTEC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
