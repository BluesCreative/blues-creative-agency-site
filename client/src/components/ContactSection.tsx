import { Send, Loader2, CheckCircle, AlertCircle, Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { trpc } from '@/lib/trpc';
import { useState } from 'react';

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
    contactMethods: 'Métodos de Contacto',
    emailContact: 'contacto@bluescreativeagency.com',
    phoneContact: '+57 313 762 1044',
    responseTime: 'Respuesta en 24 horas',
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
    contactMethods: 'Contact Methods',
    emailContact: 'contact@bluescreativeagency.com',
    phoneContact: '+57 313 762 1044',
    responseTime: 'Response in 24 hours',
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

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');
    await sendContactMutation.mutateAsync({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #070D1A 0%, #081421 50%, #070D1A 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: '#00B1E3',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: '#00B1E3',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{
              color: '#FFFFFF',
              textShadow: '0 0 20px rgba(0, 177, 227, 0.6)',
            }}
          >
            {t.title}
          </h2>
          <p className="text-[#F4F4F4] text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6 flex flex-col justify-start">
            <h3
              className="text-2xl font-bold mb-8 text-center"
              style={{ color: '#00B1E3', textShadow: '0 0 10px rgba(0, 177, 227, 0.4)' }}
            >
              {t.contactMethods}
            </h3>

            {/* Email Card */}
            <a
              href={`mailto:${t.emailContact}`}
              className="p-6 rounded-xl transition-all duration-300 hover:scale-105 group"
              style={{
                backgroundColor: 'rgba(0, 177, 227, 0.1)',
                border: '2px solid #00B1E3',
                boxShadow: '0 0 20px rgba(0, 177, 227, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 177, 227, 0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 177, 227, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.2)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 177, 227, 0.1)';
              }}
            >
              <div className="flex items-center gap-4 mb-3">
                <Mail size={24} style={{ color: '#00B1E3' }} />
                <span className="text-white font-bold">Email</span>
              </div>
              <p className="text-[#F4F4F4] text-sm break-all">{t.emailContact}</p>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:+573137621044`}
              className="p-6 rounded-xl transition-all duration-300 hover:scale-105 group"
              style={{
                backgroundColor: 'rgba(0, 177, 227, 0.1)',
                border: '2px solid #00B1E3',
                boxShadow: '0 0 20px rgba(0, 177, 227, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 177, 227, 0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 177, 227, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.2)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 177, 227, 0.1)';
              }}
            >
              <div className="flex items-center gap-4 mb-3">
                <Phone size={24} style={{ color: '#00B1E3' }} />
                <span className="text-white font-bold">Teléfono</span>
              </div>
              <p className="text-[#F4F4F4] text-sm">{t.phoneContact}</p>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/573137621044"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl transition-all duration-300 hover:scale-105 group"
              style={{
                backgroundColor: 'rgba(0, 177, 227, 0.1)',
                border: '2px solid #00B1E3',
                boxShadow: '0 0 20px rgba(0, 177, 227, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 177, 227, 0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 177, 227, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.2)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 177, 227, 0.1)';
              }}
            >
              <div className="flex items-center gap-4 mb-3">
                <MessageCircle size={24} style={{ color: '#00B1E3' }} />
                <span className="text-white font-bold">WhatsApp</span>
              </div>
              <p className="text-[#F4F4F4] text-sm">{t.phoneContact}</p>
            </a>

            {/* Response Time */}
            <div
              className="p-4 rounded-xl text-center"
              style={{
                backgroundColor: 'rgba(0, 177, 227, 0.05)',
                border: '1px solid rgba(0, 177, 227, 0.3)',
              }}
            >
              <p className="text-[#F4F4F4] text-sm">⏱️ {t.responseTime}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl"
              style={{
                backgroundColor: 'rgba(0, 177, 227, 0.05)',
                border: '2px solid #00B1E3',
                boxShadow: '0 0 30px rgba(0, 177, 227, 0.15)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label className="block text-white font-bold mb-2 text-sm">
                    {t.name}
                  </label>
                  <Input
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(7, 13, 26, 0.8)',
                      border: fieldErrors.name ? '2px solid #E8734A' : '2px solid #00B1E3',
                      color: '#FFFFFF',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.4)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                  {fieldErrors.name && (
                    <p className="text-[#E8734A] text-xs mt-1">{fieldErrors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white font-bold mb-2 text-sm">
                    {t.email}
                  </label>
                  <Input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(7, 13, 26, 0.8)',
                      border: fieldErrors.email ? '2px solid #E8734A' : '2px solid #00B1E3',
                      color: '#FFFFFF',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.4)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                  {fieldErrors.email && (
                    <p className="text-[#E8734A] text-xs mt-1">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div className="mb-6">
                <label className="block text-white font-bold mb-2 text-sm">
                  {t.subject}
                </label>
                <Input
                  type="text"
                  placeholder={t.subjectPlaceholder}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(7, 13, 26, 0.8)',
                    border: fieldErrors.subject ? '2px solid #E8734A' : '2px solid #00B1E3',
                    color: '#FFFFFF',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.4)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                {fieldErrors.subject && (
                  <p className="text-[#E8734A] text-xs mt-1">{fieldErrors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label className="block text-white font-bold mb-2 text-sm">
                  {t.message}
                </label>
                <Textarea
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none"
                  style={{
                    backgroundColor: 'rgba(7, 13, 26, 0.8)',
                    border: fieldErrors.message ? '2px solid #E8734A' : '2px solid #00B1E3',
                    color: '#FFFFFF',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.4)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                {fieldErrors.message && (
                  <p className="text-[#E8734A] text-xs mt-1">{fieldErrors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div
                  className="p-4 rounded-lg mb-6 flex items-center gap-3"
                  style={{
                    backgroundColor: 'rgba(0, 177, 227, 0.1)',
                    border: '2px solid #00B1E3',
                  }}
                >
                  <CheckCircle size={20} style={{ color: '#00B1E3' }} />
                  <div>
                    <p className="text-[#00B1E3] font-bold text-sm">{t.success}</p>
                    <p className="text-[#00B1E3] text-xs">{statusMessage}</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div
                  className="p-4 rounded-lg mb-6 flex items-center gap-3"
                  style={{
                    backgroundColor: 'rgba(232, 115, 74, 0.1)',
                    border: '2px solid #E8734A',
                  }}
                >
                  <AlertCircle size={20} style={{ color: '#E8734A' }} />
                  <div>
                    <p className="text-[#E8734A] font-bold text-sm">{t.error}</p>
                    <p className="text-[#E8734A] text-xs">{statusMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: '#00B1E3',
                  color: '#070D1A',
                  border: '2px solid #00B1E3',
                  boxShadow: '0 0 20px rgba(0, 177, 227, 0.6)',
                }}
                onMouseEnter={(e) => {
                  if (!status.includes('loading')) {
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 177, 227, 0.8)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.6)';
                }}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    {t.sending}
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {t.send}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
