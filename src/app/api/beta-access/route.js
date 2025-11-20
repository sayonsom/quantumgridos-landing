import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, title, challenge, backend, timeline } = body;

    // Validate required fields
    if (!name || !email || !company || !title || !challenge) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'QuantumGrid OS <onboarding@resend.dev>', // You'll need to update this with your verified domain
      to: 'chanda.sayonsom@gmail.com',
      subject: 'New Beta Access Request - QuantumGrid OS',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #ea580b;
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f9f9f9;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #555;
              }
              .value {
                margin-top: 5px;
                padding: 10px;
                background-color: white;
                border-radius: 4px;
                border: 1px solid #e0e0e0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Beta Access Request</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>

                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>

                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company}</div>
                </div>

                <div class="field">
                  <div class="label">Job Title:</div>
                  <div class="value">${title}</div>
                </div>

                <div class="field">
                  <div class="label">Current Challenge:</div>
                  <div class="value">${challenge}</div>
                </div>

                ${backend ? `
                <div class="field">
                  <div class="label">Quantum Backend:</div>
                  <div class="value">${backend}</div>
                </div>
                ` : ''}

                ${timeline ? `
                <div class="field">
                  <div class="label">Timeline:</div>
                  <div class="value">${timeline}</div>
                </div>
                ` : ''}
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
