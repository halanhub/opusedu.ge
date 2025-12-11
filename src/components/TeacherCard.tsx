import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TeacherCardProps {
  name: string;
  role: string;
  education: string;
  experience: string;
  quote: string;
  image: string;
  index?: number;
}

const TeacherCard = ({ name, role, education, experience, quote, image, index = 0 }: TeacherCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="relative h-full overflow-visible hover:shadow-xl transition-shadow duration-300 pt-24">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2">
          <div className="relative group">
            <img
              src={image}
              alt={name}
              loading="lazy"
              decoding="async"
              className="w-40 h-40 rounded-full object-cover shadow-xl ring-4 ring-background transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        
        <CardHeader className="text-center pt-4">
          <CardTitle className="text-2xl text-primary">{name}</CardTitle>
          <p className="text-sm text-accent font-semibold">{role}</p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-primary mb-2">Education</h4>
            <p className="text-sm text-muted-foreground">{education}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-primary mb-2">Experience</h4>
            <p className="text-sm text-muted-foreground">{experience}</p>
          </div>
          
          <div className="pt-4 border-t border-border">
            <Quote className="h-6 w-6 text-accent mb-2" />
            <p className="text-sm italic text-muted-foreground">{quote}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeacherCard;
