import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mesajınız alındı! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

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
              {/* CONTACT FORM */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Bize Ulaşın
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* NAME */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız Soyadınız
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon Numaranız
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="0553 935 43 40"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta Adresiniz
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="ornek@email.com"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <Textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Lütfen ihtiyacınızı detaylı olarak belirtin..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold"
                  >
                    Gönder
                  </Button>
                </form>
              </div>

              {/* CONTACT INFO */}
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
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
