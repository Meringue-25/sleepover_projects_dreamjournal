import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const dreamRouter = createTRPCRouter({
  greet: publicProcedure
    .input(
      z.object({
        person: z.string(),
      }),
    )
    .query(({ input }) => {
      return "Hello " + input.person;
    }),

  new: publicProcedure
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
        },
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.dreamEntry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  get: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )

    .query(async ({ ctx, input }) => {
      return await ctx.db.dreamEntry.findFirst({
        where: {
          id: input.id,
        },
      });
    }),
});
