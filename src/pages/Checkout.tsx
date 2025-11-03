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

  const onSubmit = (data: CheckoutFormData) => {
    // Simulate order processing
    const orderId = `ORD-${Date.now()}`;
    
    // Store order in localStorage (simulating backend)
    const order = {
      id: orderId,
      items: cart,
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
    
    localStorage.setItem('lastOrder', JSON.stringify(order));
    clearCart();
    toast.success('Order placed successfully!');
    navigate(`/confirmation/${orderId}`);
  };

  return (
    <div className="min-h-screen py-12 bg-[hsl(var(--light-gray))]">
      <div className="container mx-auto px-4 md:px-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 bg-background p-6 md:p-8 rounded-lg space-y-8">
              <h1 className="text-3xl font-bold uppercase tracking-wider">Checkout</h1>

              {/* Billing Details */}
              <div className="space-y-4">
                <h2 className="text-primary uppercase tracking-wider font-bold text-sm">
                  Billing Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register('name')}
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register('email')}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+1 234 567 8900"
                      {...register('phone')}
                      className={errors.phone ? 'border-destructive' : ''}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="space-y-4">
                <h2 className="text-primary uppercase tracking-wider font-bold text-sm">
                  Shipping Info
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      placeholder="1234 Main St"
                      {...register('address')}
                      className={errors.address ? 'border-destructive' : ''}
                    />
                    {errors.address && (
                      <p className="text-destructive text-sm mt-1">{errors.address.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        placeholder="10001"
                        {...register('zipCode')}
                        className={errors.zipCode ? 'border-destructive' : ''}
                      />
                      {errors.zipCode && (
                        <p className="text-destructive text-sm mt-1">{errors.zipCode.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        {...register('city')}
                        className={errors.city ? 'border-destructive' : ''}
                      />
                      {errors.city && (
                        <p className="text-destructive text-sm mt-1">{errors.city.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      placeholder="United States"
                      {...register('country')}
                      className={errors.country ? 'border-destructive' : ''}
                    />
                    {errors.country && (
                      <p className="text-destructive text-sm mt-1">{errors.country.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-4">
                <h2 className="text-primary uppercase tracking-wider font-bold text-sm">
                  Payment Details
                </h2>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={(value) => setPaymentMethod(value as 'e-money' | 'cash')}
                >
                  <div className="flex items-center space-x-2 border border-border rounded p-4 cursor-pointer hover:border-primary transition-smooth">
                    <RadioGroupItem value="e-money" id="e-money" {...register('paymentMethod')} />
                    <Label htmlFor="e-money" className="cursor-pointer flex-1">
                      e-Money
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-border rounded p-4 cursor-pointer hover:border-primary transition-smooth">
                    <RadioGroupItem value="cash" id="cash" {...register('paymentMethod')} />
                    <Label htmlFor="cash" className="cursor-pointer flex-1">
                      Cash on Delivery
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === 'e-money' && (
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <Label htmlFor="eMoneyNumber">e-Money Number</Label>
                      <Input
                        id="eMoneyNumber"
                        placeholder="238521993"
                        {...register('eMoneyNumber')}
                        className={errors.eMoneyNumber ? 'border-destructive' : ''}
                      />
                      {errors.eMoneyNumber && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.eMoneyNumber.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="eMoneyPin">e-Money PIN</Label>
                      <Input
                        id="eMoneyPin"
                        placeholder="6891"
                        type="password"
                        {...register('eMoneyPin')}
                        className={errors.eMoneyPin ? 'border-destructive' : ''}
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'cash' && (
                  <p className="text-muted-foreground text-sm p-4 bg-muted rounded">
                    The 'Cash on Delivery' option enables you to pay in cash when the order is
                    delivered to your doorstep. Just make sure your address is correct so that your
                    order will not be cancelled.
                  </p>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-background p-6 md:p-8 rounded-lg space-y-6 sticky top-8">
                <h2 className="text-xl font-bold uppercase tracking-wider">Summary</h2>
                
                {/* Cart Items */}
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-sm">{item.product.name}</h3>
                        <p className="text-muted-foreground text-sm">
                          ${item.product.price.toLocaleString()}
                        </p>
                      </div>
                      <span className="text-muted-foreground">x{item.quantity}</span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-bold">${getCartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-bold">${shipping}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">VAT (included)</span>
                    <span className="font-bold">${vat.toFixed(0)}</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="flex justify-between mb-6">
                    <span className="text-muted-foreground">Grand Total</span>
                    <span className="text-xl font-bold text-primary">
                      ${grandTotal.toLocaleString()}
                    </span>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Continue & Pay
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
