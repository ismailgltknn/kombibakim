import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";

const services: string[] = [
  "Petek ve radyatörlerin detaylı temizliği",
  "Tesisat içi tortu ve pas temizliği",
  "Isı verimliliğinin artırılması",
  "Su basınç ve sirkülasyon kontrolü",
  "Enerji tasarrufu sağlanması",
  "Gürültü ve tıkanıklık problemlerinin giderilmesi",
];

const RadiatorCleaning: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Petek Temizliği | Ankara Kombi Servisi"
        description="Petek temizliği hizmeti ile enerji tasarrufu ve verimli ısınma sağlayın. Uzman ekip, hızlı servis ve garantili işçilik."
        keywords="petek temizliği, kombi petek temizliği, radyatör temizliği, enerji tasarrufu"
      />
      <LocalBusinessSchema />

      <div className="bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Profesyonel Petek Temizliği Hizmeti
            </h1>
            <p className="text-xl text-orange-50 mb-8 leading-relaxed">
              Peteklerinizin verimini artırın ve enerji tasarrufu sağlayın.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-md"
            >
              <a href="tel:+905539354340">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara: 0553 935 43 40
              </a>
            </Button>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Petek Temizliği Neden Önemlidir?
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Düzenli petek temizliği, ısınma verimliliğini artırır, enerji
                tasarrufu sağlar ve radyatörlerdeki tıkanıklıkları önler.
                Tıkanmış petekler daha fazla enerji harcar ve odalar eşit
                ısınmaz.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Uzman ekiplerimiz peteklerinizi ve tesisatınızı detaylı şekilde
                temizler, su basıncını ve sirkülasyonu kontrol eder. Böylece
                konforlu ve tasarruflu bir ısınma sağlar.
              </p>
            </div>

            {/* SERVICES LIST */}
            <Card className="mb-14 border-orange-100 shadow-sm">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Petek Temizliği Hizmetinde Yapılan İşlemler
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {services.map((service, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-2xl text-center shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Petek Temizliğinizi Geciktirmeyin
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                Profesyonel petek temizliği, uygun fiyat ve hızlı servis
                avantajı ile yanınızdayız.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 rounded-full px-10 py-6 text-lg text-white font-semibold"
              >
                <a href="tel:+905539354340">
                  <Phone className="w-5 h-5 mr-2" />
                  0553 935 43 40
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RadiatorCleaning;
