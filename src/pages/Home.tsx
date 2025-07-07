import { motion } from 'framer-motion';
import { BarChart3, Shield, FileText, TrendingUp, MessageCircle } from 'lucide-react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluções completas em inteligência tributária para otimizar seus processos fiscais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500 hover:shadow-lg transition-shadow">
              <div className="bg-primary-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Consultoria Tributária</h3>
              <p className="text-gray-600 mb-4">Análise especializada para identificar oportunidades de economia fiscal e garantir conformidade legal.</p>
              <a href="#contact" className="text-primary-600 font-medium hover:text-primary-700">Saiba mais →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500 hover:shadow-lg transition-shadow">
              <div className="bg-primary-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Planejamento Fiscal</h3>
              <p className="text-gray-600 mb-4">Estratégias personalizadas para otimizar a carga tributária da sua empresa de forma legal e segura.</p>
              <a href="#contact" className="text-primary-600 font-medium hover:text-primary-700">Saiba mais →</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500 hover:shadow-lg transition-shadow">
              <div className="bg-primary-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BarChart3 className="w-7 h-7 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Análise de Dados</h3>
              <p className="text-gray-600 mb-4">Utilizamos tecnologia avançada para analisar seus dados fiscais e identificar oportunidades de melhoria.</p>
              <a href="#contact" className="text-primary-600 font-medium hover:text-primary-700">Saiba mais →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-lg shadow-md p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary-600 mb-4">Entre em Contato</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Estamos prontos para ajudar sua empresa a otimizar seus processos tributários
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Informações de Contato</h3>
                <p className="text-gray-600 mb-6">
                  Entre em contato conosco para agendar uma consultoria inicial gratuita e descobrir como podemos ajudar sua empresa.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <span className="font-medium mr-2">Email:</span> contato@fiscall.com.br
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="font-medium mr-2">Telefone:</span> +55 (11) 9999-9999
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="font-medium mr-2">Endereço:</span> Av. Paulista, 1000 - São Paulo, SP
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Solicite uma Consultoria</h3>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Fale Conosco pelo WhatsApp
                  </a>
                  <p className="text-sm text-gray-500 text-center">
                    Responderemos o mais breve possível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
