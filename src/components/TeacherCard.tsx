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
      <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64 overflow-hidden group">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardHeader>
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
