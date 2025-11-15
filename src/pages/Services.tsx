import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Shield } from "lucide-react";

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Hizmetlerimiz | Ankara Kombi Servisi"
        description="Kombi bakım, tamir, petek temizliği ve montaj hizmetleri. Tüm marka kombiler için profesyonel servis hizmeti."
        keywords="kombi bakım, kombi tamir, kombi servisi, petek temizliği"
      />

      <div className="bg-white">
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hizmetlerimiz
              </h1>
              <p className="text-xl text-orange-50">
                Kombileriniz için profesyonel çözümler
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="p-8">
                  <Wrench className="w-16 h-16 text-orange-500 mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Kombi Bakım
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Düzenli bakım ile kombininizin ömrünü uzatın, enerji
                    tasarrufu sağlayın ve güvenli kullanım için profesyonel
                    bakım hizmeti alın.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/hizmetler/bakim">Detaylı Bilgi</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="p-8">
                  <Shield className="w-16 h-16 text-orange-500 mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Kombi Tamir
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Arızalı kombileriniz için hızlı teşhis ve onarım. Tüm marka
                    ve modellerde uzman kadromuzla garantili tamir hizmeti.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/hizmetler/tamir">Detaylı Bilgi</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
