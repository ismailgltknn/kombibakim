import { useEffect } from "react";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  telephone?: string;
  areaServed?: string[];
}

export default function LocalBusinessSchema({
  name = "Ankara Kombi Servisi",
  description = "Ankara'nın tüm ilçelerinde profesyonel kombi bakım ve tamir hizmeti",
  telephone = "+905551234567",
  areaServed = [
    "Çankaya",
    "Keçiören",
    "Yenimahalle",
    "Mamak",
    "Etimesgut",
    "Altındağ",
    "Sincan",
    "Pursaklar",
    "Gölbaşı",
  ],
}: LocalBusinessSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name,
      description,
      telephone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ankara",
        addressCountry: "TR",
      },
      areaServed: areaServed.map((area) => ({
        "@type": "City",
        name: area,
      })),
      openingHours: "Mo-Su 00:00-23:59",
      priceRange: "$$",
    };

    let scriptElement = document.querySelector(
      'script[type="application/ld+json"]'
    );

    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify(schema);

    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [name, description, telephone, areaServed]);

  return null;
}
