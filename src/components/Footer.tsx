import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Headphones', path: '/category/headphones' },
    { name: 'Speakers', path: '/category/speakers' },
    { name: 'Earphones', path: '/category/earphones' },
  ];

  return (
    <footer className="bg-[hsl(var(--dark-bg))] text-white mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-wider mb-6 block">
              audiophile
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
              music lovers and sound specialists who are devoted to helping you get the most out of
              personal audio. Come and visit our demo facility - we're open 7 days a week.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white/60 hover:text-primary transition-smooth text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/60 hover:text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-primary transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-white/60 text-sm">
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
