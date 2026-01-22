import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const CEFRLevels = () => {
  const { t } = useTranslation();
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

  const levels = ['A1', 'A2', 'A2+', 'B1', 'B2', 'C1', 'C2'];
  
  const levelColors = {
    A1: 'from-[hsl(30,68%,41%)] to-[hsl(45,89%,52%)]',
    A2: 'from-[hsl(45,89%,52%)] to-[hsl(55,85%,60%)]',
    'A2+': 'from-[hsl(55,85%,60%)] to-[hsl(161,32%,79%)]',
    B1: 'from-[hsl(161,32%,79%)] to-[hsl(180,78%,31%)]',
    B2: 'from-[hsl(180,78%,31%)] to-[hsl(186,79%,25%)]',
    C1: 'from-[hsl(186,79%,25%)] to-[hsl(171,28%,27%)]',
    C2: 'from-[hsl(171,28%,27%)] to-[hsl(197,28%,15%)]',
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#E0EEEB' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          
          {/* CEFR Information Accordion */}
          <div className="max-w-4xl mx-auto mb-12 text-left">
            <Card className="border-2 border-accent bg-white">
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-is-cefr" className="border-b border-accent px-6">
                    <AccordionTrigger className="text-2xl text-primary hover:no-underline py-6">
                      {t('cefr.what_is_cefr')}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line pb-4">
                        {t('cefr.what_is_cefr_content')}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="how-does-cefr-work" className="border-b-0 px-6">
                    <AccordionTrigger className="text-2xl text-primary hover:no-underline py-6">
                      {t('cefr.how_does_cefr_work')}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line pb-4">
                        {t('cefr.how_does_cefr_work_content')}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Interactive Level Bar */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-2 mb-8">
            {levels.map((level, index) => (
              <motion.button
                key={level}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveLevel(activeLevel === level ? null : level)}
                aria-label={`${level} - ${t(`cefr.levels.${level}.name`)}. Click to ${activeLevel === level ? 'close' : 'view'} details`}
                aria-expanded={activeLevel === level}
                className={`flex-1 py-6 px-4 rounded-lg font-bold text-white transition-all cursor-pointer min-h-[44px] ${
                  activeLevel === level ? 'scale-105 shadow-lg' : 'hover:scale-102'
                } bg-gradient-to-br ${levelColors[level as keyof typeof levelColors]}`}
              >
                <div className="text-2xl mb-1">{level}</div>
                <div className="text-sm opacity-90">{t(`cefr.levels.${level}.name`)}</div>
              </motion.button>
            ))}
          </div>

          {/* Level Description Card */}
          {activeLevel && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 border-accent">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {activeLevel} - {t(`cefr.levels.${activeLevel}.name`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    {t(`cefr.levels.${activeLevel}.desc`)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="bg-primary text-white">
            <CardHeader>
              <CardTitle className="text-2xl">{t('cefr.skills_title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {['listening', 'speaking', 'reading', 'writing', 'mediation'].map((skill) => (
                  <div key={skill} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="font-semibold">{t(`cefr.skills.${skill}`)}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/95 text-center">
                {t('cefr.parents_note')}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CEFRLevels;
