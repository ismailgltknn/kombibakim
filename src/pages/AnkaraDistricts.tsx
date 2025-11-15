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
        title="Servis Bölgelerimiz | Ankara Kombi Servisi"
        description="Ankara'nın tüm ilçelerinde profesyonel kombi servisi. Çankaya, Keçiören, Yenimahalle, Mamak, Etimesgut, Sincan ve diğer ilçelerde 7/24 hizmet."
        keywords="ankara kombi servisi, etimesgut kombi, sincan kombi, çankaya kombi, keçiören kombi, yenimahalle kombi"
      />
      <LocalBusinessSchema />

      <div className="bg-white">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <MapPin className="w-16 h-16 mx-auto mb-6 drop-shadow-lg" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
                Ankara Servis Bölgeleri
              </h1>
              <p className="text-lg md:text-xl text-orange-100/90 drop-shadow-sm max-w-2xl mx-auto">
                Ankara'nın tüm ilçelerinde kombi bakımı, kombi tamiri, petek
                temizliği ve kombi montajı hizmetlerimizle 7/24 hızlı ve
                güvenilir servis sağlıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* DISTRICT LIST */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Hizmet Verdiğimiz İlçeler
              </h2>
              <p className="text-lg text-gray-600">
                Ankara'nın tüm ilçelerinde kombi bakım, tamir ve petek temizliği
                hizmeti sunuyoruz. Profesyonel ekibimiz ile günün her saatinde
                yanınızdayız.
              </p>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {districts.map((district, index) => (
                <Link
                  key={index}
                  to={`/kombi-servisi-ankara/${district.slug}`}
                  className="group block rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-orange-500 mx-auto mb-4" />

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {district.name}
                    </h3>

                    <p className="text-gray-600">{district.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
