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
});
