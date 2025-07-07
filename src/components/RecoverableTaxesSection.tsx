import { motion } from 'framer-motion';
import { DollarSign, Receipt, Building, Scale } from 'lucide-react';

export default function RecoverableTaxesSection() {
  return (
    <section id="recoverable-taxes" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-primary-600 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tributos Comuns Recuperáveis
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Principais tributos que podem ser recuperados
          </motion.p>
        </div>

        {/* Grid of tax cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* PIS/COFINS Card */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 text-center mb-3">PIS/COFINS</h3>
              <p className="text-gray-600 text-center">
                Com base indevida (ICMS/ISS)
              </p>
            </motion.div>

            {/* INSS Card */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Receipt className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 text-center mb-3">INSS</h3>
              <p className="text-gray-600 text-center">
                Sobre verbas não remuneratórias
              </p>
            </motion.div>

            {/* ICMS Card */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Building className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 text-center mb-3">ICMS</h3>
              <p className="text-gray-600 text-center">
                Duplicado ou fora de regime
              </p>
            </motion.div>

            {/* Taxas Card */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Scale className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 text-center mb-3">Taxas</h3>
              <p className="text-gray-600 text-center">
                Sem fato gerador
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
