import { motion } from 'framer-motion';
import { Search, Scale, FileCheck, BarChart3, ArrowRight, MessageCircle } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 bg-white overflow-hidden">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-primary-600 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nossa Solução
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Como atuamos
          </motion.p>
        </div>

        {/* Timeline/Infographic */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Connecting line */}
            <motion.div 
              className="absolute top-1/2 left-0 right-0 h-1 bg-primary-200 -translate-y-1/2 z-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>

            {/* Steps */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-white p-3 rounded-full border-4 border-primary-500 shadow-lg mb-4">
                  <Search className="w-8 h-8 text-primary-600" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                  <h3 className="text-xl font-bold text-primary-700 mb-3">Diagnóstico Fiscal</h3>
                  <p className="text-gray-600">
                    Realizamos uma análise minuciosa da documentação contábil e fiscal do cliente para identificar possíveis recolhimentos indevidos.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-white p-3 rounded-full border-4 border-primary-500 shadow-lg mb-4">
                  <Scale className="w-8 h-8 text-primary-600" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                  <h3 className="text-xl font-bold text-primary-700 mb-3">Viabilidade Jurídico-Contábil</h3>
                  <p className="text-gray-600">
                    Avaliamos as chances de êxito com base na legislação vigente e nos precedentes judiciais.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="bg-white p-3 rounded-full border-4 border-primary-500 shadow-lg mb-4">
                  <FileCheck className="w-8 h-8 text-primary-600" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                  <h3 className="text-xl font-bold text-primary-700 mb-3">Pedido Administrativo ou Judicial</h3>
                  <p className="text-gray-600">
                    Ingressamos com pedido de restituição ou compensação administrativa, ou, quando necessário, com ação judicial.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="bg-white p-3 rounded-full border-4 border-primary-500 shadow-lg mb-4">
                  <BarChart3 className="w-8 h-8 text-primary-600" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                  <h3 className="text-xl font-bold text-primary-700 mb-3">Acompanhamento Integral</h3>
                  <p className="text-gray-600">
                    Monitoramos todas as etapas do processo até a efetiva recuperação dos valores.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center bg-primary-50 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-primary-700 mb-4">
            Quer saber quanto sua empresa pode recuperar?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Fale com nossos especialistas e descubra como podemos ajudar sua empresa a recuperar valores pagos indevidamente.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-md"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale com nossos especialistas
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
