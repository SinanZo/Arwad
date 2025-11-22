import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createQuoteRequest, createContactSubmission, getAllQuoteRequests, getAllContactSubmissions, updateQuoteStatus, updateContactStatus, deleteQuoteRequest, deleteContactSubmission } from "./forms";
import { notifyOwner } from "./_core/notification";
import { protectedProcedure } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
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

  // Quote and contact form submissions
  forms: router({
    submitQuote: publicProcedure
      .input(
        z.object({
          company: z.string().min(1),
          contact: z.string().min(1),
          email: z.string().email(),
          phone: z.string().min(1),
          industry: z.string().min(1),
          items: z.array(
            z.object({
              partNumber: z.string().min(1),
              description: z.string().min(1),
              manufacturer: z.string().optional(),
              quantity: z.string().min(1),
              category: z.string().optional(),
            })
          ),
        })
      )
      .mutation(async ({ input }) => {
        // Save to database
        await createQuoteRequest({
          company: input.company,
          contact: input.contact,
          email: input.email,
          phone: input.phone,
          industry: input.industry,
          items: input.items as any,
        });

        // Notify owner
        await notifyOwner({
          title: "New Quote Request",
          content: `New quote request from ${input.company} (${input.contact}). Email: ${input.email}, Phone: ${input.phone}, Industry: ${input.industry}. ${input.items.length} items requested.`,
        });

        return { success: true };
      }),

    submitContact: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          phone: z.string().min(1),
          company: z.string().optional(),
          subject: z.string().min(1),
          message: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        // Save to database
        await createContactSubmission({
          name: input.name,
          email: input.email,
          phone: input.phone,
          company: input.company || null,
          subject: input.subject,
          message: input.message,
        });

        // Notify owner
        await notifyOwner({
          title: "New Contact Message",
          content: `New contact message from ${input.name} (${input.email}). Subject: ${input.subject}. Message: ${input.message.substring(0, 100)}...`,
        });

        return { success: true };
      }),
  }),

  // Admin endpoints for managing submissions
  admin: router({
    getQuotes: protectedProcedure.query(async ({ ctx }) => {
      // Check if user is admin
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }
      return await getAllQuoteRequests();
    }),

    getContacts: protectedProcedure.query(async ({ ctx }) => {
      // Check if user is admin
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }
      return await getAllContactSubmissions();
    }),

    updateQuoteStatus: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["pending", "processing", "completed", "cancelled"]),
        })
      )
      .mutation(async ({ ctx, input }) => {
        // Check if user is admin
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized: Admin access required");
        }
        await updateQuoteStatus(input.id, input.status);
        return { success: true };
      }),

    updateContactStatus: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["unread", "read", "replied"]),
        })
      )
      .mutation(async ({ ctx, input }) => {
        // Check if user is admin
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized: Admin access required");
        }
        await updateContactStatus(input.id, input.status);
        return { success: true };
      }),

    deleteQuote: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        // Check if user is admin
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized: Admin access required");
        }
        await deleteQuoteRequest(input.id);
        return { success: true };
      }),

    deleteContact: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        // Check if user is admin
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized: Admin access required");
        }
        await deleteContactSubmission(input.id);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
