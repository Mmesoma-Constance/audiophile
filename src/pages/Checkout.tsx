import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const checkoutSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address').max(255),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(20),
  address: z.string().min(5, 'Address is too short').max(200),
  zipCode: z.string().min(3, 'ZIP code is required').max(20),
  city: z.string().min(2, 'City is required').max(100),
  country: z.string().min(2, 'Country is required').max(100),
  paymentMethod: z.enum(['e-money', 'cash']),
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
}).refine((data) => {
  if (data.paymentMethod === 'e-money') {
    return data.eMoneyNumber && data.eMoneyPin;
  }
  return true;
}, {
  message: 'E-money details are required',
  path: ['eMoneyNumber'],
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'e-money' | 'cash'>('e-money');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: 'e-money',
    },
  });

  const shipping = 50;
  const vat = getCartTotal() * 0.2;
  const grandTotal = getCartTotal() + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold uppercase tracking-wider">Your cart is empty</h1>
          <Link to="/">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  const onSubmit = async (data: CheckoutFormData) => {
    const orderId = `ORD-${Date.now()}`;

    const order = {
      id: orderId,
      items: cart.map((item) => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
      })),
      total: grandTotal,
      customer: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
      shipping: {
        address: data.address,
        zipCode: data.zipCode,
        city: data.city,
        country: data.country,
      },
      paymentMethod: data.paymentMethod,
      createdAt: new Date().toISOString(),
    };

    // Save order locally (simulate backend)
    localStorage.setItem('lastOrder', JSON.stringify(order));

    // Send order confirmation email
    try {
      const res = await fetch('http://localhost:5000/send-order-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: order.id,
          userEmail: data.email,
          items: order.items,
          total: order.total,
          customer: order.customer,
          shipping: order.shipping,
        }),
      });

      const result = await res.json();
      if (result.success) toast.success('Order placed & email sent!');
      else toast.error('Order placed, but failed to send email.');
    } catch (err) {
      console.error('Email error:', err);
      toast.error('Order placed, but failed to send email.');
    }

    clearCart();
    navigate(`/confirmation/${orderId}`);
  };

  return (
    <div className="min-h-screen py-12 bg-[hsl(var(--light-gray))]">
      <div className="container mx-auto px-4 md:px-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ...rest of your existing checkout form JSX here... */}
          {/* The summary & checkout button remains the same */}
        </form>
      </div>
    </div>
  );
};

export default Checkout;
