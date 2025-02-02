export const plans = [
  {
    name: "silver",
    price: 99.99,
    features: [
      // Funkcje dostępne we wszystkich pakietach (included: true)
      {
        name: "Dropshipping",
        description: "Budowanie międzynarodowego biznesu dropshippingowego.",
        included: true,
      },
      {
        name: "Automatyzacja programu partnerskiego TikTok",
        description:
          "Pełne zautomatyzowanie procesów zarabiania na afiliacji i wyświetleniach, by generować pasywny dochód.",
        included: true,
      },
      // Funkcje dostępne tylko w dwóch najwyższych pakietach (diamond, platinum)
      {
        name: "AI Prompting",
        description:
          "Zaawansowane techniki AI do automatyzacji i skalowania biznesu.",
        included: false,
      },
      {
        name: "Copywriting",
        description:
          "Psychologia perswazji – jak pisać treści, które sprzedają.",
        included: false,
      },
      // Funkcje dostępne tylko w najwyższym pakiecie (platinum)
      {
        name: "Afilacje",
        description:
          "Eksperckie strategie zwiększania konwersji i zarobków w afiliacji.",
        included: false,
      },
      {
        name: "Faceless",
        description:
          'Zarabianie w modelu "bez twarzy" – jak działać w tle i osiągać sukces online.',
        included: false,
      },
      {
        name: "AI Marketing",
        description:
          "Kompleksowe zarządzanie kampaniami reklamowymi wspieranymi przez AI – od A do Z.",
        included: false,
      },
    ],
    possibleEarnings: "5 000",
  },
  {
    name: "diamond",
    price: 199.99,
    features: [
      // Funkcje dostępne we wszystkich pakietach (included: true)
      {
        name: "Dropshipping",
        description: "Budowanie międzynarodowego biznesu dropshippingowego.",
        included: true,
      },
      {
        name: "Automatyzacja programu partnerskiego TikTok",
        description:
          "Pełne zautomatyzowanie procesów zarabiania na afiliacji i wyświetleniach, by generować pasywny dochód.",
        included: true,
      },
      // Funkcje dostępne tylko w dwóch najwyższych pakietach (diamond, platinum)
      {
        name: "AI Prompting",
        description:
          "Zaawansowane techniki AI do automatyzacji i skalowania biznesu.",
        included: true,
      },
      {
        name: "Copywriting",
        description:
          "Psychologia perswazji – jak pisać treści, które sprzedają.",
        included: true,
      },
      // Funkcje dostępne tylko w najwyższym pakiecie (platinum)
      {
        name: "Afilacje",
        description:
          "Eksperckie strategie zwiększania konwersji i zarobków w afiliacji.",
        included: false,
      },
      {
        name: "Faceless",
        description:
          'Zarabianie w modelu "bez twarzy" – jak działać w tle i osiągać sukces online.',
        included: false,
      },
      {
        name: "AI Marketing",
        description:
          "Kompleksowe zarządzanie kampaniami reklamowymi wspieranymi przez AI – od A do Z.",
        included: false,
      },
    ],
    possibleEarnings: "20 000",
  },
  {
    name: "platinum",
    price: 499.99,
    features: [
      // Funkcje dostępne we wszystkich pakietach (included: true)
      {
        name: "Dropshipping",
        description: "Budowanie międzynarodowego biznesu dropshippingowego.",
        included: true,
      },
      {
        name: "Automatyzacja programu partnerskiego TikTok",
        description:
          "Pełne zautomatyzowanie procesów zarabiania na afiliacji i wyświetleniach, by generować pasywny dochód.",
        included: true,
      },
      // Funkcje dostępne tylko w dwóch najwyższych pakietach (diamond, platinum)
      {
        name: "AI Prompting",
        description:
          "Zaawansowane techniki AI do automatyzacji i skalowania biznesu.",
        included: true,
      },
      {
        name: "Copywriting",
        description:
          "Psychologia perswazji – jak pisać treści, które sprzedają.",
        included: true,
      },
      // Funkcje dostępne tylko w najwyższym pakiecie (platinum)
      {
        name: "Afilacje",
        description:
          "Eksperckie strategie zwiększania konwersji i zarobków w afiliacji.",
        included: true,
      },
      {
        name: "Faceless",
        description:
          'Zarabianie w modelu "bez twarzy" – jak działać w tle i osiągać sukces online.',
        included: true,
      },
      {
        name: "AI Marketing",
        description:
          "Kompleksowe zarządzanie kampaniami reklamowymi wspieranymi przez AI – od A do Z.",
        included: true,
      },
    ],
    possibleEarnings: "35 000",
  },
];
