export const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bareja Studio",
    alternateName: "Barejastudio",
    url: "https://barejastudio.pl/",
    logo:
        "./images.logo.svg",
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "504 762 206",
        contactType: "contact",
        areaServed: "PL, ENG",
        availableLanguage: "Polish, English",
    },
    sameAs: [
        "https://barejastudio.pl/",
    ],

    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bareja Studio",
    image:
        "./images.logo.svg",
    "@id": "https://barejastudio.pl/",
    url: "https://barejastudio.pl/",
    telephone: "504 762 206",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Stefana Żeromskiego 47",
        addressLocality: "Piastów",
        postalCode: "05-820",
        addressCountry: "PL",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 52.175143750000004,
        longitude: 20.85642336191559,
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "00:00",
    },
    sameAs: [
        "https://barejastudio.pl/",
    ],
}