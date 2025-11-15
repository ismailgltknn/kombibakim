import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Phone } from "lucide-react";

export default function Repair() {
  const commonIssues = [
    "Kombi çalışmıyor",
    "Sıcak su gelmiyor",
    "Kalorifer ısınmıyor",
    "Kombi hata veriyor",
    "Basınç düşüyor",
    "Gürültülü çalışma",
    "Gaz kokusu",
    "Sık sık kapanma",
  ];

  return (
    <Layout>
      <SEO
        title="Kombi Tamir Hizmeti | Ankara Kombi Servisi"
        description="Arızalı kombileriniz için hızlı ve güvenilir tamir hizmeti. Tüm marka kombiler için uzman kadro, aynı gün servis, garantili işçilik."
        keywords="kombi tamir, kombi arıza, kombi onarım, acil kombi servisi"
      />
      <LocalBusinessSchema />

      <div className="bg-white">
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kombi Tamir Hizmeti
              </h1>
              <p className="text-xl text-orange-50 mb-8">
                Hızlı teşhis, garantili onarım
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                <a href="tel:+905539354340">
                  <Phone className="w-5 h-5 mr-2" />
                  Acil Servis: 0553 935 43 40
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
                  Profesyonel Kombi Tamir Hizmeti
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Kombilerinizde meydana gelen arızalar için 7/24 hızlı ve
                  güvenilir tamir hizmeti sunuyoruz. Uzman teknisyenlerimiz, tüm
                  marka ve modellerde arıza tespiti ve onarım konusunda
                  deneyimlidir.
                </p>
                <p className="text-lg text-gray-700">
                  Orijinal yedek parça kullanımı ve garantili işçilik ile
                  kombilerinizi en kısa sürede çalışır hale getiriyoruz. Aynı
                  gün servis garantisi ile yanınızdayız.
                </p>
              </div>

              <Card className="mb-12 border-orange-100">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Sık Karşılaşılan Arızalar
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {commonIssues.map((issue, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{issue}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Kombi Arızası İçin Hemen Arayın
                </h3>
                <p className="text-gray-700 mb-6">
                  7/24 acil servis hizmeti ile yanınızdayız. Aynı gün çözüm
                  garantisi.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </section>
      </div>
    </Layout>
  );
}
