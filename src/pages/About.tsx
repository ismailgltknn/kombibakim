import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Güvenilirlik",
      description: "Müşteri memnuniyeti odaklı, güvenilir hizmet anlayışı",
    },
    {
      icon: Users,
      title: "Uzman Kadro",
      description: "Sertifikalı ve deneyimli teknisyen ekibimiz",
    },
    {
      icon: Award,
      title: "Kalite",
      description: "Yüksek kalite standartlarında hizmet garantisi",
    },
    {
      icon: Clock,
      title: "Hızlı Hizmet",
      description: "7/24 acil servis ve aynı gün çözüm",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Hakkımızda | Ankara Kombi Servisi"
        description="Ankara'da 10 yılı aşkın tecrübesiyle güvenilir kombi bakım ve tamir hizmeti sunan profesyonel ekibimizi tanıyın."
        keywords="ankara kombi servisi hakkında, kombi servisi ekibi, profesyonel kombi tamiri"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hakkımızda
              </h1>
              <p className="text-xl text-orange-50">
                Ankara'nın güvenilir kombi servisi
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Ankara Kombi Servisi olarak, 10 yılı aşkın süredir Ankara'nın
                  tüm ilçelerinde profesyonel kombi bakım ve tamir hizmeti
                  sunuyoruz. Müşteri memnuniyetini ön planda tutan anlayışımız
                  ve uzman kadromuzla, kombilerinizin güvenli ve verimli
                  çalışmasını sağlıyoruz.
                </p>

                <p className="text-lg text-gray-700 mb-6">
                  Tüm marka ve modellerde kombi servisi konusunda uzmanlaşmış
                  ekibimiz, 7/24 hizmet vermektedir. Düzenli bakım, arıza
                  tamiri, petek temizliği ve kombi montajı gibi tüm
                  ihtiyaçlarınız için yanınızdayız.
                </p>

                <p className="text-lg text-gray-700">
                  Sertifikalı teknisyenlerimiz, en son teknoloji ekipmanlar
                  kullanarak hızlı ve kaliteli hizmet sunmaktadır. Garantili
                  işçilik ve uygun fiyat politikamızla Ankara'nın en çok tercih
                  edilen kombi servisi olmaktan gurur duyuyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Değerlerimiz
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-orange-100">
                  <CardContent className="pt-8 pb-6">
                    <value.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
