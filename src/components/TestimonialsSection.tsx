import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Carla Mendes",
      position: "Diretora Financeira",
      company: "Grupo Orion Logística",
      quote: "A FiscALL transformou nossa realidade tributária. Recuperamos mais de R$ 800 mil em créditos que estavam esquecidos. Atendimento impecável e seguro."
    },
    {
      id: 2,
      name: "Renato Silva",
      position: "CEO",
      company: "BioPharma Brasil",
      quote: "Com a consultoria da FiscALL, além de recuperarmos valores expressivos de PIS/COFINS, passamos a ter um planejamento tributário muito mais estratégico."
    },
    {
      id: 3,
      name: "Luciana Teixeira",
      position: "Sócia Administradora",
      company: "LTX Engenharia",
      quote: "Sempre achei que pagar tributo era simples. Descobri, com a FiscALL, que eu estava pagando mais do que devia há anos. Em menos de 90 dias, eles conseguiram recuperar valores que cobriram nosso fluxo de caixa de um trimestre."
    }
  ];

  // State for current slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Navigation functions
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-primary-600 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Depoimentos e Resultados
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            O que nossos clientes dizem sobre nossos serviços
          </motion.p>
        </div>

        {/* Testimonial Slideshow */}
        <div className="max-w-5xl mx-auto relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 z-10">
            <button 
              onClick={prevSlide}
              className="bg-white p-3 rounded-full shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary-600" />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 z-10">
            <button 
              onClick={nextSlide}
              className="bg-white p-3 rounded-full shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary-600" />
            </button>
          </div>

          {/* Slideshow */}
          <div className="overflow-hidden relative h-[400px] bg-primary-50 rounded-xl shadow-lg">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 p-8 flex items-center justify-center"
              >
                <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl relative">
                  {/* Quote icon */}
                  <div className="absolute -top-6 left-8 bg-primary-600 p-3 rounded-full">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-100 shadow-md">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].name)}&background=1a365d&color=fff&size=128`}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <blockquote className="text-gray-700 italic mb-6 text-lg">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>

                      <div className="flex flex-col">
                        <span className="font-bold text-primary-700 text-lg">{testimonials[currentIndex].name}</span>
                        <div className="flex items-center text-gray-600">
                          <span>{testimonials[currentIndex].position}</span>
                          <span className="mx-2">|</span>
                          <span>{testimonials[currentIndex].company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-primary-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
