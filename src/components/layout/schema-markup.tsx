import { SITE } from "@/lib/constants";

export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: "ACE CDL School",
    url: SITE.url,
    telephone: `+1${SITE.phone.replace(/-/g, "")}`,
    email: SITE.email,
    description:
      "Professional CDL truck driving school in Mansfield, Texas offering Class A and Class B CDL training programs with 97% pass rate and job placement assistance.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.5632,
      longitude: -97.1417,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "856",
      bestRating: "5",
    },
    priceRange: "$3,195 - $5,495",
    areaServed: [
      { "@type": "City", name: "Mansfield, TX" },
      { "@type": "City", name: "Arlington, TX" },
      { "@type": "City", name: "Fort Worth, TX" },
      { "@type": "City", name: "Dallas, TX" },
      { "@type": "State", name: "Texas" },
    ],
    hasCredential: [
      "Texas Workforce Commission Approved",
      "Federal Training Provider Registry",
      "Licensed Third Party CDL Testing",
    ],
    sameAs: [SITE.facebook],
  };

  const courseSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "CDL Class A - 3 Week Day Program",
      description:
        "Comprehensive CDL Class A training program including ELDT theory, backing skills, road training, and DPS test preparation.",
      provider: { "@id": `${SITE.url}/#organization` },
      offers: {
        "@type": "Offer",
        price: "5095",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        category: "CDL Training",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "onsite",
        duration: "P3W",
        courseSchedule: {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: ["Monday"],
        },
      },
      educationalCredentialAwarded: "CDL Class A License",
    },
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "CDL Class B - 2 Week Program",
      description:
        "CDL Class B training program for bus driving, delivery, and straight truck operations.",
      provider: { "@id": `${SITE.url}/#organization` },
      offers: {
        "@type": "Offer",
        price: "3195",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        category: "CDL Training",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "onsite",
        duration: "P2W",
      },
      educationalCredentialAwarded: "CDL Class B License",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to get a CDL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our CDL Class A program takes 3 weeks and our CDL Class B program takes 2 weeks. New classes start every Monday.",
        },
      },
      {
        "@type": "Question",
        name: "How much does CDL training cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CDL Class A Day Program is $5,095, CDL Class A Evening Program is $5,495, and CDL Class B Program is $3,195. Financing is available through Meritize.",
        },
      },
      {
        "@type": "Question",
        name: "What is your pass rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ACE has a 97% first-time pass rate on the DPS CDL skills test. We are also a Licensed Third Party Testing facility.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with job placement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We have partnerships with major trucking companies including Werner, Swift, Schneider, J.B. Hunt, and many more. Most graduates receive multiple job offers before completing training.",
        },
      },
      {
        "@type": "Question",
        name: "Is financing available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer financing through Meritize with competitive rates and flexible payment plans. Apply online or call us for details.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {courseSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
