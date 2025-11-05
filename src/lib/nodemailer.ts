// src/lib/nodemailer.ts
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // your Gmail
    pass: process.env.GMAIL_PASS, // 16-char app password
  },
});

// Optional: verify connection when server starts
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Error connecting to mail server:", error);
  } else {
    console.log("✅ Mail server is ready to send messages!");
  }
});
