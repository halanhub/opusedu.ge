import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CEFRLevels from '@/components/CEFRLevels';
import { Award } from 'lucide-react';

const CEFR = () => {
  const { t } = useTranslation();
  
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Award className="h-20 w-20 mx-auto mb-6 text-golden-yellow" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('cefr.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CEFR Component */}
      <CEFRLevels />
    </div>
  );
};

export default CEFR;
