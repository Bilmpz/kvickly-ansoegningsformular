import nodemailer from "nodemailer";
import type { ApplicationData } from "@/types/application";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendApplicationEmail(data: ApplicationData) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    APPLICATION_RECEIVER,
  } = process.env;

  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !SMTP_FROM ||
    !APPLICATION_RECEIVER
  ) {
    throw new Error("Manglende SMTP miljøvariabler.");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const text = `
Ny ungarbejder-ansøgning

Navn: ${data.fullName}
Alder: ${data.age}
Email: ${data.email}
Telefon: ${data.phone}
Skole: ${data.school}

Tilgængelighed:
${data.availableDays}

Hvorfor Kvickly:
${data.whyKvickly}

Styrker:
${data.strengths}

Erfaring:
${data.experience}
`;

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #111;">
      <h2>Ny ungarbejder-ansøgning</h2>

      <table style="border-collapse: collapse; width: 100%; margin-bottom: 24px;">
        <tbody>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Navn</td>
            <td style="padding: 8px;">${escapeHtml(data.fullName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Alder</td>
            <td style="padding: 8px;">${escapeHtml(data.age)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Email</td>
            <td style="padding: 8px;">${escapeHtml(data.email)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Telefon</td>
            <td style="padding: 8px;">${escapeHtml(data.phone)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Skole</td>
            <td style="padding: 8px;">${escapeHtml(data.school)}</td>
          </tr>
        </tbody>
      </table>

      <h3>Tilgængelighed</h3>
      <p>${escapeHtml(data.availableDays).replaceAll("\n", "<br />")}</p>

      <h3>Hvorfor Kvickly?</h3>
      <p>${escapeHtml(data.whyKvickly).replaceAll("\n", "<br />")}</p>

      <h3>Styrker</h3>
      <p>${escapeHtml(data.strengths).replaceAll("\n", "<br />")}</p>

      <h3>Erfaring</h3>
      <p>${escapeHtml(data.experience).replaceAll("\n", "<br />")}</p>
    </div>
  `;

    await transporter.sendMail({
    from: `"Kvickly ansøgning" <${SMTP_FROM}>`,
    to: APPLICATION_RECEIVER,
    subject: `Ny ungarbejder-ansøgning - ${data.fullName}`,
    text,
    html,
    });
}