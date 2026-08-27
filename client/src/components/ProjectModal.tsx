import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    fullDescription?: string;
    videoUrl?: string;
    softwares?: Array<{ name: string; icon?: string }>;
    image?: string;
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const { language } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#070D1A]/80 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: 'fade-in 0.3s ease-out' }}
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-[#081421] to-[#070D1A] border-2 border-[#00B1E3] shadow-2xl"
        style={{
          boxShadow: '0 0 40px rgba(0, 177, 227, 0.4), inset 0 0 20px rgba(0, 177, 227, 0.1)',
          animation: 'fade-in-up 0.4s ease-out',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-[#00B1E3]/20 hover:bg-[#00B1E3]/40 transition-all duration-300"
          style={{
            border: '1px solid rgba(0, 177, 227, 0.3)',
          }}
        >
          <X className="w-5 h-5" style={{ color: '#00B1E3' }} />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Project Image */}
          {project.image && (
            <div className="mb-8 rounded-xl overflow-hidden border border-[#00B1E3]/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Title and Category */}
          <div className="mb-6">
            <h2
              className="text-3xl md:text-4xl font-black mb-2"
              style={{
                color: '#FFFFFF',
                textShadow: '0 0 20px rgba(0, 177, 227, 0.5)',
              }}
            >
              {project.title}
            </h2>
            <p
              className="text-sm font-semibold"
              style={{
                color: '#00B1E3',
                textShadow: '0 0 10px rgba(0, 177, 227, 0.4)',
              }}
            >
              {project.category}
            </p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: '#00B1E3' }}
            >
              {language === 'es' ? 'Descripción del Proyecto' : 'Project Description'}
            </h3>
            <p className="text-[#F4F4F4] leading-relaxed text-base">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Video */}
          {project.videoUrl && (
            <div className="mb-8">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#00B1E3' }}
              >
                {language === 'es' ? 'Video de Marketing' : 'Marketing Video'}
              </h3>
              <div className="rounded-xl overflow-hidden border border-[#00B1E3]/30">
                <video
                  width="100%"
                  height="auto"
                  controls
                  className="w-full"
                  style={{
                    backgroundColor: '#070D1A',
                  }}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  {language === 'es' ? 'Tu navegador no soporta videos.' : 'Your browser does not support videos.'}
                </video>
              </div>
            </div>
          )}

          {/* Softwares Used */}
          {project.softwares && project.softwares.length > 0 && (
            <div className="mb-8">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#00B1E3' }}
              >
                {language === 'es' ? 'Softwares Utilizados' : 'Software Used'}
              </h3>
              <div className="flex flex-wrap gap-6">
                {project.softwares.map((software, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg border border-[#00B1E3]/30 bg-[#00B1E3]/5 hover:bg-[#00B1E3]/10 transition-all duration-300"
                  >
                    {software.icon ? (
                      <img
                        src={software.icon}
                        alt={software.name}
                        className="w-12 h-12 object-contain"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#00B1E3]/40 text-xs font-bold tracking-widest text-[#00B1E3]"
                      >
                        APP
                      </span>
                    )}
                    <span className="text-sm font-semibold text-[#F4F4F4]">
                      {software.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
