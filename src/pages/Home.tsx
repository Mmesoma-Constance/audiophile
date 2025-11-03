import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/images/headphones.png";
import aboutImage from "@/assets/images/man.png";
import hero1 from "@/assets/images/hero-1.png";

const Home = () => {
  const featuredProduct = products.find(
    (p) => p.slug === "xx99-mark-two-headphones"
  );
  const speakerProduct = products.find((p) => p.slug === "zx9-speaker");
  const earphonesProduct = products.find((p) => p.slug === "yx1-earphones");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-[hsl(var(--dark-bg))] text-white py-20 md:py-32 bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 md:px-32 relative z-10 flex justify-between gap-20">
          <div className="max-w-xl space-y-6">
            <p className="text-muted-foreground uppercase tracking-wider text-sm">
              New Product
            </p>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider leading-tight">
              XX99 Mark II Headphones
            </h1>
            <p className="text-white/80 leading-relaxed">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/product/xx99-mark-two-headphones">
              <Button size="lg">See Product</Button>
            </Link>
          </div>
          <div className="">
            <img
              src={heroImage}
              alt="hero Audiophile"
              className="w-full h-[400px] object-cover"
            />{" "}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 container mx-auto px-4 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard name="Headphones" slug="headphones" />
          <CategoryCard name="Speakers" slug="speakers" />
          <CategoryCard name="Earphones" slug="earphones" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[hsl(var(--light-gray))]">
        <div className="container mx-auto px-4 md:px-32">
          {/* ZX9 Speaker Highlight */}
          {speakerProduct && (
            <div className="bg-primary rounded-lg p-8 md:p-16 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <img
                  src={speakerProduct.image}
                  alt={speakerProduct.name}
                  className="w-full max-w-xl mx-auto"
                />
              </div>
              <div className="text-white space-y-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
                  {speakerProduct.name}
                </h2>
                <p className="text-white/80 leading-relaxed md:mb-10">
                  {speakerProduct.description}
                </p>
                <Link to={`/product/${speakerProduct.slug}`}>
                  <Button variant="inverted" size="lg">
                    See Product
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* YX1 Earphones Highlight */}
          {earphonesProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={earphonesProduct.image}
                  alt={earphonesProduct.name}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="bg-muted rounded-lg p-8 md:p-12 flex flex-col justify-center space-y-6">
                <h3 className="text-3xl font-bold uppercase tracking-wider">
                  {earphonesProduct.name}
                </h3>
                <Link to={`/product/${earphonesProduct.slug}`}>
                  <Button variant="outline" size="lg">
                    See Product
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 container mx-auto px-4 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">
              Bringing you the <span className="text-primary">best</span> audio
              gear
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden">
              <img
                src={aboutImage}
                alt="About Audiophile"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
