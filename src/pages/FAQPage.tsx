import { motion } from 'framer-motion';
import FAQ from '@/components/FAQ';
import { HelpCircle } from 'lucide-react';

const FAQPage = () => {
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
            <HelpCircle className="h-20 w-20 mx-auto mb-6 text-golden-yellow" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white">
              Find answers to common questions about our courses
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </div>
  );
};

export default FAQPage;
