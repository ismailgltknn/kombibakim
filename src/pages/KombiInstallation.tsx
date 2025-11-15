import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";

const installationSteps: string[] = [
  "Mevcut kombinin güvenli sökümü ve montaj öncesi hazırlık",
  "Yeni kombi montajı ve kurulumu",
  "Gaz ve su bağlantılarının güvenli şekilde yapılması",
  "Elektrik bağlantılarının kontrolü ve kurulumu",
  "Cihazın test edilerek çalışır hale getirilmesi",
  "Montaj sonrası kullanım ve güvenlik bilgilendirmesi",
];

const KombiInstallation: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Kombi Montaj | Ankara Profesyonel Kombi Servisi"
        description="Yeni kombi montaj hizmeti ile güvenli ve hızlı kurulum sağlayın. Uzman ekip, orijinal malzeme kullanımı ve garantili işçilik."
        keywords="kombi montaj, kombi kurulumu, yeni kombi montajı, profesyonel montaj"
      />
      <LocalBusinessSchema />

      <div className="bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kombi Montaj Hizmeti
            </h1>
            <p className="text-xl text-orange-50 mb-8 leading-relaxed">
              Yeni kombinizin güvenli ve hızlı şekilde montajı.
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
                Kombi Montajında Nelere Dikkat Ediyoruz?
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Yeni kombi montajı, cihazın güvenli çalışması ve uzun ömürlü
                olması için uzmanlık gerektirir. Montaj sırasında tüm
                bağlantılar kontrol edilir ve cihazın verimli çalışması
                sağlanır.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Uzman teknisyenlerimiz, montaj sonrası cihazın testlerini yapar
                ve kullanıcıyı güvenli kullanım konusunda bilgilendirir. Böylece
                sorunsuz ve güvenli bir kurulum sağlanır.
              </p>
            </div>

            {/* INSTALLATION STEPS */}
            <Card className="mb-14 border-orange-100 shadow-sm">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Montaj Hizmetinde Yapılan İşlemler
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {installationSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-2xl text-center shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Montaj İçin Hemen Bize Ulaşın
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                Profesyonel montaj hizmeti, uygun fiyat ve hızlı servis avantajı
                ile yanınızdayız.
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

export default KombiInstallation;
