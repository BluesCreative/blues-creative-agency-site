import { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { trpc } from '@/lib/trpc';

const translations = {
  es: {
    title: 'Ponte en Contacto',
    subtitle: 'Cuéntanos sobre tu proyecto y nos pondremos en contacto pronto',
    name: 'Nombre',
    namePlaceholder: 'Tu nombre completo',
    email: 'Correo Electrónico',
    emailPlaceholder: 'tu@email.com',
    subject: 'Asunto',
    subjectPlaceholder: 'Tema de tu consulta',
    message: 'Mensaje',
    messagePlaceholder: 'Cuéntanos más sobre tu proyecto...',
    send: 'Enviar Mensaje',
    sending: 'Enviando...',
    success: 'Mensaje enviado exitosamente',
    successMessage: 'Gracias por contactarnos. Nos pondremos en contacto pronto.',
    error: 'Error al enviar el mensaje',
    errorMessage: 'Por favor intenta de nuevo más tarde.',
    whatsapp: 'O contáctanos por WhatsApp',
    whatsappBtn: 'Enviar WhatsApp',
  },
  en: {
    title: 'Get in Touch',
    subtitle: 'Tell us about your project and we\'ll get back to you soon',
    name: 'Name',
    namePlaceholder: 'Your full name',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    subject: 'Subject',
    subjectPlaceholder: 'Topic of your inquiry',
    message: 'Message',
    messagePlaceholder: 'Tell us more about your project...',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully',
    successMessage: 'Thank you for contacting us. We\'ll get back to you soon.',
    error: 'Error sending message',
    errorMessage: 'Please try again later.',
    whatsapp: 'Or contact us via WhatsApp',
    whatsappBtn: 'Send WhatsApp',
  },
};

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const sendContactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setStatus('success');
      setStatusMessage(t.successMessage);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    },
    onError: (error: any) => {
      setStatus('error');
      setStatusMessage(t.errorMessage);
      console.error('Contact form error:', error);
      setTimeout(() => setStatus('idle'), 5000);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = language === 'es' ? 'El nombre es requerido' : 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = language === 'es' ? 'El correo es requerido' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = language === 'es' ? 'Correo inválido' : 'Invalid email';
    }
    if (!formData.subject.trim()) {
      errors.subject = language === 'es' ? 'El asunto es requerido' : 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = language === 'es' ? 'El mensaje es requerido' : 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus('error');
      setStatusMessage(language === 'es' ? 'Por favor completa todos los campos correctamente' : 'Please fill all fields correctly');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setFieldErrors({});
    setStatus('loading');
    sendContactMutation.mutate({
      ...formData,
      language,
    });
  };

  const whatsappMessage = `Hola Blue's Creative Agency, me gustaría conocer más sobre sus servicios.`;
  const whatsappLink = `https://wa.me/573137621044?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-card/50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.name}</label>
                <Input
                  type="text"
                  name="name"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className={`bg-card focus:border-primary-blue ${fieldErrors.name ? 'border-red-500' : 'border-border'}`}
                />
                {fieldErrors.name && <p className="text-xs text-red-500 mt-1">{fieldErrors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.email}</label>
                <Input
                  type="email"
                  name="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className={`bg-card focus:border-primary-blue ${fieldErrors.email ? 'border-red-500' : 'border-border'}`}
                />
                {fieldErrors.email && <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t.subject}</label>
              <Input
                type="text"
                name="subject"
                placeholder={t.subjectPlaceholder}
                value={formData.subject}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="bg-card border-border focus:border-primary-blue"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t.message}</label>
              <Textarea
                name="message"
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                rows={5}
                className="bg-card border-border focus:border-primary-blue resize-none"
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-medium text-green-500">{t.success}</p>
                  <p className="text-sm text-green-500/80">{statusMessage}</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <div>
                  <p className="font-medium text-red-500">{t.error}</p>
                  <p className="text-sm text-red-500/80">{statusMessage}</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-primary-blue hover:bg-primary-blue/90 text-background font-semibold py-6 rounded-lg glow-blue-lg transition-smooth"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {t.sending}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  {t.send}
                </>
              )}
            </Button>
          </form>

          {/* WhatsApp Alternative */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-4">{t.whatsapp}</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-500 font-medium transition-smooth"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.14l-.46.264-4.759-.963 1.6 4.592.277.447A9.86 9.86 0 005.364 19.487c2.33 2.33 5.434 3.614 8.716 3.614 2.524 0 4.928-.742 7.076-2.145l.430-.255 4.588.942-1.595-4.592-.422-.672A9.86 9.86 0 0012.651 2.979z" />
              </svg>
              {t.whatsappBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
