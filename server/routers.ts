import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactSubmission, saveChatMessage, getChatHistory } from "./db";
import { notifyOwner } from "./_core/notification";
import { invokeLLM } from "./_core/llm";
import { nanoid } from "nanoid";

const brandContext = `You are a helpful assistant for Blue's Creative Agency, a modern creative agency that offers:
- Branding: Unique visual identity for brands
- Web Design: Modern and attractive interfaces
- Digital Development: Robust web solutions and applications
- Digital Content: Content strategies for engagement
- AI Solutions: Artificial intelligence integration

The agency values: Innovation, Creativity, Professionalism, Strategy, Evolution, and Trust.
Their tagline is: "Where Creativity Meets Technology"
Phone: +57 313 762 1044
Email: contact@bluescreativeagency.com

Answer questions about services, approximate pricing (mention that pricing varies by project), and the work process.
Always be professional and encourage contacting the agency for specific quotes.
Respond in the same language the user is using (Spanish or English).`;

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Contact form router
  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          subject: z.string().min(1),
          message: z.string().min(1),
          language: z.enum(['es', 'en']).default('es'),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Save to database
          await createContactSubmission({
            name: input.name,
            email: input.email,
            subject: input.subject,
            message: input.message,
            language: input.language,
          });

          // Notify owner
          const notificationTitle = input.language === 'es' 
            ? `Nuevo contacto: ${input.subject}` 
            : `New contact: ${input.subject}`;
          
          const notificationContent = input.language === 'es'
            ? `De: ${input.name} (${input.email})\n\nMensaje:\n${input.message}`
            : `From: ${input.name} (${input.email})\n\nMessage:\n${input.message}`;

          await notifyOwner({
            title: notificationTitle,
            content: notificationContent,
          });

          return { success: true };
        } catch (error) {
          console.error('Contact submission error:', error);
          throw error;
        }
      }),
  }),

  // Chat router
  chat: router({
    sendMessage: publicProcedure
      .input(
        z.object({
          sessionId: z.string(),
          message: z.string().min(1),
          language: z.enum(['es', 'en']).default('es'),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Save user message
          await saveChatMessage({
            sessionId: input.sessionId,
            role: 'user',
            content: input.message,
            language: input.language,
          });

          // Get chat history for context
          const history = await getChatHistory(input.sessionId);

          // Prepare messages for LLM
          const messages = [
            {
              role: 'system' as const,
              content: brandContext,
            },
            ...history.map((msg) => ({
              role: msg.role === 'user' ? ('user' as const) : ('assistant' as const),
              content: msg.content,
            })),
            {
              role: 'user' as const,
              content: input.message,
            },
          ];

          // Call LLM
          const response = await invokeLLM({
            messages: messages as Parameters<typeof invokeLLM>[0]['messages'],
          });

          const assistantMessage = typeof response.choices[0]?.message?.content === 'string' 
            ? response.choices[0].message.content 
            : (input.language === 'es' ? 'Lo siento, no pude procesar tu mensaje.' : 'Sorry, I could not process your message.');

          // Save assistant message
          await saveChatMessage({
            sessionId: input.sessionId,
            role: 'assistant',
            content: assistantMessage,
            language: input.language,
          });

          return {
            message: assistantMessage,
            sessionId: input.sessionId,
          };
        } catch (error) {
          console.error('Chat error:', error);
          throw error;
        }
      }),

    getHistory: publicProcedure
      .input(
        z.object({
          sessionId: z.string(),
        })
      )
      .query(async ({ input }) => {
        try {
          const history = await getChatHistory(input.sessionId);
          return history;
        } catch (error) {
          console.error('Get chat history error:', error);
          return [];
        }
      }),

    createSession: publicProcedure.query(() => {
      return {
        sessionId: nanoid(),
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;
