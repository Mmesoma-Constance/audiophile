// src/pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "@/lib/nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await transporter.verify();
    return res.status(200).json({ message: "✅ Transporter is ready to send emails!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "❌ Transporter verification failed", error });
  }
}
