import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface LayoutProps {
  children: ReactNode;
}

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // GA4 ID eklenecek

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // GA4 pageview tracking
  useEffect(() => {
    if (!document.querySelector("#gtag-script")) {
      const script = document.createElement("script");
      script.id = "gtag-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
      `;
      document.head.appendChild(inlineScript);
    }

    // Route değişimlerinde pageview gönder
    if ((window as any).gtag) {
      (window as any).gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  // Show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/kombi-servisi-ankara", label: "Servis Bölgeleri" },
    { href: "/sss", label: "SSS" },
    { href: "/iletisim", label: "İletişim" },
  ];

  const handleNavClick = (href: string) => {
    if (href === location.pathname)
      window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-md">Logo</span>
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:block">
                Ankara Kombi Servisi
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`
                    px-6 py-3 text-sm font-semibold rounded-sm transition-all duration-300
                    ${
                      isActive(link.href)
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Desktop CTA */}
              <Button
                asChild
                size="sm"
                className="
                  hidden sm:flex
                  px-6 py-3
                  rounded-sm
                  font-semibold text-white
                  bg-gradient-to-r from-orange-500 to-red-500
                  shadow-lg
                  hover:from-orange-600 hover:to-red-600
                  hover:shadow-2xl
                  transform transition-all duration-300
                  active:scale-95
                "
              >
                <a href="tel:+905539354340" className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Hemen Ara
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-200 bg-white">
              <div className="flex flex-col space-y-3 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-center py-3 rounded-sm font-medium text-sm transition-all ${
                      isActive(link.href)
                        ? "bg-orange-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-orange-100 hover:shadow-sm"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <Button
                  asChild
                  size="sm"
                  className="w-full px-5 py-3 rounded-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-md hover:from-orange-600 hover:to-red-600 hover:shadow-lg transition-all"
                >
                  <a
                    href="tel:+905539354340"
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Hemen Ara
                  </a>
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-auto">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <h3 className="text-white font-bold text-xl mb-4">
                Ankara Kombi Servisi
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Ankara'nın tüm ilçelerinde 7/24 profesyonel kombi bakım ve tamir
                hizmeti.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-md rounded-full px-4 py-2 text-white font-semibold transition-all"
              >
                <a href="tel:+905539354340" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  0553 935 43 40
                </a>
              </Button>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer Hızlı Linkler">
              <h4 className="text-white font-semibold mb-4 text-lg">
                Hızlı Linkler
              </h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="hover:text-orange-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="Footer Hizmetlerimiz">
              <h4 className="text-white font-semibold mb-4 text-lg">
                Hizmetlerimiz
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/hizmetler/bakim"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Kombi Bakım
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hizmetler/tamir"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Kombi Tamir
                  </Link>
                </li>
                <li>
                  <Link
                    to="/kombi-servisi-ankara"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Ankara İlçeleri
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">
                İletişim
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <span className="font-medium text-gray-300">Telefon:</span>{" "}
                  0553 935 43 40
                </li>
                <li>
                  <span className="font-medium text-gray-300">Email:</span>{" "}
                  info@ankarakombi.com
                </li>
                <li>
                  <span className="font-medium text-gray-300">Adres:</span>{" "}
                  Ankara, Türkiye
                </li>
                <li>
                  <span className="font-medium text-gray-300">
                    Çalışma Saatleri:
                  </span>{" "}
                  7/24
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Ankara Kombi Servisi. Tüm hakları
              saklıdır.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-sm shadow-md flex items-center justify-center hover:from-orange-600 hover:to-red-600 transition-all z-50"
          aria-label="Sayfanın üstüne git"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Icon */}
      <div className="fixed bottom-12 left-6 md:left-10 z-50 animate-bounce-whatsapp flex items-center gap-2">
        <a
          href="https://wa.me/905539354340"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          {/* WhatsApp SVG */}
          <WhatsAppIcon className="w-14 h-14" />
        </a>
        {/* Text */}
        <a
          href="https://wa.me/905539354340"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          aria-label="WhatsApp'tan bize ulaşın"
        >
          WhatsApp'tan bize ulaşın
        </a>
      </div>
    </div>
  );
}
