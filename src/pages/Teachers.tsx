import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TeacherCard from '@/components/TeacherCard';
import { GraduationCap } from 'lucide-react';
import anaImage from '@/assets/ana-circle.jpg';
import henrikImage from '@/assets/henrik-circle.jpg';

const Teachers = () => {
  const { t } = useTranslation();

  const teachers = [
    {
      name: t('teachers.ana.name'),
      role: t('teachers.ana.role'),
      education: t('teachers.ana.education'),
      experience: t('teachers.ana.experience'),
      quote: t('teachers.ana.quote'),
      image: anaImage,
    },
    {
      name: t('teachers.henrik.name'),
      role: t('teachers.henrik.role'),
      education: t('teachers.henrik.education'),
      experience: t('teachers.henrik.experience'),
      quote: t('teachers.henrik.quote'),
      image: henrikImage,
    },
  ];

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
            <GraduationCap className="h-20 w-20 mx-auto mb-6 text-golden-yellow" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('teachers.title')}
            </h1>
            <p className="text-xl text-white">
              Experienced educators who are lifelong learners themselves
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-y-28 gap-x-8 max-w-6xl mx-auto">
            {teachers.map((teacher, index) => (
              <TeacherCard key={index} {...teacher} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
