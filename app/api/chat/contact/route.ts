import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { Nombre, Correo, Empresa, Mensaje } = body;

    if (!Nombre || !Correo || !Mensaje) {
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
      replyTo: Correo,
      subject: `Nuevo lead en AurexCode: ${Nombre}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${Nombre}</p>
          <p><strong>Correo:</strong> ${Correo}</p>
          <p><strong>Empresa:</strong> ${Empresa || 'No especificada'}</p>
          <p><strong>Mensaje:</strong><br/>${Mensaje}</p>
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