import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Wszystkie pola są wymagane.' }, { status: 400 });
    }

    // Konfiguracja nodemailer (tu przykład z Gmail, ustaw zmienne w .env)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: `Wiadomość od ${name} <${email}>`,
      text: message,
    });

    return NextResponse.json({ message: 'Wiadomość wysłana' }, { status: 200 });

  } catch (error) {
    console.error('Błąd podczas wysyłki maila:', error);
    return NextResponse.json({ message: 'Błąd serwera podczas wysyłania maila.' }, { status: 500 });
  }
}
