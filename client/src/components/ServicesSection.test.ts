import { describe, expect, it } from 'vitest';
import { translations } from './ServicesSection';

describe('ServicesSection process content', () => {
  it('includes five services with five ordered process steps in Spanish', () => {
    expect(translations.es.services).toHaveLength(5);

    translations.es.services.forEach((service) => {
      expect(service.process).toHaveLength(5);
      expect(service.process.map((step) => step.title)).toHaveLength(5);
      service.process.forEach((step) => {
        expect(step.title.length).toBeGreaterThan(0);
        expect(step.text.length).toBeGreaterThan(0);
      });
    });
  });

  it('includes the same five interactive services and steps in English', () => {
    expect(translations.en.services).toHaveLength(5);
    expect(translations.en.services.map((service) => service.id)).toEqual(
      translations.es.services.map((service) => service.id),
    );

    translations.en.services.forEach((service) => {
      expect(service.process).toHaveLength(5);
      expect(service.process.every((step) => step.title && step.text)).toBe(true);
    });
  });
});
