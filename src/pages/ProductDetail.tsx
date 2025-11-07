import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CategoryCard from "@/components/CategoryCard";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import gallery1 from "@/assets/images/desktop/image-xx99-mark-one-headphones.jpg";
import gallery2 from "@/assets/images/desktop/image-xx59-headphones.jpg";
import gallery3 from "@/assets/images/desktop/image-zx9-speaker.jpg";
import CategoryComponent from "@/components/CategoryComponent";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart!`);
  };

  const categories = [
    { name: "Headphones", slug: "headphones" },
    { name: "Speakers", slug: "speakers" },
    { name: "Earphones", slug: "earphones" },
  ];

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2">
          <ChevronLeft className="h-4 w-4" />
          Go Back
        </Button>
      </div>

      {/* Product Details */}
      <section className="container mx-auto px-4 sm:px-16 md:px-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg bg-muted justify-between m-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[350px] md:h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            {product.new && (
              <Badge className="text-primary uppercase tracking-widest ">
                New Product
              </Badge>
            )}
            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider">
              {product.name}
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            <p className="text-2xl font-bold">
              ${product.price.toLocaleString()}
            </p>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center bg-muted rounded">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-r-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="w-12 text-center font-bold">{quantity}</div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-l-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button size="lg" onClick={handleAddToCart} className="">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Features & Includes */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
              Features
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {product.features}
            </p>
          </div>
          <div className="space-y-6 md:flex md:gap-80 xl:block xl:gap-0">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
              In the Box
            </h2>
            <ul className="space-y-2">
              {product.includes.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-primary font-bold">
                    {item.quantity}x
                  </span>
                  <span className="text-muted-foreground">{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    
      {/* You May Also Like */}
      <div className="mb-20  px-4 md:px-10 lg:px-16 xl:px-32">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-center mb-12">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
              <div className="text-center space-y-6">
                <div className="rounded-lg overflow-hidden bg-muted">
                  <img
                    src={gallery1}
                    alt={gallery1.name}
                    className="w-full h-[280px] object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider">
                 XX99 MARK I
                </h3>
              
                  <Button size="lg">See Product</Button>
                
              </div>
       
           <div className="text-center space-y-6">
                <div className="rounded-lg overflow-hidden bg-muted">
                  <img
                    src={gallery2}
                    alt={gallery2.name}
                    className="w-full h-[280px] object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider">
                 XX59 
                </h3>
              
                  <Button size="lg">See Product</Button>
                
              </div>
            
           <div className="text-center space-y-6">
                <div className="rounded-lg overflow-hidden bg-muted">
                  <img
                    src={gallery3}
                    alt={gallery3.name}
                    className="w-full h-[280px] object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider">
                 ZX9 SPEAKER
                </h3>
              
                  <Button size="lg">See Product</Button>
                
              </div>
            
        </div>
      </div>

    <CategoryComponent />
    </div>
  );
};

export default ProductDetail;
