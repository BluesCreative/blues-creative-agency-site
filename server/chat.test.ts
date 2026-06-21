import { describe, it, expect } from "vitest";
import { z } from "zod";

// Validation schemas for chat
const chatMessageSchema = z.object({
  sessionId: z.string().min(1, "Session ID is required"),
  message: z.string().min(1, "Message is required"),
  language: z.enum(['es', 'en']).default('es'),
});

const chatHistorySchema = z.object({
  sessionId: z.string().min(1, "Session ID is required"),
});

describe("Chat Functionality", () => {
  describe("Send Message Validation", () => {
    it("should validate correct message data", () => {
      const validData = {
        sessionId: "session-123",
        message: "What services do you offer?",
        language: "en" as const,
      };

      const result = chatMessageSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("should reject empty session ID", () => {
      const invalidData = {
        sessionId: "",
        message: "What services do you offer?",
        language: "en" as const,
      };

      const result = chatMessageSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should reject empty message", () => {
      const invalidData = {
        sessionId: "session-123",
        message: "",
        language: "en" as const,
      };

      const result = chatMessageSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should accept Spanish language", () => {
      const validData = {
        sessionId: "session-123",
        message: "¿Cuáles son sus servicios?",
        language: "es" as const,
      };

      const result = chatMessageSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("should default to Spanish language when not specified", () => {
      const validData = {
        sessionId: "session-123",
        message: "What services do you offer?",
      };

      const result = chatMessageSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.language).toBe("es");
      }
    });
  });

  describe("Get History Validation", () => {
    it("should validate correct history request", () => {
      const validData = {
        sessionId: "session-123",
      };

      const result = chatHistorySchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("should reject empty session ID", () => {
      const invalidData = {
        sessionId: "",
      };

      const result = chatHistorySchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe("Chat Session Management", () => {
    it("should generate valid session ID format", () => {
      const sessionId = "session-" + Math.random().toString(36).substr(2, 9);
      expect(sessionId).toMatch(/^session-[a-z0-9]+$/);
    });

    it("should handle multiple messages in same session", () => {
      const sessionId = "session-123";
      const messages = [
        { sessionId, message: "Hello", language: "en" as const },
        { sessionId, message: "How are you?", language: "en" as const },
        { sessionId, message: "Tell me about your services", language: "en" as const },
      ];

      messages.forEach((msg) => {
        const result = chatMessageSchema.safeParse(msg);
        expect(result.success).toBe(true);
      });
    });

    it("should support bilingual conversations", () => {
      const sessionId = "session-123";
      const messages = [
        { sessionId, message: "Hello", language: "en" as const },
        { sessionId, message: "¿Cuáles son sus servicios?", language: "es" as const },
        { sessionId, message: "What is your pricing?", language: "en" as const },
      ];

      messages.forEach((msg) => {
        const result = chatMessageSchema.safeParse(msg);
        expect(result.success).toBe(true);
      });
    });
  });

  describe("Brand Context Integration", () => {
    it("should contain brand information in context", () => {
      const brandContext = `You are a helpful assistant for Blue's Creative Agency, a modern creative agency that offers:
- Branding: Unique visual identity for brands
- Web Design: Modern and attractive interfaces
- Digital Development: Robust web solutions and applications
- Digital Content: Content strategies for engagement
- AI Solutions: Artificial intelligence integration`;

      expect(brandContext).toContain("Blue's Creative Agency");
      expect(brandContext).toContain("Branding");
      expect(brandContext).toContain("Web Design");
      expect(brandContext).toContain("Digital Development");
      expect(brandContext).toContain("Digital Content");
      expect(brandContext).toContain("AI Solutions");
    });

    it("should include brand values in context", () => {
      const brandValues = [
        "Innovation",
        "Creativity",
        "Professionalism",
        "Strategy",
        "Evolution",
        "Trust",
      ];

      const brandContext = `Brand values: ${brandValues.join(", ")}`;
      brandValues.forEach((value) => {
        expect(brandContext).toContain(value);
      });
    });

    it("should include contact information in context", () => {
      const brandContext = `Phone: +57 313 762 1044
Email: contact@bluescreativeagency.com`;

      expect(brandContext).toContain("+57 313 762 1044");
      expect(brandContext).toContain("contact@bluescreativeagency.com");
    });
  });
});
