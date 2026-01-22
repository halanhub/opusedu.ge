import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import SEO from '@/components/SEO';
import CourseCard from '@/components/CourseCard';

const GeorgianCourses = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offerings = t('courses.georgian_page.offerings', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    price: string;
    features: string[];
  }>;

  return (
    <div className="pt-20">
      <SEO
        title="Georgian Language Lessons in Tbilisi | Opus"
        description="Learn Georgian in Tbilisi with Opus. CEFR-aligned courses with university-level linguists and government-issued textbooks."
        keywords="Georgian lessons Tbilisi, Georgian courses Tbilisi, learn Georgian language, Georgian for foreigners, CEFR Georgian"
        canonical="https://opusedu.ge/courses/georgian"
      />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <BookOpen className="h-20 w-20 mx-auto mb-6 text-golden-yellow" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('courses.georgian_page.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-2 border-accent">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {t('courses.georgian_page.content')}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offerings.map((course, index) => (
              <CourseCard
                key={course.title}
                title={course.title}
                description={course.description}
                price={course.price}
                features={course.features}
                cta={t('courses.cta')}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeorgianCourses;

