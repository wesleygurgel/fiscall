import { motion } from 'framer-motion';
import { GraduationCap, Brain, Scale, BarChart3 } from 'lucide-react';

export default function DifferentialsSection() {
  return (
    <section id="differentials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-primary-600 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Diferenciais
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            O que nos torna a escolha certa para sua empresa
          </motion.p>
        </div>

        {/* Differentials Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Differential 1 - Specialization */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <GraduationCap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 text-center mb-3">Especialização</h3>
              <p className="text-gray-600 text-center">
                Exclusiva em direito tributário
              </p>
            </motion.div>

            {/* Differential 2 - Technical Team */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 text-center mb-3">Equipe técnica</h3>
              <p className="text-gray-600 text-center">
                Atualizada e altamente qualificada
              </p>
            </motion.div>

            {/* Differential 3 - Hybrid Approach */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Scale className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 text-center mb-3">Atuação híbrida</h3>
              <p className="text-gray-600 text-center">
                Administrativa e judicial
              </p>
            </motion.div>

            {/* Differential 4 - Transparency */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 text-center mb-3">Transparência</h3>
              <p className="text-gray-600 text-center">
                Compromisso com resultado
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}