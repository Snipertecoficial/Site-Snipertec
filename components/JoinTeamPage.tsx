import React from 'react';

interface JoinTeamPageProps {
  navigate: (route: 'home') => void;
}

const JoinTeamPage: React.FC<JoinTeamPageProps> = ({ navigate }) => {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-black text-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
          Faça Parte do Nosso Time
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Estamos sempre em busca de talentos apaixonados por tecnologia, inovação e por resolver desafios complexos. Se você quer construir o futuro digital, seu lugar é aqui.
        </p>

        <div className="bg-gray-900 border border-gray-800 text-left rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Por que se juntar à SNIPERTEC?</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>Trabalhe com as tecnologias mais modernas de No-Code e IA do mercado.</li>
                <li>Participe de projetos desafiadores que geram impacto real para nossos clientes.</li>
                <li>Faça parte de uma cultura de aprendizado contínuo, colaboração e autonomia.</li>
                <li>Crescimento acelerado em um dos mercados que mais se expandem no mundo.</li>
            </ul>
            <div className="mt-8 text-center">
                <p className="text-gray-300">Interessado? Envie seu currículo e portfóflio para:</p>
                <a 
                    href="mailto:contato@snipertec.com.br?subject=Vaga de Emprego" 
                    className="text-[#E6007A] text-xl font-semibold hover:text-[#eb3393] transition-colors duration-300"
                >
                    contato@snipertec.com.br
                </a>
            </div>
        </div>

        <button onClick={() => navigate('home')} className="mt-12 bg-[#E6007A] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#d1006f] transition-all">
          &larr; Voltar para a Home
        </button>
      </div>
    </div>
  );
};

export default JoinTeamPage;
