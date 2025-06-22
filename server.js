console.log("Starting server...");

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

console.log("Starting server...Importing...");
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Exists" : "Missing");

app.post("/contact", async (req, res) => {
  console.log("Received /contact POST request");
  console.log("Request body:", req.body);
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res
      .status(400)
      .json({ code: 400, message: "Missing required fields" });
  }

  // Create the transporter with your email service credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Email
      pass: process.env.EMAIL_PASS, // Use Gmail App Password (not main password)
    },
  });

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`,
    to: process.env.EMAIL_USER, // Replace with your own email
    subject: "New Contact Form Submission - Portfolio",
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ code: 200, message: "Message sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ code: 500, message: "Failed to send email" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
