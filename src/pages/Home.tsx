import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import RecoverableTaxesSection from '../components/RecoverableTaxesSection';
import BenefitsSection from '../components/BenefitsSection';
import ComplementaryServicesSection from '../components/ComplementaryServicesSection';
import DifferentialsSection from '../components/DifferentialsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Recoverable Taxes Section */}
      <RecoverableTaxesSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Complementary Services Section */}
      <ComplementaryServicesSection />

      {/* Differentials Section */}
      <DifferentialsSection />

      {/* Testimonials Section */}
      {/*<TestimonialsSection />*/}

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
