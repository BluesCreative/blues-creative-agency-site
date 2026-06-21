import { describe, it, expect } from "vitest";
import { z } from "zod";

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  language: z.enum(['es', 'en']).default('es'),
});

describe("Contact Form Validation", () => {
  it("should validate correct contact data", () => {
    const validData = {
      name: "John Doe",
      email: "john@example.com",
      subject: "Project Inquiry",
      message: "I'm interested in your services",
      language: "en" as const,
    };

    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should reject empty name", () => {
    const invalidData = {
      name: "",
      email: "john@example.com",
      subject: "Project Inquiry",
      message: "I'm interested in your services",
    };

    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("should reject invalid email", () => {
    const invalidData = {
      name: "John Doe",
      email: "invalid-email",
      subject: "Project Inquiry",
      message: "I'm interested in your services",
    };

    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("should reject empty subject", () => {
    const invalidData = {
      name: "John Doe",
      email: "john@example.com",
      subject: "",
      message: "I'm interested in your services",
    };

    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("should reject empty message", () => {
    const invalidData = {
      name: "John Doe",
      email: "john@example.com",
      subject: "Project Inquiry",
      message: "",
    };

    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("should accept Spanish language", () => {
    const validData = {
      name: "Juan Pérez",
      email: "juan@example.com",
      subject: "Consulta de Proyecto",
      message: "Me interesa conocer más sobre sus servicios",
      language: "es" as const,
    };

    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should default to Spanish language when not specified", () => {
    const validData = {
      name: "John Doe",
      email: "john@example.com",
      subject: "Project Inquiry",
      message: "I'm interested in your services",
    };

    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.language).toBe("es");
    }
  });
});
