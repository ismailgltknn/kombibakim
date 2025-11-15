import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Phone,
  Clock,
  Shield,
  ActivitySquare,
  Wrench,
  CheckCircle,
  MapPin,
  Columns,
  Box,
} from "lucide-react";

export default function Homepage() {
  const services = [
    {
      title: "Kombi Bakım",
      description:
        "Düzenli bakım ile kombininizin ömrünü uzatın ve verimli çalışmasını sağlayın.",
      icon: ActivitySquare,
      link: "/hizmetler/bakim",
      image: "/images/kombi-bakim-ankara.png",
    },
    {
      title: "Kombi Tamir",
      description:
        "Arızalı kombileriniz için hızlı ve güvenilir tamir hizmeti sunuyoruz.",
      icon: Wrench,
      link: "/hizmetler/tamir",
      image: "/images/kombi-tamir-ankara.png",
    },
  ];

  const districts = [
    "Çankaya",
    "Keçiören",
    "Yenimahalle",
    "Mamak",
    "Etimesgut",
    "Altındağ",
    "Sincan",
    "Pursaklar",
    "Gölbaşı",
  ];

  const features = [
    "7/24 Hızlı Servis",
    "Uzman Teknisyen Kadrosu",
    "Uygun Fiyat Garantisi",
    "Tüm Marka Kombi Servisi",
    "Garantili İşçilik",
    "Aynı Gün Hizmet",
  ];

  function toSlug(str) {
    const map = {
      ç: "c",
      Ç: "c",
      ğ: "g",
      Ğ: "g",
      ü: "u",
      Ü: "u",
      ş: "s",
      Ş: "s",
      ö: "o",
      Ö: "o",
      ı: "i",
      İ: "i",
    };
    return str
      .split("")
      .map((char) => map[char] || char)
      .join("")
      .toLowerCase()
      .replace(/\s+/g, "-"); // boşluk varsa tire ile değiştir
  }

  return (
    <Layout>
      <SEO
        title="Ankara Kombi Servisi | 7/24 Profesyonel Kombi Bakım ve Tamir"
        description="Ankara'nın tüm ilçelerinde 7/24 profesyonel kombi bakım ve kombi tamir hizmeti. Uzman kadro, uygun fiyat, garantili işçilik. Hemen arayın!"
        keywords="ankara kombi servisi, kombi bakım ankara, kombi tamir ankara, kombi servisi"
      />

      <LocalBusinessSchema />

      {/* HERO */}
      <section className="relative w-full bg-gray-900 text-white overflow-hidden group">
        {/* HERO BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/ankara-kombi-servisi.png"
            alt="Ankara kombi servisi teknisyeni"
            className="w-full h-full object-cover object-center opacity-60 transition-transform duration-700 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center py-24 md:py-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Ankara'da 7/24 Profesyonel Kombi Servisi
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
              Uzman teknisyen kadromuzla <strong>kombi bakım</strong>,
              <strong> tamir</strong> ve <strong>arıza</strong> hizmetlerinde
              hızlı, güvenilir ve garantili çözümler sunuyoruz.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              {/* Hemen Ara */}
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-lg px-10 py-6 shadow-lg hover:from-orange-600 hover:to-red-600 hover:shadow-2xl rounded-full transition-all"
              >
                <a href="tel:+905539354340" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  0553 935 43 40 — Hemen Ara
                </a>
              </Button>

              {/* Bizimle İletişime Geçin */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="
                  border border-orange-500 text-gray-300
                  font-semibold text-lg px-10 py-6 rounded-full
                  bg-white/20
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500
                  hover:text-white hover:shadow-lg
                  flex items-center justify-center gap-2
                "
              >
                <Link to="/iletisim" className="flex items-center gap-1">
                  Bizimle İletişime Geçin
                  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Button>
            </div>

            {/* TRUST BADGE */}
            <div className="flex items-center justify-center gap-3 text-gray-300 text-sm">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>1000+ mutlu müşteri • Aynı gün servis</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Neden Bizi Seçmelisiniz?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Clock,
                title: "7/24 Hizmet",
                desc: "Hafta sonu ve tatil günleri dahil her zaman yanınızdayız.",
              },
              {
                icon: Shield,
                title: "Garantili İşçilik",
                desc: "Tüm hizmetlerimizde işçilik garantisi sunuyoruz.",
              },
              {
                icon: Wrench,
                title: "Uzman Kadro",
                desc: "Deneyimli ve sertifikalı teknisyenlerimizle hizmetinizdeyiz.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                role="region"
                aria-label={item.title}
              >
                <item.icon
                  className="w-14 h-14 text-orange-500 mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ankara genelinde kombi bakım, tamir, petek temizliği ve montaj
              hizmetlerini uzman teknisyenlerimizle hızlı ve güvenilir şekilde
              sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Kombi Bakım",
                description:
                  "Düzenli bakım ile kombinizin ömrünü uzatın ve verimli çalışmasını sağlayın.",
                icon: ActivitySquare,
                link: "/hizmetler/bakim",
                image: "/images/kombi-bakim-ankara.png",
              },
              {
                title: "Kombi Tamir",
                description:
                  "Arızalı kombileriniz için hızlı ve güvenilir tamir hizmeti sunuyoruz.",
                icon: Wrench,
                link: "/hizmetler/tamir",
                image: "/images/kombi-tamir-ankara.png",
              },
              {
                title: "Petek Temizliği",
                description:
                  "Peteklerinizin performansını artırmak ve enerji tasarrufu sağlamak için profesyonel petek temizliği hizmeti.",
                icon: Columns,
                link: "/hizmetler/petek-temizligi",
                image: "/images/kombi-bakim-ankara.png",
              },
              {
                title: "Kombi Montaj",
                description:
                  "Yeni kombi kurulumlarınızda güvenli ve hızlı montaj hizmeti. Tüm marka ve modellere uygun montaj çözümleri.",
                icon: Box,
                link: "/hizmetler/montaj",
                image: "/images/kombi-tamir-ankara.png",
              },
            ].map((service, idx) => (
              <a
                href={service.link}
                key={idx}
                className="group flex flex-col rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} | Ankara Kombi Servisi`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <CardContent className="flex flex-col flex-1 justify-between p-6 text-center">
                  <div>
                    <service.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>

                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-md rounded-full transition-all py-3 mt-auto"
                  >
                    <span>Detaylı Bilgi</span>
                  </Button>
                </CardContent>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DISTRICTS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <MapPin
              className="w-12 h-12 text-orange-500 mx-auto mb-4"
              aria-hidden="true"
            />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Hizmet Verdiğimiz İlçeler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ankara'nın tüm ilçelerinde hızlı ve güvenilir kombi servisi
              hizmeti sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-8">
            {districts.map((district, idx) => (
              <Link
                key={idx}
                to={`/kombi-servisi-ankara/${toSlug(district)}`}
                className="block bg-white border border-orange-100 rounded-2xl p-5 text-center font-medium text-gray-800 shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-orange-50"
                aria-label={`${district} ilçesinde kombi servisi`}
              >
                {district}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/kombi-servisi-ankara">Tüm İlçeleri Gör</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Kombi Sorunlarınız İçin Hemen Arayın!
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Uzman ekibimiz size yardımcı olmak için hazır
          </p>

          <Button
            asChild
            size="lg"
            className="inline-flex items-center gap-3 bg-orange-500 text-white hover:bg-orange-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all px-6 py-3"
          >
            <a href="tel:+905539354340" className="flex items-center">
              <Phone className="w-5 h-5" /> <span>0553 935 43 40</span>
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
