import { motion } from 'framer-motion';
import { useState } from 'react';
import { Shield, Search, FileCheck, DollarSign, BookOpen, ChevronDown, ChevronUp, MessageCircle, Lightbulb } from 'lucide-react';

export default function ComplementaryServicesSection() {
  // State to track which accordion item is open
  const [openItem, setOpenItem] = useState<number | null>(null);

  // Toggle accordion item
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Service data
  const services = [
    {
      title: "Planejamento tributário preventivo",
      icon: Shield,
      description: "Atuamos proativamente na análise das operações e regimes fiscais de nossos clientes. Nosso objetivo é identificar oportunidades de otimização tributária, mitigar riscos e garantir a conformidade com a legislação vigente, evitando pagamentos indevidos e autuações futuras. Isso inclui a revisão de processos, a análise de enquadramentos fiscais e a proposição de estratégias que resultem em economia e segurança jurídica."
    },
    {
      title: "Auditoria fiscal contínua",
      icon: Search,
      description: "Além do levantamento retroativo para recuperação de créditos, oferecemos um serviço de auditoria fiscal contínua. Por meio de um acompanhamento detalhado dos documentos fiscais e contábeis, auxiliamos na identificação precoce de inconsistências, erros ou oportunidades, assegurando que a escrituração fiscal esteja sempre alinhada com as melhores práticas e a legislação."
    },
    {
      title: "Otimização de processos internos",
      icon: FileCheck,
      description: "Muitas vezes, os pagamentos indevidos ou a ineficiência fiscal são reflexo de processos internos desatualizados ou inadequados. Oferecemos suporte na revisão e otimização desses processos, desde a emissão de notas fiscais até a apuração de impostos, visando aprimorar a gestão fiscal e reduzir o risco de erros operacionais."
    },
    {
      title: "Assessoria em compensação tributária",
      icon: DollarSign,
      description: "Em casos de créditos a serem compensados, oferecemos assessoria completa para a correta aplicação e gestão dessas compensações, garantindo que os valores recuperados sejam efetivamente utilizados para abater tributos vincendos, de acordo com as normas da Receita Federal e demais órgãos competentes."
    },
    {
      title: "Treinamentos para equipe contábil",
      icon: BookOpen,
      description: "Acreditamos que o conhecimento é uma ferramenta poderosa. Por isso, podemos oferecer sessões de treinamento e capacitação para as equipes financeiras e contábeis de nossos clientes, abordando temas relevantes da legislação tributária e as melhores práticas para a gestão fiscal."
    }
  ];

  return (
    <section id="complementary-services" className="py-20 bg-white overflow-hidden">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-primary-600 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Serviços Complementares
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Soluções estratégicas para uma gestão tributária completa
          </motion.p>
        </div>

        {/* Introduction */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-primary-50 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Enquanto a Recuperação de Tributos Pagos Indevidamente é o nosso produto central e onde reside nossa expertise principal, compreendemos que a saúde fiscal de uma empresa vai além da mera restituição ou compensação de valores.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Por isso, nosso escritório oferece uma gama de serviços complementares, estrategicamente desenvolvidos para proporcionar uma gestão tributária mais robusta, preventiva e eficiente para nossos clientes. Estes serviços são desenhados para atuar em sinergia com a recuperação de créditos, garantindo que as empresas não apenas recuperem o que lhes é devido, mas também evitem futuras ocorrências de pagamentos indevidos e otimizem sua carga tributária de forma contínua e legal.
            </p>
          </div>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = openItem === index;

              return (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    className={`w-full flex items-center justify-between p-5 text-left ${isOpen ? 'bg-primary-50' : 'bg-white'}`}
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center">
                      <div className={`p-3 rounded-full mr-4 ${isOpen ? 'bg-primary-100' : 'bg-gray-100'}`}>
                        <Icon className={`w-6 h-6 ${isOpen ? 'text-primary-600' : 'text-gray-600'}`} />
                      </div>
                      <h3 className={`text-xl font-bold ${isOpen ? 'text-primary-700' : 'text-gray-800'}`}>
                        {service.title}
                      </h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>

                  {isOpen && (
                    <motion.div
                      className="p-5 bg-white border-t border-gray-200"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Highlighted phrase */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-primary-700 p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-gold-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-serif">
              "Mais que um escritório — somos parceiros estratégicos na saúde fiscal do seu negócio."
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
