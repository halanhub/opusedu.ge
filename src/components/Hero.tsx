import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import classroomBg from '@/assets/classroom-1.jpg';

const Hero = () => {
  const { t } = useTranslation();

  const badges = [
    { icon: CheckCircle2, label: t('badges.cefr') },
    { icon: CheckCircle2, label: t('badges.teachers') },
    { icon: CheckCircle2, label: t('badges.groups') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${classroomBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-ocean-teal/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 text-white/90"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link to="/contact">
              <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                {t('hero.cta_primary')}
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                {t('hero.cta_secondary')}
              </Button>
            </Link>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 justify-items-center w-full max-w-2xl mx-auto"
          >
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 min-w-[160px] h-[40px]"
              >
                <badge.icon className="h-5 w-5 text-golden-yellow flex-shrink-0" />
                <span className="text-xs font-medium text-center leading-tight flex-1">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
