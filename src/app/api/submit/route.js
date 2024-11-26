import nodemailer from 'nodemailer';

// Create a transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === 'production'
  }
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Send email
      await transporter.sendMail({
        from: `"Your Company" <${process.env.SMTP_FROM}>`,
        to: process.env.SMTP_TO, // Where you want to receive emails
        replyTo: email, // Set reply-to as sender's email
        subject: 'New Form Submission',
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
        html: `
          <h1>New Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Email send error:', error);
      res.status(500).json({ 
        message: 'Failed to send email', 
        error: error.message 
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}