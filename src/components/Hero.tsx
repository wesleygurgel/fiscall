import { motion } from 'framer-motion';
import { Scale, Shield, FileText, TrendingUp, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-gold-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-primary-950/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTE4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAxOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMC0xOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      </div>

      <div className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-gold-300 mb-6 backdrop-blur-sm border border-white/10"
              >
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Soluções jurídicas especializadas</span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Recuperação <span className="text-gold-400">Tributária</span> com Inteligência Jurídica
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ajudamos sua empresa a recuperar créditos tributários e reduzir a carga fiscal de forma legal e segura, maximizando seus resultados.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a 
                  href="#contact" 
                  className="px-8 py-3.5 rounded-lg bg-gold-500 text-white font-medium hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-gold-500/20 flex items-center justify-center"
                >
                  Solicitar Consultoria
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="#solution" 
                  className="px-8 py-3.5 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Nossas Soluções
                </a>
              </motion.div>

              <motion.div
                className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center text-gold-400 mb-2">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <span className="font-bold text-2xl">98%</span>
                  </div>
                  <p className="text-sm text-gray-300">Taxa de sucesso</p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center text-gold-400 mb-2">
                    <FileText className="w-5 h-5 mr-2" />
                    <span className="font-bold text-2xl">500+</span>
                  </div>
                  <p className="text-sm text-gray-300">Processos concluídos</p>
                </div>
                <div className="flex flex-col items-center lg:items-start sm:col-span-1 col-span-2">
                  <div className="flex items-center text-gold-400 mb-2">
                    <Scale className="w-5 h-5 mr-2" />
                    <span className="font-bold text-2xl">15+</span>
                  </div>
                  <p className="text-sm text-gray-300">Anos de experiência</p>
                </div>
              </motion.div>
            </div>

            {/* Right column - Image/Illustration */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                {/* Main image container */}
                <div className="relative z-10 bg-gradient-to-br from-primary-800 to-primary-950 p-2 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent opacity-30 rounded-2xl"></div>

                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] w-full max-w-lg">
                    <img 
                      src="/src/assets/images/legal-team.jpg" 
                      alt="Equipe de especialistas FiscALL" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1585468274952-66591eb14165?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                      }}
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>

                    {/* Content over image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center mb-3">
                        <Scale className="w-6 h-6 text-gold-400 mr-2" />
                        <h3 className="text-xl font-bold text-white">Equipe Especializada</h3>
                      </div>
                      <p className="text-gray-200 text-sm">
                        Advogados com expertise em direito tributário e recuperação fiscal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
