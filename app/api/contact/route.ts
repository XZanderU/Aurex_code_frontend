import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, correo, empresa, mensaje } = body;

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { message: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'johnalexanderurreagarcia@gmail.com', //  correo
      replyTo: correo,
      subject: `Nuevo lead en AurexCode: ${nombre}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Correo:</strong> ${correo}</p>
          <p><strong>Empresa:</strong> ${empresa || 'No especificada'}</p>
          <p><strong>Mensaje:</strong><br/>${mensaje}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensaje enviado con éxito' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json(
      { message: 'Error interno al enviar el correo' },
      { status: 500 }
    );
  }
}