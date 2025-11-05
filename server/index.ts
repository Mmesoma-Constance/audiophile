import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Helper: generate modern invoice HTML
function generateOrderEmailHtml(order: {
  id: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  customer: { name: string; email: string; phone: string };
  shipping: { address: string; zipCode: string; city: string; country: string };
}) {
  const itemsHtml = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding:12px 8px; border-bottom:1px solid #eee;">${item.name}</td>
        <td style="padding:12px 8px; border-bottom:1px solid #eee; text-align:center;">${item.quantity}</td>
        <td style="padding:12px 8px; border-bottom:1px solid #eee; text-align:right;">$${item.price.toFixed(2)}</td>
      </tr>
    `
    )
    .join("");

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);
  const deliveryStr = deliveryDate.toDateString();

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>Order Confirmation</title>
    <style>
      body { font-family: 'Arial', sans-serif; background:#f4f4f4; margin:0; padding:0; }
      .container { max-width: 600px; margin: 30px auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 0 15px rgba(0,0,0,0.05); }
      .header { background:#101010; color:#fff; padding:20px; text-align:center; }
      .header img { height:40px; vertical-align:middle; margin-right:10px; }
      .content { padding:20px; color:#333; }
      .content h2 { margin-top:0; }
      .shipping, .footer { background:#f9f9f9; padding:15px 20px; border-radius:5px; margin:20px 0; }
      .shipping p { margin:4px 0; font-size:14px; }
      table { width:100%; border-collapse:collapse; margin-top:10px; }
      th { background:#f1f1f1; padding:12px 8px; text-align:left; }
      td { padding:12px 8px; }
      .total { text-align:right; font-size:16px; font-weight:bold; margin-top:10px; }
      .btn { display:inline-block; padding:10px 20px; background:#101010; color:#fff; text-decoration:none; border-radius:5px; margin-top:15px; }
      .btn:hover { background:#333; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://your-logo-url.com/logo.png" alt="Logo" />
        <span>Audiophile</span>
      </div>

      <div class="content">
        <h2>Hi ${order.customer.name},</h2>
        <p>Thank you for your order! Here’s your order summary.</p>
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Estimated Delivery:</strong> ${deliveryStr}</p>

        <div class="shipping">
          <h3>Shipping Info</h3>
          <p>${order.shipping.address}, ${order.shipping.zipCode}</p>
          <p>${order.shipping.city}, ${order.shipping.country}</p>
          <p>Phone: ${order.customer.phone}</p>
        </div>

        <h3>Order Items</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th style="text-align:center;">Qty</th>
              <th style="text-align:right;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>

        <p class="total">Grand Total: $${order.total.toFixed(2)}</p>

        <div class="footer">
          <p>We’ll notify you when your items are shipped!</p>
          <a href="https://your-website.com/orders/${order.id}" class="btn">View Your Order</a>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
}

app.post("/send-order-email", async (req, res) => {
  try {
    const { orderId, userEmail, items, total, customer, shipping } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });

    const html = generateOrderEmailHtml({
      id: orderId,
      items,
      total,
      customer,
      shipping,
    });

    await transporter.sendMail({
      from: `"Audiophile Store" <${process.env.GMAIL_USER}>`,
      to: userEmail,
      subject: "Your Audiophile Order Confirmation",
      html,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
