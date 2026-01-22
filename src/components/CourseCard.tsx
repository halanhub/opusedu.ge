import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  index?: number;
}

const CourseCard = ({ title, description, price, features, cta, index = 0 }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full border-2 hover:border-accent transition-all duration-300 hover:shadow-lg flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 flex-1">
          <div className="text-4xl font-bold text-accent">{price}</div>
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="mt-auto">
          <Link to="/contact" className="w-full" aria-label={`Enroll in ${title} - ${cta}`}>
            <Button className="w-full bg-accent hover:bg-accent/90 min-h-[44px]" size="lg">
              {cta}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
