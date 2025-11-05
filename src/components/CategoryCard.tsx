import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import headphoneImage from "@/assets/images/desktop/hero-1.png";
import speakerImage from "@/assets/images/desktop/hero-2.png";
import EarphoneImage from "@/assets/images/desktop/hero-3.png";
interface CategoryCardProps {
  name: string;
  slug: string;
  image?: string;
}

const CategoryCard = ({ name, slug }: CategoryCardProps) => {
  return (
    <Link to={`/category/${slug}`}>
      <div className="group bg-muted rounded-lg p-8 text-center transition-smooth hover:shadow-lg cursor-pointer">
        <div className="mb-4 h-32 flex items-center justify-center">
          <div className="text-6xl">
            {slug === "headphones" ? (
              <img
                src={headphoneImage}
                alt="hero Audiophile"
                className="w-32 object-cover"
              />
            ) : slug === "speakers" ? (
              <img
                src={speakerImage}
                alt="hero Audiophile"
                className="w-32 object-cover"
              />
            ) : (
              <img
                src={EarphoneImage}
                alt="hero Audiophile"
                className="w-32 object-cover"
              />
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
          {name}
        </h3>
        <Button
          variant="link"
          className="text-muted-foreground group-hover:text-primary gap-2"
        >
          Shop
          <ChevronRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
        </Button>
      </div>
    </Link>
  );
};

export default CategoryCard;
