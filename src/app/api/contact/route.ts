import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { error: "Nome, email, telefone e mensagem são obrigatórios" },
        { status: 400 },
      );
    }

    const mailOptions = {
      from: `"Formulário de Contato" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Nova mensagem de ${name} - ${email}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        
        Mensagem:
        ${message}
      `,
      html: `
        <h1>Nova mensagem do formulário de contato</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    await transporter.sendMail({
      from: `"GIR" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: "Recebemos sua mensagem!",
      text: `
        Olá ${name},

        Recebemos sua mensagem e entraremos em contato em breve.

        Resumo da sua mensagem:
        Telefone: ${phone}
        Mensagem: ${message}

        Atenciosamente,
        Equipe GIR
          `,
      html: `
            <h2>Olá ${name},</h2>
            <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
            <p><strong>Resumo da sua mensagem:</strong></p>
            <ul>
              <li>Telefone: ${phone}</li>
              <li>Mensagem: ${message.replace(/\n/g, "<br>")}</li>
            </ul>
            <p>Atenciosamente,<br>Equipe GIR</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erro ao processar contato:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Por favor, tente novamente." },
      { status: 500 },
    );
  }
}
