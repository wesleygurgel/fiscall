import { motion } from 'framer-motion';
import { Building, Users, Award, Target, BookOpen, Scale } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        className="bg-primary-600 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-6">Sobre a FiscALL</h1>
            <p className="text-xl text-gray-100 mb-8">
              Somos especialistas em inteligência tributária, dedicados a otimizar processos fiscais e garantir conformidade legal para empresas de todos os portes.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-500">
                <h2 className="text-3xl font-bold text-primary-600 mb-6">Nossa Missão</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  Proporcionar soluções tributárias inteligentes que permitam às empresas otimizar seus recursos, garantir conformidade legal e focar em seu crescimento.
                </p>
                <p className="text-gray-700 text-lg">
                  Acreditamos que a gestão tributária eficiente é um diferencial competitivo essencial no mercado atual, e trabalhamos para que nossos clientes alcancem excelência nessa área.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Nossos Valores</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-2 rounded-full mr-4">
                    <Award className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Excelência</h3>
                    <p className="text-gray-600">Buscamos a excelência em todos os nossos serviços e processos.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-50 p-2 rounded-full mr-4">
                    <Scale className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Ética</h3>
                    <p className="text-gray-600">Atuamos com integridade e transparência em todas as nossas relações.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-50 p-2 rounded-full mr-4">
                    <BookOpen className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Conhecimento</h3>
                    <p className="text-gray-600">Investimos constantemente na atualização e aprimoramento técnico.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-50 p-2 rounded-full mr-4">
                    <Target className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Resultados</h3>
                    <p className="text-gray-600">Focamos em entregar resultados mensuráveis para nossos clientes.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Nossa Equipe</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contamos com profissionais altamente qualificados e experientes em direito tributário, contabilidade e consultoria empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Advogados Tributaristas</h3>
              <p className="text-gray-600">Especialistas em legislação fiscal com ampla experiência em consultoria e contencioso tributário.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Contadores e Auditores</h3>
              <p className="text-gray-600">Profissionais com expertise em contabilidade fiscal e auditoria para garantir conformidade e identificar oportunidades.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Consultores de Negócios</h3>
              <p className="text-gray-600">Especialistas em estratégia empresarial para alinhar a gestão tributária aos objetivos de negócio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Pronto para otimizar sua gestão tributária?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como a FiscALL pode ajudar sua empresa a economizar recursos e garantir conformidade fiscal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn btn-gold">
                Solicite uma Consultoria
              </a>
              <a href="/" className="btn btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
                Conheça Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
