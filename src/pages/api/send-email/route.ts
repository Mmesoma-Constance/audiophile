// app/api/send-order/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  orderId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  total: number;
  phone: string;
  shippingAddress: {
    address: string;
    zipCode: string;
    city: string;
    country: string;
  };
  paymentMethod: string;
  createdAt: string;
}

// Function to generate dynamic HTML
function generateOrderEmailHtml(order: Order) {
  const itemsHtml = order.items
    .map(
      (item) =>
        `<tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.name}</td>
          <td style="text-align:center; padding: 8px; border-bottom: 1px solid #ddd;">${item.quantity}</td>
          <td style="text-align:right; padding: 8px; border-bottom: 1px solid #ddd;">$${item.price.toFixed(2)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto;">
      <h2>Thank you for your order, ${order.customerName}!</h2>
      <p>Your order <strong>#${order.orderId}</strong> has been confirmed.</p>
      <table style="width:100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr>
            <th style="text-align:left; border-bottom:2px solid #000;">Product</th>
            <th style="text-align:center; border-bottom:2px solid #000;">Qty</th>
            <th style="text-align:right; border-bottom:2px solid #000;">Price</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>
      <p style="text-align:right; font-weight:bold; margin-top:10px;">Total: $${order.total.toFixed(2)}</p>
      <h3>Shipping Address</h3>
      <p>
        ${order.shippingAddress.address}, ${order.shippingAddress.city}, ${order.shippingAddress.zipCode}, ${order.shippingAddress.country}
      </p>
      <p>Payment Method: ${order.paymentMethod}</p>
      <p>We appreciate your business! ❤️</p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const order: Order = await req.json();

    // Create Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // app password
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: order.customerEmail,
      subject: `Order Confirmation - #${order.orderId}`,
      html: generateOrderEmailHtml(order),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Order confirmation email sent!",
    });
  } catch (error) {
    console.error("Error sending order email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send order email." },
      { status: 500 }
    );
  }
}
