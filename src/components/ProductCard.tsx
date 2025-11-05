import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  reverse?: boolean;
}

const ProductCard = ({ product, reverse = false }: ProductCardProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
        reverse ? "md:grid-flow-dense" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`${reverse ? "md:col-start-2" : ""} relative overflow-hidden rounded-lg bg-muted`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[350px] md:h-[450px] object-cover transition-smooth hover:scale-105"
        />
      </div>

      {/* Content */}
      <div
        className={`${reverse ? "md:col-start-1 md:row-start-1" : ""} space-y-6`}
      >
        {product.new && (
          <Badge className="bg-transparent border-primary text-primary uppercase tracking-wider">
            New Product
          </Badge>
        )}
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider">
          {product.name}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>
        <Link to={`/product/${product.slug}`}>
          <Button size="lg" className="">See Product</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
