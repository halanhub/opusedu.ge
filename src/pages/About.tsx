import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Heart, Users } from 'lucide-react';
import classroomBg from '@/assets/classroom-2.jpg';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Globe,
      title: t('about.value1_title'),
      description: t('about.value1'),
    },
    {
      icon: Heart,
      title: t('about.value2_title'),
      description: t('about.value2'),
    },
    {
      icon: Users,
      title: t('about.value3_title'),
      description: t('about.value3'),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${classroomBg})` }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('about.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
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
              <CardHeader>
                <CardTitle className="text-3xl text-primary text-center">
                  {t('about.philosophy_title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  {t('about.philosophy')}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl text-primary">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
