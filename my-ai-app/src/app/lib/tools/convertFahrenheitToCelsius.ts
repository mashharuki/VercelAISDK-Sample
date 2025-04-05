import { tool } from "ai";
import { z } from "zod";

/**
 * Convert a temperature in fahrenheit to celsius
 */
export const convertFahrenheitToCelsiusTool = tool({
  description: 'Convert a temperature in fahrenheit to celsius',
  parameters: z.object({
    temperature: z
      .number()
      .describe('The temperature in fahrenheit to convert'),
  }),
  execute: async ({ temperature }) => {
    const celsius = Math.round((temperature - 32) * (5 / 9));
    return {
      celsius,
    };
  },
})