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
    // Form submission logic here
    alert("Mesajınız alındı! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <Layout>
      <SEO
        title="İletişim | Ankara Kombi Servisi"
        description="Ankara Kombi Servisi ile iletişime geçin. 7/24 acil servis hattı: 0555 123 45 67. Kombi bakım ve tamir için hemen arayın."
        keywords="ankara kombi servisi iletişim, kombi servisi telefon, acil kombi servisi"
      />

      <div className="bg-white">
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">İletişim</h1>
              <p className="text-xl text-orange-50">
                Size nasıl yardımcı olabiliriz?
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Bize Ulaşın
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız Soyadınız
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

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
                      placeholder="0555 123 45 67"
                    />
                  </div>

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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Lütfen ihtiyacınızı detaylı olarak belirtin..."
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600"
                  >
                    Gönder
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  İletişim Bilgileri
                </h2>

                <div className="space-y-6">
                  <Card className="border-orange-100">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Telefon
                          </h3>
                          <a
                            href="tel:+905551234567"
                            className="text-orange-600 hover:text-orange-700 font-medium"
                          >
                            0555 123 45 67
                          </a>
                          <p className="text-sm text-gray-600 mt-1">
                            7/24 Acil Servis Hattı
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-100">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
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

                  <Card className="border-orange-100">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Adres
                          </h3>
                          <p className="text-gray-700">Ankara, Türkiye</p>
                          <p className="text-sm text-gray-600 mt-1">
                            Tüm ilçelere hizmet veriyoruz
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-100">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
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
