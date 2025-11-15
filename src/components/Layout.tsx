import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/kombi-servisi-ankara", label: "Ankara İlçeleri" },
    { href: "/sss", label: "SSS" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AK</span>
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:block">
                Ankara Kombi Servisi
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-orange-50 text-orange-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                asChild
                size="sm"
                className="hidden sm:flex bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
              >
                <a href="tel:+905551234567">
                  <Phone className="w-4 h-4 mr-2" />
                  Hemen Ara
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-orange-50 text-orange-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 sm:hidden"
                >
                  <a href="tel:+905551234567">
                    <Phone className="w-4 h-4 mr-2" />
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
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Ankara Kombi Servisi
              </h3>
              <p className="text-sm mb-4">
                Ankara'nın tüm ilçelerinde 7/24 profesyonel kombi bakım ve
                tamir hizmeti.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-orange-500 hover:bg-orange-600"
              >
                <a href="tel:+905551234567">
                  <Phone className="w-4 h-4 mr-2" />
                  0555 123 45 67
                </a>
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-orange-400 transition">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hakkimizda"
                    className="hover:text-orange-400 transition"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hizmetler"
                    className="hover:text-orange-400 transition"
                  >
                    Hizmetler
                  </Link>
                </li>
                <li>
                  <Link
                    to="/iletisim"
                    className="hover:text-orange-400 transition"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Hizmetlerimiz</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/hizmetler/bakim"
                    className="hover:text-orange-400 transition"
                  >
                    Kombi Bakım
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hizmetler/tamir"
                    className="hover:text-orange-400 transition"
                  >
                    Kombi Tamir
                  </Link>
                </li>
                <li>
                  <Link
                    to="/kombi-servisi-ankara"
                    className="hover:text-orange-400 transition"
                  >
                    Ankara İlçeleri
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-sm">
                <li>Telefon: 0555 123 45 67</li>
                <li>Email: info@ankarakombi.com</li>
                <li>Adres: Ankara, Türkiye</li>
                <li>Çalışma Saatleri: 7/24</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>
              © {new Date().getFullYear()} Ankara Kombi Servisi. Tüm hakları
              saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}