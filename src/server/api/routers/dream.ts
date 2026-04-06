import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const dreamRouter = createTRPCRouter({
  new: protectedProcedure
    .input(
      z.object({
        label: z.string(),
      }),
    )

    .mutation(async ({ ctx, input }) => {
      return await ctx.db.dreamEntry.create({
        data: {
          label: input.label,
          entry: "",
          userId: ctx.session.user.id,
        },
      });
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.dreamEntry.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  get: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )

    .query(async ({ ctx, input }) => {
      return await ctx.db.dreamEntry.findFirst({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        label: z.string(),
        entry: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.dreamEntry.update({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
        data: {
          label: input.label,
          entry: input.entry,
        },
      });
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.dreamEntry.delete({
        where: { id: input.id, userId: ctx.session.user.id },
      });
    }),
});
