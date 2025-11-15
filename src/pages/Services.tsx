import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ActivitySquare, Wrench, Columns, Box } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: ActivitySquare,
      title: "Kombi Bakım",
      description:
        "Düzenli bakım ile kombinizin ömrünü uzatın, enerji tasarrufu sağlayın ve güvenli kullanım için profesyonel bakım hizmeti alın.",
      link: "/hizmetler/bakim",
    },
    {
      icon: Wrench,
      title: "Kombi Tamir",
      description:
        "Arızalı kombileriniz için hızlı teşhis ve onarım. Tüm marka ve modellerde uzman kadromuzla garantili tamir hizmeti.",
      link: "/hizmetler/tamir",
    },
    {
      icon: Columns,
      title: "Petek Temizliği",
      description:
        "Peteklerinizin performansını artırmak ve enerji tasarrufu sağlamak için profesyonel petek temizliği hizmeti.",
      link: "/hizmetler/petek-temizligi",
    },
    {
      icon: Box,
      title: "Kombi Montaj",
      description:
        "Yeni kombi kurulumlarınızda güvenli ve hızlı montaj hizmeti. Tüm marka ve modellere uygun montaj çözümleri.",
      link: "/hizmetler/montaj",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Hizmetlerimiz | Ankara Kombi Servisi"
        description="Kombi bakım, kombi tamir, petek temizliği ve montaj hizmetleri. Tüm marka kombiler için profesyonel servis hizmeti."
        keywords="kombi bakım, kombi tamir, kombi servisi, petek temizliği, kombi montaj"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
                Hizmetlerimiz
              </h1>
              <p className="text-xl md:text-2xl text-orange-100/90 drop-shadow-sm">
                Kombileriniz için profesyonel çözümler sunuyoruz
              </p>
            </div>
          </div>
        </section>

        {/* Services Cards */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Neler Yapıyoruz
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ankara genelinde kombi bakım, tamir, petek temizliği ve montaj
                hizmetlerini uzman teknisyenlerimizle hızlı ve güvenilir şekilde
                sunuyoruz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {services.map((service, idx) => (
                <a
                  href={service.link}
                  key={idx}
                  className="group flex flex-col rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <CardContent className="flex flex-col flex-1 justify-between p-6 text-center">
                    <div>
                      <service.icon className="w-14 h-14 text-orange-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                    </div>

                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-md rounded-full transition-all py-3 mt-auto"
                    >
                      <span>Detaylı Bilgi</span>
                    </Button>
                  </CardContent>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
