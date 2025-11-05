import aboutImage from "@/assets/images/man.png";
const About = () => {
  return (
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
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
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
  );
};

export default About;
