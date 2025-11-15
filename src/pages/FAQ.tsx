import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Kombi bakımı ne sıklıkla yapılmalıdır?",
      answer:
        "Kombi bakımı yılda en az bir kez, tercihen ısınma sezonundan önce yapılmalıdır. Düzenli bakım, kombininizin verimli çalışmasını sağlar ve arıza riskini azaltır.",
    },
    {
      question: "Kombi servisi ne kadar sürer?",
      answer:
        "Standart bir kombi bakımı yaklaşık 1-2 saat sürmektedir. Arıza durumunda süre, arızanın türüne ve yedek parça ihtiyacına göre değişebilir.",
    },
    {
      question: "Hangi marka kombilere servis veriyorsunuz?",
      answer:
        "Vaillant, Baymak, Arçelik, Bosch, Protherm, Demirdöküm, Ferroli, Buderus ve diğer tüm marka kombilere profesyonel servis hizmeti sunuyoruz.",
    },
    {
      question: "Acil durumlarda ne kadar sürede gelirsiniz?",
      answer:
        "Acil servis çağrılarında, Ankara'nın tüm ilçelerine ortalama 1-2 saat içinde ulaşıyoruz. Trafik ve mesafe durumuna göre bu süre değişebilir.",
    },
    {
      question: "Kombi bakım fiyatları nedir?",
      answer:
        "Kombi bakım fiyatları, kombi markası ve modeline göre değişiklik gösterebilir. Detaylı fiyat bilgisi için bizi arayabilir veya iletişim formunu doldurabilirsiniz.",
    },
    {
      question: "İşçilik garantisi veriyor musunuz?",
      answer:
        "Evet, tüm bakım ve tamir hizmetlerimizde işçilik garantisi sunuyoruz. Kullanılan orijinal yedek parçalar için de üretici garantisi geçerlidir.",
    },
    {
      question: "Kombi basıncı düşerse ne yapmalıyım?",
      answer:
        "Kombi basıncı düşerse, öncelikle su doldurma musluğundan sisteme su ekleyerek basıncı 1-1.5 bar arasına getirmelisiniz. Basınç sürekli düşüyorsa, sistem kaçağı olabilir ve servis çağırmalısınız.",
    },
    {
      question: "Petek temizliği ne zaman yapılmalı?",
      answer:
        "Petek temizliği, petekleriniz homojen ısınmıyorsa veya kombi sık sık basınç kaybediyorsa yapılmalıdır. Genel olarak 2-3 yılda bir petek temizliği önerilir.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Sık Sorulan Sorular | Ankara Kombi Servisi"
        description="Kombi bakımı, tamiri ve servisi hakkında sık sorulan sorular ve cevapları. Kombi ile ilgili merak ettikleriniz."
        keywords="kombi sss, kombi soruları, kombi bakım soruları"
      />

      <div className="bg-white">
        <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sık Sorulan Sorular
              </h1>
              <p className="text-xl text-orange-50">
                Kombi servisi hakkında merak ettikleriniz
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-orange-100 rounded-lg px-6 bg-white"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
