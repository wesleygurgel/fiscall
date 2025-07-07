import { ReactNode } from 'react';
import { MessageCircle } from 'lucide-react';
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
      <footer className="bg-primary-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 font-serif">FiscALL</h3>
              <p className="text-sm text-gray-200">
                Inteligência Tributária para otimizar seus processos fiscais e garantir conformidade legal.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-sans">Contato</h3>
              <p className="text-sm text-gray-200">
                contato@fiscall.com.br<br />
                +55 (11) 9999-9999
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-sans">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gold-300">LinkedIn</a>
                <a href="#" className="text-white hover:text-gold-300">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-500 mt-8 pt-6">
            <p className="text-center text-sm text-gray-300">
              &copy; {new Date().getFullYear()} FiscALL - Inteligência Tributária. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
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
