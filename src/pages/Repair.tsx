import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Phone } from "lucide-react";

export default function Repair() {
  const commonIssues = [
    "Kombi hiç çalışmıyor",
    "Sıcak su gelmiyor",
    "Petekler ısınmıyor",
    "Kombi sürekli hata veriyor",
    "Basınç hızla düşüyor",
    "Gürültülü veya titreşimli çalışma",
    "Gaz kokusu hissediliyor",
    "Cihaz kendi kendine kapanıyor",
  ];

  return (
    <Layout>
      <SEO
        title="Kombi Tamir Hizmeti | Ankara Kombi Servisi"
        description="Kombi arızalarına hızlı çözümler. Profesyonel tamir hizmeti, orijinal yedek parça, garantili işçilik ve aynı gün servis imkanı."
        keywords="kombi tamir, kombi arıza tamiri, profesyonel kombi onarım, kombi servis"
      />

      <LocalBusinessSchema />

      <div className="bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Profesyonel Kombi Tamir Hizmeti
              </h1>
              <p className="text-xl text-orange-50 mb-8 leading-relaxed">
                Uzman ekip, hızlı teşhis ve garantili onarım ile aynı gün çözüm
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

        {/* DESCRIPTION */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-14">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Profesyonel Kombi Arıza Tespit ve Onarım Hizmeti
                </h2>

                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Kombinizde meydana gelen arızalar, hem konforu hem de
                  güvenliği olumsuz etkileyebilir. Uzman teknisyenlerimiz, tüm
                  marka ve modellerde hızlı arıza tespiti ve profesyonel onarım
                  hizmeti sunmaktadır.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-2">
                  Arızanın kaynağı detaylı şekilde incelenir, gerekli parça
                  değişimleri orijinal ekipmanlarla yapılır ve kombiniz ilk
                  günkü performansına yakın şekilde tekrar kullanıma hazır hâle
                  getirilir.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Hızlı servis, şeffaf fiyatlandırma ve garantili işçilik ile
                  güvenle hizmet alabilirsiniz.
                </p>
              </div>

              {/* COMMON ISSUES */}
              <Card className="mb-14 border-orange-100 shadow-sm">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Sık Karşılaşılan Kombi Arızaları
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">
                    {commonIssues.map((issue, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{issue}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-2xl text-center shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Kombi Arızası İçin Hemen Bize Ulaşın
                </h3>
                <p className="text-gray-700 mb-6 text-lg">
                  7/24 servis, hızlı çözüm ve garantili işçilik ile
                  yanınızdayız.
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
