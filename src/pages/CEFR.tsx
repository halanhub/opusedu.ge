import { motion } from 'framer-motion';
import CEFRLevels from '@/components/CEFRLevels';
import { Award } from 'lucide-react';

const CEFR = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-ocean-teal to-aqua-cyan text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Award className="h-20 w-20 mx-auto mb-6 text-golden-yellow" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Understanding CEFR
            </h1>
            <p className="text-xl text-white">
              The global standard for language proficiency assessment
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEFR Component */}
      <CEFRLevels />
    </div>
  );
};

export default CEFR;
