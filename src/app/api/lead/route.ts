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
    const { name, email, phone, state } = body;
    const ebookUrl =
      "https://drive.google.com/drive/folders/1mAgCaY5-RCbzL9iO6OSEGqC4TUjJwzM3";

    if (!name || !email || !state || !phone) {
      return NextResponse.json(
        { error: "Nome, email, telefone e estado são obrigatórios" },
        { status: 400 },
      );
    }

    const mailOptions = {
      from: `"Novo Lead - Ebook" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Lead captado pelo E-book - ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Estado: ${state}
      `,
      html: `
        <h1>Lead captado pelo E-book</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Estado:</strong> ${state}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    await transporter.sendMail({
      from: `"GIR" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: "Aqui está seu ebook!",
      text: `
        Olá ${name},

        Obrigado por baixar nosso ebook! Clique no link abaixo para acessar:

        ${ebookUrl}

        Se o botão não funcionar, copie e cole o link acima no seu navegador.

        Atenciosamente,
        Equipe GIR
      `,
      html: `
        <h2>Olá ${name},</h2>
        <p>Obrigado por baixar nosso ebook! Clique no botão abaixo para acessar:</p>
        
        <div style="margin: 20px 0;">
          <a href="${ebookUrl}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
            Baixar Ebook
          </a>
        </div>
        
        <p style="color: #666; font-size: 14px;">
          Se o botão não funcionar, copie e cole este link no seu navegador:<br>
          ${ebookUrl}
        </p>
        
        <p>Atenciosamente,<br>Equipe GIR</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Ebook enviado com sucesso para o seu email!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erro ao processar lead:", error);
    return NextResponse.json(
      { error: "Erro ao enviar o ebook. Por favor, tente novamente." },
      { status: 500 },
    );
  }
}
