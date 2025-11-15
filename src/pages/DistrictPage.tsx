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
        title={`${districtName} Kombi Servisi | 7/24 Profesyonel Hizmet`}
        description={`${districtName}'da profesyonel kombi bakım ve tamir hizmeti. 7/24 acil servis, uzman kadro, uygun fiyat. Hemen arayın!`}
        keywords={`${districtName} kombi servisi, ${districtName} kombi bakım, ${districtName} kombi tamir`}
      />
      <LocalBusinessSchema areaServed={[districtName]} />

      <div className="bg-white">
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {districtName} Kombi Servisi
              </h1>
              <p className="text-xl text-orange-50 mb-8">
                {districtName}'da 7/24 profesyonel kombi bakım ve tamir hizmeti
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                <a href="tel:+905539354340">
                  <Phone className="w-5 h-5 mr-2" />
                  Hemen Ara: 0553 935 43 40
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {districtName}'da Güvenilir Kombi Servisi
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  {districtName} bölgesinde yaşayan müşterilerimize profesyonel
                  kombi bakım ve tamir hizmeti sunuyoruz. Uzman teknisyen
                  kadromuz, 7/24 hizmet anlayışı ile kombilerinizin tüm
                  ihtiyaçları için yanınızdadır.
                </p>
                <p className="text-lg text-gray-700">
                  Tüm marka ve modellerde kombi servisi, düzenli bakım, arıza
                  tamiri ve acil müdahale hizmetleri için bizi arayabilirsiniz.
                  Aynı gün servis garantisi ile hızlı çözüm sunuyoruz.
                </p>
              </div>

              <Card className="mb-12 border-orange-100">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {districtName}'da Sunduğumuz Hizmetler
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {districtName}'da Kombi Servisi İçin Hemen Arayın
                </h3>
                <p className="text-gray-700 mb-6">
                  Uygun fiyat, garantili işçilik ve hızlı servis
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600"
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
