// app/api/webhook/route.ts
import { NextResponse } from 'next/server';

// GET: Verificación requerida por Meta
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }
  return new Response('Forbidden', { status: 403 });
}

// POST: Recepción de eventos y mensajes de WhatsApp
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.object === 'whatsapp_business_account') {
      const entry = body.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;
      const message = value?.messages?.[0];

      if (message) {
        const from = message.from;
        const text = message.text?.body;
        console.log(`Mensaje recibido de ${from}: ${text}`);

        // Lógica de respuesta o procesamiento del mensaje
      }

      return NextResponse.json({ status: 'ok' }, { status: 200 });
    }

    return NextResponse.json({ error: 'Event not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}