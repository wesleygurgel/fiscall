import { ReactNode } from 'react';
import { MessageCircle, Linkedin, Instagram } from 'lucide-react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-serif">Câmara e Melo Advogados Associados</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Inteligência Tributária para otimizar seus processos fiscais e garantir conformidade legal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-sans">Contato</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                contato@cm.com.br<br />
                +55 (84) 98861-4565<br />
                Av. Prudente de Morais, 1000 - Natal, RN
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-sans">Siga-nos</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/wesleygurgel/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-700 hover:bg-primary-600 text-white p-2 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-primary-700 hover:bg-primary-600 text-white p-2 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-700 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-300 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Câmara e Melo Advogados Associados - Inteligência Tributária. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5584988614565" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
