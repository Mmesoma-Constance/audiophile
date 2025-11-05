// lib/generateOrderEmail.ts
export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  total: number;
}

export function generateOrderEmailHtml(order: OrderDetails) {
  const itemsHtml = order.items
    .map(
      (item) =>
        `<tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>$${item.price.toFixed(2)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Thank you for your order, ${order.customerName}!</h2>
      <p>Your order <strong>#${order.orderId}</strong> has been confirmed.</p>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="text-align: left; border-bottom: 1px solid #ccc;">Product</th>
            <th style="text-align: center; border-bottom: 1px solid #ccc;">Quantity</th>
            <th style="text-align: right; border-bottom: 1px solid #ccc;">Price</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>
      <p style="text-align: right; font-weight: bold;">Total: $${order.total.toFixed(2)}</p>
      <p>We appreciate your business!</p>
    </div>
  `;
}
