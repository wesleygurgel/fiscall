import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Calculator, BookOpen, Scale } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-gray-100 overflow-hidden">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-primary-600 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            O Problema que Resolvemos
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Por que existimos?
          </motion.p>
        </div>

        {/* Highlighted phrase - centered and prominent */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-primary-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-0 font-serif leading-tight">
              O sistema tributário brasileiro é complexo — e isso gera pagamentos indevidos
            </h3>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              No cenário tributário brasileiro, caracterizado por sua complexidade e constante alteração normativa, é comum que empresas e pessoas físicas acabem pagando tributos indevidamente ou em valor superior ao exigido por lei. Isso pode ocorrer por erros na apuração, desconhecimento de teses tributárias reconhecidas pelos tribunais ou até mesmo por interpretação equivocada da legislação.
            </p>

            <div className="bg-primary-50 p-6 rounded-md border-l-4 border-primary-500">
              <p className="text-gray-800 text-lg">
                Nosso escritório é especializado na <span className="font-semibold text-primary-700">identificação</span>, <span className="font-semibold text-primary-700">quantificação</span> e <span className="font-semibold text-primary-700">recuperação</span> de créditos tributários decorrentes desses pagamentos indevidos. Atuamos tanto na esfera administrativa quanto judicial, garantindo que nossos clientes possam reaver valores pagos a maior, seja por restituição ou por compensação com tributos vincendos.
              </p>
            </div>
          </motion.div>

          {/* Causes and Consequences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Causes */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-gold-100 p-3 rounded-full mr-4">
                    <AlertTriangle className="w-7 h-7 text-gold-600" />
                  </div>
                  <h4 className="text-2xl font-semibold text-primary-700">Causas</h4>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {/* Cause 1 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                      <div className="bg-primary-50 p-4 rounded-full mr-4">
                        <Calculator className="w-8 h-8 text-primary-600" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-800">Erros na apuração</h5>
                        <p className="text-gray-600 mt-1">Cálculos incorretos e falhas nos processos</p>
                      </div>
                    </div>
                  </div>

                  {/* Cause 2 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                      <div className="bg-primary-50 p-4 rounded-full mr-4">
                        <BookOpen className="w-8 h-8 text-primary-600" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-800">Desconhecimento de teses</h5>
                        <p className="text-gray-600 mt-1">Falta de atualização jurisprudencial</p>
                      </div>
                    </div>
                  </div>

                  {/* Cause 3 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                      <div className="bg-primary-50 p-4 rounded-full mr-4">
                        <Scale className="w-8 h-8 text-primary-600" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-800">Má interpretação da lei</h5>
                        <p className="text-gray-600 mt-1">Entendimento equivocado da legislação</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Consequences */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <TrendingDown className="w-7 h-7 text-primary-600" />
                  </div>
                  <h4 className="text-2xl font-semibold text-primary-700">Consequência</h4>
                </div>

                <div className="bg-primary-700 p-8 rounded-lg flex-grow flex items-center justify-center">
                  <div className="text-center">
                    <TrendingDown className="w-16 h-16 text-white mx-auto mb-4 opacity-80" />
                    <p className="text-white text-2xl font-bold">
                      Prejuízos significativos às empresas
                    </p>
                    <p className="text-primary-100 mt-4">
                      Impacto direto no fluxo de caixa e na competitividade
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
