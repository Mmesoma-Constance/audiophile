import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Headphones", path: "/category/headphones" },
    { name: "Speakers", path: "/category/speakers" },
    { name: "Earphones", path: "/category/earphones" },
  ];

  return (
    <header className="bg-black/95 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-32">
        <div className="flex h-24 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-foreground hover:text-primary transition-smooth text-sm font-bold uppercase tracking-wider"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold tracking-wider">
            audiophile
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-primary transition-smooth text-sm font-bold uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary"
            >
              <ShoppingCart className="h-6 w-6" />
            </Button>
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {cartCount}
              </Badge>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
