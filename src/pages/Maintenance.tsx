import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";

export default function Maintenance() {
  const services = [
    "Kombi genel kontrolü ve temizliği",
    "Yanma odası ve brülör temizliği",
    "Petek ve sistem temizliği",
    "Emniyet ve güvenlik kontrolü",
    "Gaz kaçağı kontrolü",
    "Basınç ve sıcaklık ayarları",
    "Genleşme deposu kontrolü",
    "Elektronik kart kontrolü",
  ];

  return (
    <Layout>
      <SEO
        title="Kombi Bakım Hizmeti | Ankara Kombi Servisi"
        description="Profesyonel kombi bakım hizmeti ile kombininizin ömrünü uzatın. Düzenli bakım, temizlik ve kontrol hizmetleri. Uygun fiyat, garantili işçilik."
        keywords="kombi bakım, kombi temizliği, kombi kontrolü, düzenli bakım"
      />
      <LocalBusinessSchema />

      <div className="bg-white">
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kombi Bakım Hizmeti
              </h1>
              <p className="text-xl text-orange-50 mb-8">
                Düzenli bakım ile kombininizin ömrünü uzatın
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
                  Kombi Bakımı Neden Önemlidir?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Düzenli kombi bakımı, cihazınızın verimli çalışmasını sağlar,
                  enerji tasarrufu yapmanıza yardımcı olur ve olası arızaları
                  önler. Yılda en az bir kez yapılması gereken kombi bakımı,
                  güvenli kullanım için de kritik öneme sahiptir.
                </p>
                <p className="text-lg text-gray-700">
                  Uzman teknisyenlerimiz, kombininizin tüm parçalarını kontrol
                  eder, gerekli temizlik ve ayarlamaları yapar. Böylece
                  kombininiz daha uzun ömürlü ve verimli çalışır.
                </p>
              </div>

              <Card className="mb-12 border-orange-100">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Bakım Hizmetimiz Kapsamında
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
                  Kombi Bakımı İçin Hemen Arayın
                </h3>
                <p className="text-gray-700 mb-6">
                  Uygun fiyat ve garantili işçilik ile profesyonel bakım hizmeti
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
