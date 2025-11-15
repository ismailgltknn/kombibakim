import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function AnkaraDistricts() {
  const districts = [
    {
      name: "Çankaya",
      slug: "cankaya",
      description: "Çankaya'da profesyonel kombi servisi",
    },
    {
      name: "Keçiören",
      slug: "kecioren",
      description: "Keçiören'de güvenilir kombi bakım ve tamir",
    },
    {
      name: "Yenimahalle",
      slug: "yenimahalle",
      description: "Yenimahalle'de 7/24 kombi servisi",
    },
    {
      name: "Mamak",
      slug: "mamak",
      description: "Mamak'ta hızlı kombi tamir hizmeti",
    },
    {
      name: "Etimesgut",
      slug: "etimesgut",
      description: "Etimesgut'ta uzman kombi servisi",
    },
    {
      name: "Altındağ",
      slug: "altindag",
      description: "Altındağ'da garantili kombi bakımı",
    },
    {
      name: "Sincan",
      slug: "sincan",
      description: "Sincan'da acil kombi servisi",
    },
    {
      name: "Pursaklar",
      slug: "pursaklar",
      description: "Pursaklar'da profesyonel kombi tamiri",
    },
    {
      name: "Gölbaşı",
      slug: "golbasi",
      description: "Gölbaşı'nda kombi bakım hizmeti",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Ankara İlçeleri Kombi Servisi | Tüm İlçelere Hizmet"
        description="Ankara'nın tüm ilçelerinde profesyonel kombi servisi. Çankaya, Keçiören, Yenimahalle, Mamak, Etimesgut ve diğer ilçelerde 7/24 hizmet."
        keywords="ankara kombi servisi, çankaya kombi, keçiören kombi, yenimahalle kombi"
      />
      <LocalBusinessSchema />

      <div className="bg-white">
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <MapPin className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ankara İlçeleri Kombi Servisi
              </h1>
              <p className="text-xl text-orange-50">
                Ankara'nın tüm ilçelerinde 7/24 hizmetinizdeyiz
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-lg text-gray-700">
                  Ankara'nın tüm ilçelerinde profesyonel kombi bakım ve tamir
                  hizmeti sunuyoruz. Uzman kadromuz ve hızlı servis anlayışımız
                  ile her zaman yanınızdayız.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {districts.map((district) => (
                  <Link
                    key={district.slug}
                    to={`/kombi-servisi-ankara/${district.slug}`}
                  >
                    <Card className="h-full hover:shadow-lg transition-all border-orange-100 hover:border-orange-300">
                      <CardContent className="p-6">
                        <MapPin className="w-8 h-8 text-orange-500 mb-3" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {district.name}
                        </h3>
                        <p className="text-gray-600">{district.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
