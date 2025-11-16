import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="İletişim | Ankara Kombi Servisi"
        description="Ankara Kombi Servisi ile iletişime geçin. 7/24 acil servis hattı: 0553 935 43 40. Kombi bakım, tamir ve montaj hizmetleri için hemen ulaşın."
        keywords="ankara kombi servisi iletişim, kombi servisi telefon, acil kombi servisi"
      />

      <div className="bg-white">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-16 border-b border-orange-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                İletişim
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Size nasıl yardımcı olabiliriz?
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* LEFT COLUMN — CONTACT INFO */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  İletişim Bilgileri
                </h2>

                <div className="space-y-6">
                  {/* PHONE */}
                  <Card className="border-orange-100 shadow-sm hover:shadow-md transition-all rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-orange-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            Telefon
                          </h3>
                          <a
                            href="tel:+905539354340"
                            className="text-orange-600 font-medium hover:text-orange-700"
                          >
                            0553 935 43 40
                          </a>
                          <p className="text-sm text-gray-600 mt-1">
                            7/24 Acil Servis Hattı
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* EMAIL */}
                  <Card className="border-orange-100 shadow-sm hover:shadow-md transition-all rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-orange-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            E-posta
                          </h3>
                          <a
                            href="mailto:info@ankarakombi.com"
                            className="text-orange-600 hover:text-orange-700"
                          >
                            info@ankarakombi.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* ADDRESS */}
                  <Card className="border-orange-100 shadow-sm hover:shadow-md transition-all rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-orange-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            Adres
                          </h3>
                          <p className="text-gray-700">Ankara, Türkiye</p>
                          <p className="text-sm text-gray-600 mt-1">
                            Tüm ilçelere hızlı servis
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* HOURS */}
                  <Card className="border-orange-100 shadow-sm hover:shadow-md transition-all rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-orange-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            Çalışma Saatleri
                          </h3>
                          <p className="text-gray-700">7/24 Hizmet</p>
                          <p className="text-sm text-gray-600 mt-1">
                            Hafta sonu ve tatil günleri dahil
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* RIGHT COLUMN — GOOGLE MAP */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Konum</h2>

                <div className="rounded-xl overflow-hidden shadow-md border border-orange-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1391.6826576638425!2d32.647553767656035!3d39.93504481442322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU2JzA2LjIiTiAzMsKwMzgnNTEuMSJF!5e0!3m2!1str!2str!4v1763292010084!5m2!1str!2str"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
