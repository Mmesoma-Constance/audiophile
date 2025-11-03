import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Order } from '@/types/product';

const Confirmation = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      const parsedOrder = JSON.parse(savedOrder);
      if (parsedOrder.id === orderId) {
        setOrder(parsedOrder);
      }
    }
  }, [orderId]);

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold uppercase tracking-wider">Order Not Found</h1>
          <Link to="/">
            <Button size="lg">Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const firstItem = order.items[0];
  const otherItemsCount = order.items.length - 1;

  return (
    <div className="min-h-screen py-12 bg-[hsl(var(--light-gray))] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="bg-background rounded-lg p-8 md:p-12 space-y-8">
          {/* Success Icon */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
              Thank you for your order
            </h1>
            <p className="text-muted-foreground">
              You will receive an email confirmation shortly
            </p>
          </div>

          {/* Order Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg border border-border">
            {/* Items */}
            <div className="bg-muted p-6 space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-border">
                <img
                  src={firstItem.product.image}
                  alt={firstItem.product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-sm">{firstItem.product.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    ${firstItem.product.price.toLocaleString()}
                  </p>
                </div>
                <span className="text-muted-foreground">x{firstItem.quantity}</span>
              </div>
              {otherItemsCount > 0 && (
                <p className="text-muted-foreground text-sm text-center">
                  and {otherItemsCount} other item{otherItemsCount > 1 ? 's' : ''}
                </p>
              )}
            </div>

            {/* Grand Total */}
            <div className="bg-[hsl(var(--dark-bg))] text-white p-6 flex flex-col justify-center">
              <p className="text-white/60 uppercase text-sm mb-2">Grand Total</p>
              <p className="text-2xl font-bold">${order.total.toLocaleString()}</p>
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Order ID</p>
                <p className="font-bold">{order.id}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Order Date</p>
                <p className="font-bold">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Shipping Address</p>
              <p className="font-bold">
                {order.shipping.address}<br />
                {order.shipping.city}, {order.shipping.zipCode}<br />
                {order.shipping.country}
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Customer</p>
              <p className="font-bold">
                {order.customer.name}<br />
                {order.customer.email}<br />
                {order.customer.phone}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <Link to="/" className="block">
            <Button size="lg" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
