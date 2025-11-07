import { Link } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const shipping = 50;
  const vat = getCartTotal() * 0.2;
  const grandTotal = getCartTotal() + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold uppercase tracking-wider">Your cart is empty</h1>
          <p className="text-muted-foreground">Add some products to get started!</p>
          <Link to="/">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold uppercase tracking-wider">Cart ({cart.length})</h1>
              <Button variant="ghost" onClick={clearCart} className="text-muted-foreground">
                Remove all
              </Button>
            </div>

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-4 p-4 bg-muted rounded-lg"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold">{item.product.name}</h3>
                    <p className="text-muted-foreground">${item.product.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center bg-background rounded">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="h-8 w-8"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <div className="w-8 text-center text-sm font-bold">{item.quantity}</div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="h-8 w-8"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-muted p-8 rounded-lg space-y-6 sticky top-8">
              <h2 className="text-xl font-bold uppercase tracking-wider">Summary</h2>
              <div className="space-y-2">
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
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Grand Total</span>
                  <span className="text-xl font-bold text-primary">
                    ${grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>
              <Link to="/checkout" className="block">
                <Button size="lg" className="w-full">
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
