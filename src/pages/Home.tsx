import { motion } from 'framer-motion';
import { Home as HomeIcon } from 'lucide-react';

export default function Home() {
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
        <HomeIcon className="w-8 h-8 text-blue-500" />
        <h1 className="text-4xl font-bold text-gray-800">Fiscall</h1>
      </motion.div>
      
      <motion.p 
        className="text-xl text-gray-600 text-center max-w-md mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Welcome to Fiscall - Your financial management solution
      </motion.p>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Easy to Use</h2>
          <p className="text-gray-600">Intuitive interface designed for the best user experience.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Powerful Features</h2>
          <p className="text-gray-600">Advanced tools to manage your finances effectively.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}