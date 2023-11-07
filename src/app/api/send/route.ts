import { EmailTemplate } from '../../../components/EmailTemplate/EmailTemplate';
import { NextApiResponse, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const requestData = await req.json();
    console.log("requestData:", requestData);

    const { email } = requestData;
    console.log("email:", email);

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const data = await resend.emails.send({
      from: 'Matiasa <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to DevChecklist',
      react: EmailTemplate({ firstName: email.split('@')[0] }),
      text: 'Welcome to DevChecklist',
    });

    return NextResponse.json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
