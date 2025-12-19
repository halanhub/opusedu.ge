import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CourseCard from '@/components/CourseCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import SEO from '@/components/SEO';

const Courses = () => {
  const { t } = useTranslation();

  const courses = [
    {
      title: t('courses.english_title'),
      description: t('courses.english_desc'),
      price: t('courses.english_price'),
      features: [
        t('courses.features.skills'),
        t('courses.features.projects'),
        t('courses.features.authentic'),
        t('courses.features.global'),
        'Life Vision (Oxford University Press)',
        'Dual-teacher model (native + local)',
        'CEFR-aligned curriculum',
      ],
      cta: t('courses.cta'),
    },
    {
      title: t('courses.georgian_title'),
      description: t('courses.georgian_desc'),
      price: t('courses.georgian_price'),
      features: [
        t('courses.features.skills'),
        t('courses.features.projects'),
        t('courses.features.authentic'),
        t('courses.features.global'),
        'Communicative approach',
        'Native and international teachers',
        'Cultural immersion activities',
      ],
      cta: t('courses.cta'),
    },
  ];

  return (
    <div className="pt-20">
      <SEO
        title="English & Georgian Language Lessons & Courses in Tbilisi | Opus"
        description="Explore our English and Georgian lessons in Tbilisi. CEFR-aligned courses with native teachers, small groups, and Oxford University Press materials. Group English lessons for teens and Georgian lessons for foreigners."
        keywords="English lessons Tbilisi, Georgian lessons Tbilisi, English courses Tbilisi, Georgian courses Tbilisi, language lessons Tbilisi, CEFR courses Tbilisi"
        canonical="https://opusedu.ge/courses"
      />
      {/* Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <BookOpen className="h-20 w-20 mx-auto mb-6 text-golden-yellow" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('courses.title')}
            </h1>
            <p className="text-xl text-white">
              English and Georgian lessons in Tbilisi - CEFR-aligned courses with global standards and local warmth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Want to learn more about our CEFR-aligned approach?
            </p>
            <Link to="/cefr" aria-label="Learn more about CEFR levels and language proficiency">
              <Button size="lg" variant="outline" className="border-2 border-accent hover:bg-accent hover:text-white min-h-[44px]">
                Explore CEFR Levels
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
