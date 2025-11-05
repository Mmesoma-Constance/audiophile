export function generateOrderConfirmationHtml(order: {
  id: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
}) {
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
    <h1>Thank you for your order!</h1>
    <p>Your order ID is <strong>${order.id}</strong></p>
    <table border="1" cellpadding="5" cellspacing="0">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
      </tbody>
    </table>
    <p><strong>Total: $${order.total.toFixed(2)}</strong></p>
    <p>We appreciate your business!</p>
  `;
}
