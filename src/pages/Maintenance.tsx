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
    "Petek ve tesisat temizliği",
    "Emniyet ve güvenlik ekipmanları kontrolü",
    "Gaz kaçağı kontrolü",
    "Basınç ve sıcaklık dengesi",
    "Genleşme tankı kontrolü",
    "Elektronik kart ve sensör kontrolü",
  ];

  return (
    <Layout>
      <SEO
        title="Kombi Bakım Hizmeti | Ankara Kombi Servisi"
        description="Profesyonel kombi bakım hizmeti ile cihazınızın performansını artırın. Düzenli bakım, temizlik, kontrol ve enerji tasarrufu sağlayan çözümler. Uygun fiyat ve garantili işçilik."
        keywords="kombi bakım, kombi bakım hizmeti, kombi temizliği, profesyonel kombi bakımı"
      />

      <LocalBusinessSchema />

      <div className="bg-white">
        {/* --- HERO BÖLÜMÜ --- */}
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Profesyonel Kombi Bakım Hizmeti
              </h1>
              <p className="text-xl text-orange-50 mb-8 leading-relaxed">
                Düzenli bakım ile kombiniz daha güvenli, daha verimli ve daha
                uzun ömürlü çalışır.
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
          </div>
        </section>

        {/* --- AÇIKLAMA BÖLÜMÜ --- */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-14">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Kombi Bakımı Neden Gereklidir?
                </h2>

                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Düzenli kombi bakımı, cihazınızın daha verimli çalışmasını
                  sağlar, enerji tasarrufu yapmanıza katkı sağlar ve
                  oluşabilecek arızaların önüne geçer. Yılda bir kez yapılan
                  bakım, hem güvenlik hem de performans için büyük önem taşır.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Alanında uzman ekiplerimiz, kombinizin tüm bileşenlerini
                  titizlikle kontrol eder; gerekli temizlik, ayar ve güvenlik
                  testlerini gerçekleştirir. Böylece cihazınız daha stabil
                  çalışır ve ani arızaların önüne geçilir.
                </p>
              </div>

              {/* --- HİZMETLER --- */}
              <Card className="mb-14 border-orange-100 shadow-sm">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Kombi Bakımında Yapılan İşlemler
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

              {/* --- CALL TO ACTION --- */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-2xl text-center shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Kombi Bakımınızı Geciktirmeyin
                </h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Profesyonel bakım hizmeti, uygun fiyat ve hızlı servis
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
          </div>
        </section>
      </div>
    </Layout>
  );
}
