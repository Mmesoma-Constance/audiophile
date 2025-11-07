import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const navigation = [
    { name: "Home", path: "/" },
    { name: "Headphones", path: "/category/headphones" },
    { name: "Speakers", path: "/category/speakers" },
    { name: "Earphones", path: "/category/earphones" },
  ];

  return (
    <footer className="bg-[hsl(var(--dark-bg))] text-white mt-auto">
      <div className="container mx-auto px-8 lg:12 xl:px-32 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center md:justify-between text-center md:text-start">
          {/* Logo & Description */}
          <div className="">
            <Link
              to="/"
              className="text-2xl font-bold tracking-wider mb-6 block"
            >
              audiophile
            </Link>
            <nav className="uppercase text-sm pt-5 flex lg:hidden flex-col md:flex-row font-semibold justify-center md:justify-start md:gap-20 mx-auto">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="font-bold tracking-wider mb-4"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <p className="text-white/60 text-sm md:text-base leading-relaxed w-full lg:max-w-md">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <nav className="uppercase hidden lg:flex flex-row gap-4 font-semibold justify-between mx-auto">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="font-bold tracking-wider mb-4"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            {/* Social */}
            <div className="relative lg:h-28">
              <div className="hidden absolute lg:flex gap-4 justify-center md:justify-end self-baseline bottom-0 right-0">
                <a
                  href="#"
                  className="text-white hover:text-primary transition-smooth"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 lg:h-6 lg:w-6 " />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-smooth"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 lg:h-6 lg:w-6 " />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-smooth"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 lg:h-6 lg:w-6 " />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-3 lg:mt-12 lg:pt-8 text-white/60 text-center md:text-start">
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          <div className="flex lg:hidden gap-4 justify-center md:justify-end">
            <a
              href="#"
              className="text-white hover:text-primary transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 lg:h-8 lg:w-8" />
            </a>
            <a
              href="#"
              className="text-white hover:text-primary transition-smooth"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 lg:h-8 lg:w-8" />
            </a>
            <a
              href="#"
              className="text-white hover:text-primary transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 lg:h-8 lg:w-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
