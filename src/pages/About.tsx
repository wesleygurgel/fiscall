import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export default function About() {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center gap-2 mb-6"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Info className="w-8 h-8 text-blue-500" />
        <h1 className="text-4xl font-bold text-gray-800">About Fiscall</h1>
      </motion.div>
      
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Fiscall is a modern financial management application built to help individuals and businesses
          manage their finances effectively. Our goal is to provide intuitive tools that make financial
          management accessible to everyone.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>React with TypeScript for a type-safe frontend</li>
          <li>Vite for fast development and optimized builds</li>
          <li>TailwindCSS for utility-first styling</li>
          <li>React Router DOM for seamless navigation</li>
          <li>Framer Motion for smooth animations</li>
          <li>Lucide React for beautiful icons</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}