import { openai } from "@ai-sdk/openai";
import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";

import { aurexcodeSystemPrompt } from "@/lib/ai/prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: openai("gpt-5.6-luna"),

      system: aurexcodeSystemPrompt,

      messages: await convertToModelMessages(messages),

      onError({ error }) {
        console.error("❌ ERROR DE OPENAI/AI SDK:");
        console.error(error);
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("❌ ERROR EN /api/chat:", error);

    return new Response(
      JSON.stringify({
        error: "No fue posible procesar la solicitud.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}