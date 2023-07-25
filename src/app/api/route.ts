import { NextResponse } from 'next/server'
import { ContactProps } from '@/@types'
import { contactSchema } from '@/zod'
import { mailOptions, transporter } from '@/nodemailer';

export async function POST(request: Request) {
  const body: ContactProps = await request.json()

  const {
    name,
    email,
    message,
  } = contactSchema.parse(body);

  if (!name || !email || !message) {
    const errorMessage = "Dados incompletos.";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `WillCode - Contato`,
      text: 'preview',
      html: `
      <!DOCTYPE html>
        <html lang="pt-br">

          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap" rel="stylesheet">
            <title>WillCode - Contato</title>

            <style>
              * {
                margin: 0;
                padding: 0;
                font-family: 'Chakra Petch', sans-serif;
              }
            </style>
          </head>

          <body>
            <section style="max-width: 600px; margin: 0 auto;">
              <header
                style="height: 5rem; width: 100%; margin-bottom: 1rem; display: flex; justify-content: center; align-items: center; background-color: #101010;">
                <h1
                  style="padding: 1.5rem; color: #ffffff; text-align: center; border: 1px solid #fff; width: 100%;">
                  Will<span style="color: #f9004d;">Code</span></h1>
              </header>

              <p>Olá,</p>
              <br />
              <p>Este é um email enviado pela página de contato do <a href="https://portfolio-renovatt.vercel.app/" target="_blank"
                  style="color: #f9004d; text-decoration: none;">Willcode</a>.
              </p>
              <p>Aqui estão alguns detalhes enviados através do formulário:</p>
              <br />
              <ul>
                <li><strong>Nome:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Mensagem:</strong> ${message}</li>
              </ul>
            </section>
          </body>
        </html>
      `,
    });

    return NextResponse.json({
      message: 'Sua mensagem foi enviada!',
    })
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}