import { motion } from 'framer-motion';
import { FileCheck, BarChart3, TrendingUp, DollarSign, ShieldCheck } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-primary-600 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Benefícios ao Cliente
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Vantagens de trabalhar com nossa equipe especializada
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Benefits list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary-700 mb-6">
                  Nossos diferenciais
                </h3>
                
                <ul className="space-y-6">
                  {/* Benefit 1 */}
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                      <FileCheck className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Recuperação financeira concreta</h4>
                      <p className="text-gray-600">
                        Resultados mensuráveis com impacto direto no fluxo de caixa da sua empresa.
                      </p>
                    </div>
                  </motion.li>
                  
                  {/* Benefit 2 */}
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                      <FileCheck className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Regularização fiscal</h4>
                      <p className="text-gray-600">
                        Adequação completa às normas tributárias vigentes, minimizando riscos de autuações.
                      </p>
                    </div>
                  </motion.li>
                  
                  {/* Benefit 3 */}
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                      <FileCheck className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Prevenção de novos erros</h4>
                      <p className="text-gray-600">
                        Implementação de processos e controles que evitam pagamentos indevidos futuros.
                      </p>
                    </div>
                  </motion.li>
                  
                  {/* Benefit 4 */}
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                      <FileCheck className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Atuação segura com base em jurisprudência</h4>
                      <p className="text-gray-600">
                        Estratégias fundamentadas em decisões judiciais consolidadas, garantindo maior segurança jurídica.
                      </p>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
            
            {/* Right column - Chart visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary-700 mb-6">
                  Valores recuperados
                </h3>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    Exemplos de valores recuperados por setor (em milhões de R$):
                  </p>
                  
                  {/* Bar chart visualization */}
                  <div className="space-y-4">
                    {/* Industry 1 */}
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Indústria</span>
                        <span className="text-sm font-medium text-primary-600">R$ 8.5M</span>
                      </div>
                      <motion.div 
                        className="h-4 bg-gray-200 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.4 }}
                      >
                        <motion.div 
                          className="h-4 bg-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        ></motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Industry 2 */}
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Comércio</span>
                        <span className="text-sm font-medium text-primary-600">R$ 6.2M</span>
                      </div>
                      <motion.div 
                        className="h-4 bg-gray-200 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                      >
                        <motion.div 
                          className="h-4 bg-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '62%' }}
                          transition={{ duration: 1.5, delay: 0.6 }}
                        ></motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Industry 3 */}
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Serviços</span>
                        <span className="text-sm font-medium text-primary-600">R$ 4.8M</span>
                      </div>
                      <motion.div 
                        className="h-4 bg-gray-200 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.6 }}
                      >
                        <motion.div 
                          className="h-4 bg-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '48%' }}
                          transition={{ duration: 1.5, delay: 0.7 }}
                        ></motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Industry 4 */}
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Agronegócio</span>
                        <span className="text-sm font-medium text-primary-600">R$ 7.3M</span>
                      </div>
                      <motion.div 
                        className="h-4 bg-gray-200 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                      >
                        <motion.div 
                          className="h-4 bg-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '73%' }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                        ></motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-5 h-5 text-primary-600 mr-2" />
                      <span className="text-lg font-bold text-primary-700">+30%</span>
                    </div>
                    <p className="text-sm text-gray-600">Aumento médio no fluxo de caixa</p>
                  </div>
                  
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-5 h-5 text-primary-600 mr-2" />
                      <span className="text-lg font-bold text-primary-700">R$ 26.8M</span>
                    </div>
                    <p className="text-sm text-gray-600">Total recuperado em 2024</p>
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