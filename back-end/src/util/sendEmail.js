import sendgrid from "@sendgrid/mail";

console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY); // Log the API key for debugging

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = ({ to, from, subject, text, html }) => {
  const msg = { to, from, subject, text, html };
  return sendgrid.send(msg);
};
