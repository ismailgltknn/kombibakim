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
  Wrench,
  CheckCircle,
  MapPin,
} from "lucide-react";

export default function Homepage() {
  const services = [
    {
      title: "Kombi Bakım",
      description:
        "Düzenli bakım ile kombininizin ömrünü uzatın ve verimli çalışmasını sağlayın.",
      icon: Wrench,
      link: "/hizmetler/bakim",
    },
    {
      title: "Kombi Tamir",
      description:
        "Arızalı kombileriniz için hızlı ve güvenilir tamir hizmeti sunuyoruz.",
      icon: Shield,
      link: "/hizmetler/tamir",
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

  return (
    <Layout>
      <SEO
        title="Ankara Kombi Servisi | 7/24 Profesyonel Kombi Bakım ve Tamir"
        description="Ankara'nın tüm ilçelerinde 7/24 profesyonel kombi bakım ve tamir hizmeti. Uzman kadro, uygun fiyat, garantili işçilik. Hemen arayın!"
        keywords="ankara kombi servisi, kombi bakım ankara, kombi tamir ankara, kombi servisi"
      />
      <LocalBusinessSchema />

      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-red-600 text-white py-20 overflow-hidden">
        {/* Background Image Area */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80"
            alt="Kombi Servisi"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ankara'da Güvenilir Kombi Servisi
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-50">
              7/24 Profesyonel Kombi Bakım ve Tamir Hizmeti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8"
              >
                <a href="tel:+905539354340">
                  <Phone className="w-5 h-5 mr-2" />
                  Hemen Ara: 0553 935 43 40
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8"
              >
                <Link to="/iletisim">Servis Çağır</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-orange-100">
                <CardContent className="pt-6">
                  <CheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kombileriniz için ihtiyacınız olan tüm hizmetleri profesyonel
              ekibimizle sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-orange-100 overflow-hidden"
              >
                {/* Service Image Area */}
                <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index === 0
                        ? "1621905251918-48416bd8575a"
                        : "1581092918056-0c4c3acd4789"
                    }?w=800&q=80`}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>

                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link}>Detaylı Bilgi</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Districts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hizmet Verdiğimiz İlçeler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ankara'nın tüm ilçelerinde hızlı ve güvenilir kombi servisi
              hizmeti sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
            {districts.map((district, index) => (
              <Link
                key={index}
                to={`/kombi-servisi-ankara/${district.toLowerCase()}`}
                className="bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 p-4 rounded-lg text-center font-medium text-gray-800 transition-all hover:shadow-md"
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

      {/* Why Choose Us Section with Image Background */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background Image Area */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80"
            alt="Profesyonel Servis"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Neden Bizi Tercih Etmelisiniz?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">7/24 Hizmet</h3>
                <p className="text-gray-300">
                  Hafta sonu ve tatil günleri dahil her zaman yanınızdayız.
                </p>
              </div>

              <div className="text-center">
                <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Garantili İşçilik</h3>
                <p className="text-gray-300">
                  Tüm hizmetlerimizde işçilik garantisi sunuyoruz.
                </p>
              </div>

              <div className="text-center">
                <Wrench className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Uzman Kadro</h3>
                <p className="text-gray-300">
                  Deneyimli ve sertifikalı teknisyenlerimizle hizmetinizdeyiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kombi Sorunlarınız İçin Hemen Arayın!
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Uzman ekibimiz size yardımcı olmak için hazır
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8"
          >
            <a href="tel:+905539354340">
              <Phone className="w-5 h-5 mr-2" />
              0553 935 43 40
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
