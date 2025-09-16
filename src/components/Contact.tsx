import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

// To prevent TypeScript errors for marked loaded via script tag
declare const marked: any;

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.75.45 3.49 1.32 5.05L2 22l5.25-1.38c1.52.79 3.2 1.23 4.79 1.23h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM9.53 8.5c.24-.24.58-.38.93-.38.35 0 .69.13.93.38l.01.01c.24.24.38.58.38.93s-.13.69-.38.93l-2.09 2.09c-.24.24-.24.61 0 .85l2.83 2.83c.24.24.61.24.85 0l2.09-2.09c.24-.24.58-.38.93-.38s.69.13.93.38l.01.01c.24.24.38.58.38.93s-.13.69-.38.93l-2.09 2.09c-.24.24-.51.45-.81.61s-.62.24-.96.24c-.35 0-.69-.08-1.01-.24s-.6-.37-.85-.61l-4.17-4.17c-.49-.49-.76-1.14-.76-1.84s.27-1.35.76-1.84l2.09-2.09z" />
    </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
    </svg>
);

const Contact: React.FC = () => {
  // State for the traditional contact form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // State for the AI plan generator
  const [idea, setIdea] = useState('');
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handler for the traditional contact form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
  };
  
  // Handler for the AI plan generator
  const handleGeneratePlan = async () => {
    if (!idea.trim()) return;
    
    setIsLoading(true);
    setGeneratedPlan('');

    const systemInstruction = "Você é um consultor sênior de estratégia digital da SNIPERTEC. Sua missão é analisar a ideia do usuário e transformá-la em um plano de ação estratégico e detalhado. O plano deve ser estruturado em 3 fases claras: **Fase 1: Estratégia e Validação**, **Fase 2: Construção e Lançamento (MVP)**, e **Fase 3: Tração e Escala**. Para cada fase, você deve detalhar: 1. **Objetivo Principal:** Qual é o foco central desta fase? 2. **Ações-Chave:** Liste de 3 a 4 ações concretas a serem tomadas. Seja específico (ex: 'Mapeamento da Jornada do Usuário', 'Definição da Arquitetura de Dados', 'Desenvolvimento do sistema de login e perfis'). 3. **Entregáveis:** O que o cliente receberá ao final da fase? (ex: 'Documento de Estratégia de Produto', 'Protótipo Interativo em alta fidelidade', 'Aplicação MVP funcional publicada'). 4. **Valor para o Negócio:** Como essa fase especificamente contribui para o sucesso do projeto? **Regras importantes:** - **NÃO** mencione ferramentas ou tecnologias específicas (como Bubble, Xano, etc.). Mantenha o foco na estratégia e no valor. - Use uma linguagem clara, profissional e encorajadora. - Formate a resposta usando Markdown para melhor legibilidade (títulos, listas, negrito). - Ao final, **SEMPRE** conclua com um call-to-action forte, incentivando o usuário a conversar com a equipe de especialistas para um aprofundamento. Use algo como: 'Este é um plano estratégico inicial para dar vida à sua visão. O próximo passo é mergulharmos nos detalhes. Vamos agendar uma conversa para refinar esta estratégia e desenhar a solução perfeita para você?'";

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: idea,
            config: {
                systemInstruction: systemInstruction,
            }
        });

        const markdownResponse = response.text;
        if (typeof marked !== 'undefined') {
          setGeneratedPlan(marked.parse(markdownResponse));
        } else {
          // Fallback for when marked is not available - render as preformatted text
          const preformattedText = markdownResponse.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          setGeneratedPlan(`<pre>${preformattedText}</pre>`);
        }
    } catch (error) {
        console.error("Gemini API call failed:", error);
        setGeneratedPlan("<p>Ocorreu um erro ao conectar com a IA. Por favor, tente novamente mais tarde ou entre em contato diretamente.</p>");
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 md:py-32 tech-interface-bg">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white">Vamos Construir o Futuro?</h2>
        <p className="text-lg text-gray-300 mt-4 mb-8">Comece descrevendo sua ideia abaixo e veja a mágica acontecer. Nossa IA irá gerar um plano de ação inicial para o seu projeto.</p>
        
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 text-left rounded-2xl p-6 md:p-8 mb-12">
          <label htmlFor="idea-input" className="font-semibold text-white mb-2 block">Descreva sua ideia ou desafio:</label>
          <textarea 
            id="idea-input" 
            placeholder="Ex: 'Quero criar uma plataforma para conectar chefs de cozinha a clientes para eventos privados...'" 
            rows={4} 
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 mb-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E6007A]"
          ></textarea>
          <button 
            onClick={handleGeneratePlan}
            disabled={isLoading}
            className="bg-[#E6007A] text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-[#d1006f] transition-all duration-300 w-full flex items-center justify-center disabled:bg-[#a30059] disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              <span>✨ Gerar Plano de Ação com IA</span>
            )}
          </button>

          {generatedPlan && (
            <div className="mt-6 text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Plano de Ação Sugerido:</h3>
              <div 
                className="p-4 bg-black/50 rounded-lg border border-gray-700 text-gray-300 prose prose-invert prose-p:text-gray-300 prose-li:text-gray-300"
                dangerouslySetInnerHTML={{ __html: generatedPlan }}
              ></div>
              <a 
                href="https://wa.me/5511982093067?text=Ol%C3%A1!%20Vi%20o%20plano%20de%20a%C3%A7%C3%A3o%20gerado%20no%20site%20e%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition-all duration-300 w-full flex items-center justify-center"
              >
                Agendar Reunião
              </a>
            </div>
          )}
        </div>
        
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 text-left rounded-2xl p-6 md:p-8 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-3">Inicie a Conversa Estratégica</h3>
                    <p className="text-gray-400 mb-6">
                        Prefere uma abordagem mais direta? Nossa equipe está pronta para mergulhar no seu desafio.
                    </p>
                    <div className="space-y-4">
                        <a 
                            href="https://wa.me/5511982093067?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20discutir%20um%20projeto."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white font-bold py-3 px-5 rounded-lg hover:bg-green-600 transition-all duration-300 w-full flex items-center justify-center text-base"
                        >
                            <WhatsAppIcon className="w-5 h-5 mr-2" />
                            Agendar via WhatsApp
                        </a>
                        <div className="flex items-center text-gray-400 pt-2">
                            <MailIcon className="w-5 h-5 text-gray-500" />
                            <a href="mailto:contato@snipertec.com.br" className="ml-3 hover:text-[#E6007A] transition-colors">contato@snipertec.com.br</a>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3">
                    {isSubmitted ? (
                        <div className="text-center bg-gray-800/50 border border-green-500/50 p-8 rounded-xl h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-green-400">Obrigado!</h3>
                            <p className="text-gray-300 mt-2">Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="w-full">
                           <div className="space-y-4">
                                <input type="text" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E6007A]" />
                                <input type="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} required className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E6007A]" />
                                <textarea placeholder="Conte-nos sobre seu projeto ou desafio..." name="message" rows={4} value={formData.message} onChange={handleChange} required className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E6007A]"></textarea>
                            </div>
                            <button type="submit" className="mt-4 bg-[#E6007A] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#d1006f] transition-all duration-300 w-full">
                                Enviar Mensagem
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;