import React from 'react';

const FloatingWhatsApp: React.FC = () => {
    const whatsappLink = "https://wa.me/5511982093067?text=Ol%C3%A1!%20Visitei%20o%20site%20da%20SNIPERTEC%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale Conosco"
            className="fixed bottom-6 right-6 z-40 group"
        >
            <div className="relative flex items-center">
                 <span className="absolute right-full mr-4 hidden lg:block bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-2 whitespace-nowrap">
                    Fale Conosco!
                </span>
                <div
                    className="bg-[#E6007A] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 hover:bg-[#d1006f]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-white">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.75.45 3.49 1.32 5.05L2 22l5.25-1.38c1.52.79 3.2 1.23 4.79 1.23h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM17.5 15.3c-.28-.14-1.65-.81-1.91-.91s-.45-.14-.64.14-.72.91-.88 1.09-.32.2-.59.07c-.27-.13-1.18-.43-2.25-1.38s-1.61-2.14-1.88-2.52-.02-.45.12-.59c.13-.13.28-.34.42-.51s.19-.28.28-.47.05-.35-.02-.49c-.08-.14-.64-1.52-.87-2.08s-.48-.47-.65-.48-.35-.01-.52-.01-.45.07-.68.35-.91.88-.91 2.13 1.13 2.74 1.3 2.94.91 3.51 3.14 5.25 1.58.38 2.1.52.92.17 1.48.11.83-.34.95-.66.12-.33.08-.61-.05-.14-.28-.27z"/>
                    </svg>
                </div>
            </div>
        </a>
    );
};

export default FloatingWhatsApp;