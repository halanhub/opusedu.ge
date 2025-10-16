import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Netlify form handling
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <CheckCircle2 className="h-20 w-20 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-primary mb-2">{t('contact.form.success')}</h3>
      </motion.div>
    );
  }

  return (
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
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-sm text-muted-foreground">{t('contact.info.address')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">{t('contact.info.phone')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">{t('contact.info.email')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Embed */}
            <div className="h-64 rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.2939234!2d44.783!3d41.716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzU3LjYiTiA0NMKwNDYnNTguOCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="pt-6">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />

                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder={t('contact.form.name')}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder={t('contact.form.email')}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder={t('contact.form.phone')}
                    />
                  </div>

                  <div>
                    <Select name="course">
                      <SelectTrigger>
                        <SelectValue placeholder={t('contact.form.course')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">{t('contact.form.english')}</SelectItem>
                        <SelectItem value="georgian">{t('contact.form.georgian')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder={t('contact.form.message')}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
