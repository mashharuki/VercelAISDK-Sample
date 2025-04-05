import { tool } from "ai";
import { z } from "zod";

/**
 * 天気の情報を取得するAIエージェント用のツール
 */
export const getWeatherTool = tool({
  description: 'Get the weather in a location (fahrenheit)',
  parameters: z.object({
    location: z.string().describe('The location to get the weather for'),
  }),
  execute: async ({ location }) => {
    // AI エージェントが天気を取得するためのロジックを実装
    const temperature = Math.round(Math.random() * (90 - 32) + 32);
    return {
      location,
      temperature,
    };
  },
})