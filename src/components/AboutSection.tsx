import { motion } from 'framer-motion';
import { Scale, Award, Target, BookOpen, Building, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-primary-600 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Quem Somos
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - History */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-500 shadow-md">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 font-serif">Breve histórico do escritório</h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Formamos um escritório de advocacia <span className="font-semibold text-primary-700">especializado em Direito Tributário</span>, com atuação focada na 
                <span className="text-gold-600 font-medium"> recuperação de tributos pagos indevidamente</span> por empresas de diversos portes e setores econômicos.
              </p>

              <div className="bg-white bg-opacity-50 p-4 rounded-md mb-6 border-l-2 border-gold-400">
                <p className="text-gray-800">
                  Nosso propósito é garantir que os contribuintes cumpram suas obrigações fiscais de forma <span className="text-primary-600 font-medium">justa e eficiente</span>, evitando pagamentos excessivos e assegurando o pleno aproveitamento dos direitos creditórios previstos na legislação.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Com uma <span className="font-semibold">equipe altamente qualificada</span> e atualizada quanto às constantes mudanças da legislação e jurisprudência tributária, atuamos com <span className="text-primary-700 font-medium">excelência técnica</span>, <span className="text-primary-700 font-medium">ética</span> e <span className="text-primary-700 font-medium">estratégia</span> para identificar oportunidades legais de recuperação de créditos tributários, tanto na <span className="underline decoration-primary-400">esfera administrativa</span> quanto <span className="underline decoration-gold-400">judicial</span>.
              </p>
            </div>
          </motion.div>

          {/* Right column - Image/Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

              {/* Main image container */}
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] w-full max-w-lg shadow-2xl hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Escritório FiscALL" 
                    className="w-full h-full object-cover object-center rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Purpose, Values, Mission */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Purpose */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-primary-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Propósito</h3>
            <p className="text-gray-600">
              Atuar com justiça fiscal, eficiência técnica e segurança jurídica
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gold-500 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-gold-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-gold-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Valores</h3>
            <p className="text-gray-600">
              Ética, excelência, transparência, estratégia
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-primary-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Scale className="w-7 h-7 text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Missão</h3>
            <p className="text-gray-600">
              Garantir que o contribuinte cumpra suas obrigações sem pagar além do devido
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 mb-6">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Nossa equipe especializada</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-start">
              <div className="bg-primary-50 p-2 rounded-full mr-4">
                <Building className="w-6 h-6 text-primary-500" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Advogados Tributaristas</h3>
                <p className="text-gray-600">Especialistas em legislação fiscal com ampla experiência em consultoria e contencioso tributário.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-50 p-2 rounded-full mr-4">
                <BookOpen className="w-6 h-6 text-primary-500" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultores Fiscais</h3>
                <p className="text-gray-600">Profissionais com expertise em planejamento tributário e identificação de oportunidades de economia fiscal.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-50 p-2 rounded-full mr-4">
                <Target className="w-6 h-6 text-primary-500" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Analistas de Processos</h3>
                <p className="text-gray-600">Especialistas em análise de documentos fiscais e processos administrativos tributários.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
