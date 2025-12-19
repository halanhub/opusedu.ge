import Hero from '@/components/Hero';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CourseCard from '@/components/CourseCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const Home = () => {
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
      ],
      cta: t('courses.cta'),
    },
  ];

  return (
    <>
      <SEO
        title="English & Georgian Lessons in Tbilisi | Opus • ოპუსი | Language School"
        description="English and Georgian lessons in Tbilisi with CEFR-aligned courses, native teachers, and small groups. Oxford University Press materials. Group English lessons for teens (200₾/month) and Georgian lessons for foreigners (250₾/month). Located at 21 Merab Kostava St, Tbilisi."
        keywords="English lessons Tbilisi, Georgian lessons Tbilisi, English and Georgian lessons in Tbilisi, English learning Tbilisi, Georgian language course Tbilisi, CEFR English course, English school Tbilisi"
        canonical="https://opusedu.ge/"
      />
      <Hero />
      
      {/* Course Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t('courses.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses" aria-label="View all English and Georgian courses and lessons">
              <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary hover:text-white min-h-[44px]">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
