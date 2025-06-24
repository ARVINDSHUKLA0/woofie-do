export default function BreadcrumbSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://woofiedo.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://woofiedo.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://woofiedo.com/services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Vaccination",
        "item": "https://woofiedo.com/services/vaccination"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Grooming",
        "item": "https://woofiedo.com/services/grooming"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": "https://woofiedo.com/contact"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}