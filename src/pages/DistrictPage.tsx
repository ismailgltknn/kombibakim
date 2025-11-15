import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";

export default function DistrictPage() {
  const { district } = useParams<{ district: string }>();

  const districtNames: Record<string, string> = {
    cankaya: "Çankaya",
    kecioren: "Keçiören",
    yenimahalle: "Yenimahalle",
    mamak: "Mamak",
    etimesgut: "Etimesgut",
    altindag: "Altındağ",
    sincan: "Sincan",
    pursaklar: "Pursaklar",
    golbasi: "Gölbaşı",
  };

  const districtName = districtNames[district || ""] || "Ankara";

  const services = [
    "Kombi bakım ve temizliği",
    "Kombi arıza tamiri",
    "Petek temizliği",
    "Kombi montajı",
    "Acil servis hizmeti",
    "Tüm marka kombi servisi",
  ];

  return (
    <Layout>
      <SEO
        title={`${districtName} Kombi Servisi | Profesyonel ve Garantili Hizmet`}
        description={`${districtName} için uzman kombi bakım, arıza tamiri, petek temizliği ve montaj hizmeti. 7/24 acil servis ve aynı gün çözüm.`}
        keywords={`${districtName} kombi servisi, ${districtName} kombi bakım, ${districtName} kombi tamir`}
      />

      <LocalBusinessSchema areaServed={[districtName]} />

      <div className="bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {districtName} Kombi Servisi
              </h1>
              <p className="text-xl text-orange-50 mb-8">
                {districtName} için 7/24 profesyonel kombi bakım ve tamir
                hizmeti
              </p>

              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold"
              >
                <a href="tel:+905539354340">
                  <Phone className="w-5 h-5 mr-2" />
                  Hemen Ara: 0553 935 43 40
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* AÇIKLAMA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-14">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {districtName} için Güvenilir Kombi Servisi
                </h2>

                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {districtName} bölgesine kombi bakım, arıza tamiri, petek
                  temizliği ve uzman teknik servis hizmeti sunuyoruz. Deneyimli
                  teknisyen ekibimiz, tüm marka ve modellerde hızlı ve garantili
                  çözümler üretmektedir.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Uygun fiyat politikası, kaliteli işçilik ve orijinal yedek
                  parça kullanımı ile {districtName} için güvenilir kombi
                  servisi sağlıyoruz. Aynı gün içinde servis hizmeti ile
                  müşterilerimize hızlı dönüş sağlıyoruz.
                </p>
              </div>

              {/* HİZMETLER */}
              <Card className="mb-14 border-orange-100 shadow-sm">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {districtName} Hizmet Bölgemizde Sunulan İşlemler
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-start space-x-3">
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
                  {districtName} için Kombi Servis Hizmeti
                </h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Aynı gün servis – Uygun fiyat – Garantili işçilik
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 rounded-full px-10 py-6 text-lg"
                >
                  <a href="tel:+905539354340">
                    <Phone className="w-5 h-5 mr-2" />
                    0553 935 43 40
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
