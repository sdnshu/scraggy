import { resend } from "@/lib/resend";

type params = {
    to: string
    subject: string
    text: string
}

export async function sendEmail(params: params) {

    const { to, subject, text } = params;

    try {

        const response = await resend.emails.send({
            from: `${process.env.RESEND_FROM_ORG_NAME!} <${process.env.RESEND_FROM_ORG_EMAIL!}>`,
            to,
            subject,
            text
        });

        console.log('Email sent successfully:', response);

    } catch (error) { console.error('Error sending email:', error) }

}
