// lib/mail.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendResetEmail({ to, resetUrl }) {
  const html = `
    <p>Hello,</p>
    <p>You requested a password reset. Click the link below to reset your password — it expires in 1 hour.</p>
    <p><a href="${resetUrl}">Reset password</a></p>
    <p>If you didn't request this, ignore this email.</p>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: "Password reset — FarmFresh",
    html,
  });
}
