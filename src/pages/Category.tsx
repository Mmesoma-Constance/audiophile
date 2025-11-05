import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { products } from "@/data/products";

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const categoryProducts = products.filter((p) => p.category === category);

  const otherCategories = [
    { name: "Headphones", slug: "headphones" },
    { name: "Speakers", slug: "speakers" },
    { name: "Earphones", slug: "earphones" },
  ].filter((c) => c.slug !== category);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[hsl(var(--dark-bg))] text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-center">
            {category}
          </h1>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Go Back
          </Button>
        </Link>
      </div>

      {/* Products */}
      <section className="container mx-auto px-4 md:px-32 pb-20">
        <div className="space-y-20">
          {categoryProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-20 bg-[hsl(var(--light-gray))]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCategories.map((cat) => (
              <CategoryCard key={cat.slug} name={cat.name} slug={cat.slug} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
