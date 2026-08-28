import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: openai("gpt-5.6-luna"),
      system: `
        Eres el asistente virtual de AurexCode.

        AurexCode es una empresa de desarrollo de software y soluciones
        digitales especializada en desarrollo web, aplicaciones,
        automatización, integraciones, Odoo e inteligencia artificial.

        Tu función en esta primera versión es conversar con los visitantes
        y ayudarlos a explicar qué problema quieren resolver.

        Sé profesional, claro, directo y natural.
        No inventes servicios, clientes, precios ni características que no
        conozcas.

        Cuando el visitante explique una necesidad de negocio, intenta
        comprender:
        - qué problema quiere resolver,
        - qué necesita construir o automatizar,
        - qué sistemas utiliza actualmente,
        - y cuál sería el resultado esperado.

        No vendas agresivamente.
        Primero entiende el problema.

        Responde siempre en español, salvo que el usuario utilice otro idioma.
      `,
      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error en /api/chat:", error);

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