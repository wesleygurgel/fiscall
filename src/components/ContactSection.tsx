import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Instagram, ExternalLink, MessageCircle } from 'lucide-react';
import qrCodeImage from '../assets/images/frame.png';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-primary-600 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contato Final
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Estamos prontos para ajudar sua empresa
          </motion.p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left column - Contact Information */}
                <div>
                  <h3 className="text-2xl font-bold text-primary-700 mb-6">
                    Informações de Contato
                  </h3>

                  <ul className="space-y-6">
                    {/* Company Name */}
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <MessageCircle className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">FiscALL</h4>
                        <p className="text-gray-600">
                          Inteligência Tributária
                        </p>
                      </div>
                    </motion.li>

                    {/* Phone */}
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <Phone className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Telefone</h4>
                        <p className="text-gray-600">
                          +55 (84) 98861-4565
                        </p>
                      </div>
                    </motion.li>

                    {/* Email */}
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <Mail className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">E-mail</h4>
                        <p className="text-gray-600">
                          contato@fiscall.com.br
                        </p>
                      </div>
                    </motion.li>

                    {/* Social Media */}
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <ExternalLink className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Redes Sociais</h4>
                        <div className="flex space-x-4 mt-2">
                          <a 
                            href="https://www.linkedin.com/in/wesleygurgel/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a 
                            href="#" 
                            className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors"
                            aria-label="Instagram"
                          >
                            <Instagram className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </motion.li>
                  </ul>
                </div>

                {/* Right column - QR Code and CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-6">
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-semibold text-gray-800">WhatsApp</h4>
                      <p className="text-sm text-gray-600">Escaneie o QR Code</p>
                    </div>

                    {/* QR Code Image */}
                    <div className="bg-white p-2 rounded-lg border border-gray-200 w-48 h-48 mx-auto">
                      {/* Fallback to a placeholder if the QR code image doesn't exist */}
                      <img 
                        src={qrCodeImage} 
                        alt="QR Code para WhatsApp" 
                        className="w-full h-full"
                        onError={(e) => {
                          // Create a simple QR code placeholder with text
                          const canvas = document.createElement('canvas');
                          canvas.width = 200;
                          canvas.height = 200;
                          const ctx = canvas.getContext('2d');
                          if (ctx) {
                            ctx.fillStyle = '#ffffff';
                            ctx.fillRect(0, 0, 200, 200);
                            ctx.fillStyle = '#1a365d';
                            ctx.font = '14px Arial';
                            ctx.textAlign = 'center';
                            ctx.fillText('WhatsApp QR Code', 100, 100);
                          }
                          e.currentTarget.src = canvas.toDataURL();
                        }}
                      />
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <a 
                      href="https://wa.me/5584988614565" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-500/20 whitespace-nowrap"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Solicite uma Análise Tributária Gratuita
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="bg-primary-700 p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Pronto para recuperar seus créditos tributários?
              </h3>
              <p className="text-primary-100 mb-4">
                Nossa equipe especializada está pronta para ajudar sua empresa.
              </p>
              <a 
                href="https://wa.me/5584988614565" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gold-500 text-white font-medium rounded-lg hover:bg-gold-600 transition-colors shadow-md whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicite uma Análise Tributária Gratuita
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
