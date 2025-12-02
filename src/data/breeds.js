// Weight data for different cat and dog breeds at various ages
// Weights are in pounds (lbs)

export const catBreeds = [
  {
    id: 1,
    name: "Persian",
    origin: "Iran",
    description: "Long-haired breed with a round face and short muzzle",
    image: "🐱",
    weights: { "2 months": 1.5, "4 months": 3, "6 months": 5, "1 year": 8, "Adult": 10 }
  },
  {
    id: 2,
    name: "Maine Coon",
    origin: "United States",
    description: "One of the largest domesticated cat breeds",
    image: "🐱",
    weights: { "2 months": 2, "4 months": 5, "6 months": 8, "1 year": 14, "Adult": 18 }
  },
  {
    id: 3,
    name: "Siamese",
    origin: "Thailand",
    description: "Distinctive blue almond-shaped eyes and color points",
    image: "🐱",
    weights: { "2 months": 1.2, "4 months": 2.5, "6 months": 4, "1 year": 7, "Adult": 9 }
  },
  {
    id: 4,
    name: "British Shorthair",
    origin: "United Kingdom",
    description: "Dense, plush coat with a distinctive round face",
    image: "🐱",
    weights: { "2 months": 1.5, "4 months": 3.5, "6 months": 6, "1 year": 10, "Adult": 14 }
  },
  {
    id: 5,
    name: "Ragdoll",
    origin: "United States",
    description: "Known for their docile temperament and floppy nature",
    image: "🐱",
    weights: { "2 months": 1.8, "4 months": 4, "6 months": 7, "1 year": 12, "Adult": 17 }
  },
  {
    id: 6,
    name: "Bengal",
    origin: "United States",
    description: "Wild-looking coat with distinctive spots or marbling",
    image: "🐱",
    weights: { "2 months": 1.5, "4 months": 3.5, "6 months": 6, "1 year": 10, "Adult": 13 }
  },
  {
    id: 7,
    name: "Abyssinian",
    origin: "Ethiopia",
    description: "Slender and elegant with a ticked tabby coat",
    image: "🐱",
    weights: { "2 months": 1.2, "4 months": 2.5, "6 months": 4.5, "1 year": 7, "Adult": 9 }
  },
  {
    id: 8,
    name: "Scottish Fold",
    origin: "Scotland",
    description: "Known for folded ears and owl-like appearance",
    image: "🐱",
    weights: { "2 months": 1.3, "4 months": 3, "6 months": 5, "1 year": 8, "Adult": 11 }
  },
  {
    id: 9,
    name: "Sphynx",
    origin: "Canada",
    description: "Hairless breed with wrinkled skin",
    image: "🐱",
    weights: { "2 months": 1.2, "4 months": 2.8, "6 months": 5, "1 year": 8, "Adult": 10 }
  },
  {
    id: 10,
    name: "Russian Blue",
    origin: "Russia",
    description: "Short dense blue-gray coat and green eyes",
    image: "🐱",
    weights: { "2 months": 1.3, "4 months": 2.8, "6 months": 4.5, "1 year": 7, "Adult": 10 }
  },
  {
    id: 11,
    name: "Birman",
    origin: "Myanmar",
    description: "Color-pointed cat with white gloves on paws",
    image: "🐱",
    weights: { "2 months": 1.5, "4 months": 3.5, "6 months": 6, "1 year": 9, "Adult": 12 }
  },
  {
    id: 12,
    name: "Norwegian Forest Cat",
    origin: "Norway",
    description: "Large, long-haired breed adapted to cold climates",
    image: "🐱",
    weights: { "2 months": 1.8, "4 months": 4, "6 months": 7, "1 year": 12, "Adult": 16 }
  },
  {
    id: 13,
    name: "Burmese",
    origin: "Myanmar",
    description: "Compact, muscular cat with a silky coat",
    image: "🐱",
    weights: { "2 months": 1.2, "4 months": 2.8, "6 months": 5, "1 year": 8, "Adult": 11 }
  },
  {
    id: 14,
    name: "Devon Rex",
    origin: "England",
    description: "Large ears and wavy coat with pixie-like face",
    image: "🐱",
    weights: { "2 months": 1, "4 months": 2, "6 months": 3.5, "1 year": 5, "Adult": 7 }
  },
  {
    id: 15,
    name: "Exotic Shorthair",
    origin: "United States",
    description: "Short-haired version of the Persian",
    image: "🐱",
    weights: { "2 months": 1.5, "4 months": 3, "6 months": 5.5, "1 year": 9, "Adult": 12 }
  },
  {
    id: 16,
    name: "American Shorthair",
    origin: "United States",
    description: "Athletic build with a round face",
    image: "🐱",
    weights: { "2 months": 1.3, "4 months": 3, "6 months": 5, "1 year": 8, "Adult": 11 }
  },
  {
    id: 17,
    name: "Oriental Shorthair",
    origin: "United States",
    description: "Elegant body with large ears and almond eyes",
    image: "🐱",
    weights: { "2 months": 1.1, "4 months": 2.2, "6 months": 4, "1 year": 6, "Adult": 8 }
  },
  {
    id: 18,
    name: "Himalayan",
    origin: "United States",
    description: "Persian-type with Siamese coloring",
    image: "🐱",
    weights: { "2 months": 1.5, "4 months": 3.2, "6 months": 5.5, "1 year": 9, "Adult": 11 }
  },
  {
    id: 19,
    name: "Tonkinese",
    origin: "United States",
    description: "Cross between Siamese and Burmese",
    image: "🐱",
    weights: { "2 months": 1.2, "4 months": 2.5, "6 months": 4.5, "1 year": 7, "Adult": 10 }
  },
  {
    id: 20,
    name: "Cornish Rex",
    origin: "England",
    description: "Curly coat with egg-shaped head",
    image: "🐱",
    weights: { "2 months": 0.9, "4 months": 2, "6 months": 3.5, "1 year": 5, "Adult": 7 }
  },
  {
    id: 21,
    name: "Turkish Angora",
    origin: "Turkey",
    description: "Elegant, long-haired breed with silky coat",
    image: "🐱",
    weights: { "2 months": 1.2, "4 months": 2.5, "6 months": 4.5, "1 year": 7, "Adult": 9 }
  },
  {
    id: 22,
    name: "Somali",
    origin: "United States",
    description: "Long-haired version of the Abyssinian",
    image: "🐱",
    weights: { "2 months": 1.2, "4 months": 2.8, "6 months": 5, "1 year": 8, "Adult": 10 }
  },
  {
    id: 23,
    name: "Chartreux",
    origin: "France",
    description: "Blue-gray coat with copper or gold eyes",
    image: "🐱",
    weights: { "2 months": 1.5, "4 months": 3.5, "6 months": 6, "1 year": 10, "Adult": 14 }
  },
  {
    id: 24,
    name: "Manx",
    origin: "Isle of Man",
    description: "Tailless or short-tailed breed",
    image: "🐱",
    weights: { "2 months": 1.3, "4 months": 3, "6 months": 5, "1 year": 8, "Adult": 11 }
  },
  {
    id: 25,
    name: "Egyptian Mau",
    origin: "Egypt",
    description: "Naturally spotted coat with gooseberry green eyes",
    image: "🐱",
    weights: { "2 months": 1.2, "4 months": 2.5, "6 months": 4.5, "1 year": 7, "Adult": 10 }
  }
];

export const dogBreeds = [
  {
    id: 1,
    name: "Labrador Retriever",
    origin: "Canada",
    description: "Friendly, active, and outgoing family dog",
    image: "🐕",
    weights: { "2 months": 10, "4 months": 25, "6 months": 45, "1 year": 65, "Adult": 70 }
  },
  {
    id: 2,
    name: "German Shepherd",
    origin: "Germany",
    description: "Intelligent and versatile working dog",
    image: "🐕",
    weights: { "2 months": 12, "4 months": 30, "6 months": 50, "1 year": 70, "Adult": 80 }
  },
  {
    id: 3,
    name: "Golden Retriever",
    origin: "Scotland",
    description: "Devoted, friendly, and intelligent",
    image: "🐕",
    weights: { "2 months": 10, "4 months": 25, "6 months": 45, "1 year": 60, "Adult": 70 }
  },
  {
    id: 4,
    name: "French Bulldog",
    origin: "France",
    description: "Playful, smart, and adaptable companion",
    image: "🐕",
    weights: { "2 months": 5, "4 months": 12, "6 months": 18, "1 year": 24, "Adult": 26 }
  },
  {
    id: 5,
    name: "Bulldog",
    origin: "England",
    description: "Calm, courageous, and friendly",
    image: "🐕",
    weights: { "2 months": 8, "4 months": 18, "6 months": 30, "1 year": 45, "Adult": 50 }
  },
  {
    id: 6,
    name: "Poodle (Standard)",
    origin: "Germany",
    description: "Highly intelligent and elegant",
    image: "🐕",
    weights: { "2 months": 8, "4 months": 20, "6 months": 35, "1 year": 55, "Adult": 60 }
  },
  {
    id: 7,
    name: "Beagle",
    origin: "England",
    description: "Curious, friendly, and merry",
    image: "🐕",
    weights: { "2 months": 5, "4 months": 10, "6 months": 16, "1 year": 22, "Adult": 25 }
  },
  {
    id: 8,
    name: "Rottweiler",
    origin: "Germany",
    description: "Loyal, loving, and confident guardian",
    image: "🐕",
    weights: { "2 months": 15, "4 months": 35, "6 months": 60, "1 year": 95, "Adult": 110 }
  },
  {
    id: 9,
    name: "German Shorthaired Pointer",
    origin: "Germany",
    description: "Friendly, smart, and willing to please",
    image: "🐕",
    weights: { "2 months": 8, "4 months": 20, "6 months": 40, "1 year": 55, "Adult": 60 }
  },
  {
    id: 10,
    name: "Dachshund",
    origin: "Germany",
    description: "Curious, friendly, and spunky",
    image: "🐕",
    weights: { "2 months": 3, "4 months": 6, "6 months": 10, "1 year": 14, "Adult": 16 }
  },
  {
    id: 11,
    name: "Pembroke Welsh Corgi",
    origin: "Wales",
    description: "Smart, affectionate, and active",
    image: "🐕",
    weights: { "2 months": 6, "4 months": 12, "6 months": 18, "1 year": 26, "Adult": 28 }
  },
  {
    id: 12,
    name: "Australian Shepherd",
    origin: "United States",
    description: "Smart, work-oriented, and exuberant",
    image: "🐕",
    weights: { "2 months": 8, "4 months": 20, "6 months": 35, "1 year": 50, "Adult": 55 }
  },
  {
    id: 13,
    name: "Yorkshire Terrier",
    origin: "England",
    description: "Affectionate, sprightly, and tomboyish",
    image: "🐕",
    weights: { "2 months": 1, "4 months": 2.5, "6 months": 4, "1 year": 6, "Adult": 7 }
  },
  {
    id: 14,
    name: "Boxer",
    origin: "Germany",
    description: "Fun-loving, bright, and active",
    image: "🐕",
    weights: { "2 months": 10, "4 months": 25, "6 months": 45, "1 year": 60, "Adult": 70 }
  },
  {
    id: 15,
    name: "Cavalier King Charles Spaniel",
    origin: "England",
    description: "Affectionate, gentle, and graceful",
    image: "🐕",
    weights: { "2 months": 3, "4 months": 6, "6 months": 10, "1 year": 15, "Adult": 16 }
  },
  {
    id: 16,
    name: "Doberman Pinscher",
    origin: "Germany",
    description: "Loyal, fearless, and alert",
    image: "🐕",
    weights: { "2 months": 12, "4 months": 30, "6 months": 55, "1 year": 80, "Adult": 90 }
  },
  {
    id: 17,
    name: "Great Dane",
    origin: "Germany",
    description: "Friendly, patient, and dependable",
    image: "🐕",
    weights: { "2 months": 18, "4 months": 45, "6 months": 80, "1 year": 130, "Adult": 150 }
  },
  {
    id: 18,
    name: "Miniature Schnauzer",
    origin: "Germany",
    description: "Friendly, smart, and obedient",
    image: "🐕",
    weights: { "2 months": 3, "4 months": 6, "6 months": 10, "1 year": 14, "Adult": 15 }
  },
  {
    id: 19,
    name: "Siberian Husky",
    origin: "Russia",
    description: "Loyal, mischievous, and outgoing",
    image: "🐕",
    weights: { "2 months": 8, "4 months": 18, "6 months": 35, "1 year": 50, "Adult": 55 }
  },
  {
    id: 20,
    name: "Shih Tzu",
    origin: "China",
    description: "Affectionate, playful, and outgoing",
    image: "🐕",
    weights: { "2 months": 2, "4 months": 5, "6 months": 8, "1 year": 12, "Adult": 14 }
  },
  {
    id: 21,
    name: "Boston Terrier",
    origin: "United States",
    description: "Friendly, bright, and amusing",
    image: "🐕",
    weights: { "2 months": 4, "4 months": 9, "6 months": 14, "1 year": 20, "Adult": 22 }
  },
  {
    id: 22,
    name: "Bernese Mountain Dog",
    origin: "Switzerland",
    description: "Good-natured, calm, and strong",
    image: "🐕",
    weights: { "2 months": 15, "4 months": 35, "6 months": 60, "1 year": 90, "Adult": 100 }
  },
  {
    id: 23,
    name: "Pomeranian",
    origin: "Germany",
    description: "Inquisitive, bold, and lively",
    image: "🐕",
    weights: { "2 months": 1, "4 months": 2, "6 months": 3.5, "1 year": 5, "Adult": 6 }
  },
  {
    id: 24,
    name: "Havanese",
    origin: "Cuba",
    description: "Intelligent, outgoing, and funny",
    image: "🐕",
    weights: { "2 months": 2, "4 months": 4, "6 months": 7, "1 year": 11, "Adult": 12 }
  },
  {
    id: 25,
    name: "Shetland Sheepdog",
    origin: "Scotland",
    description: "Playful, energetic, and bright",
    image: "🐕",
    weights: { "2 months": 4, "4 months": 9, "6 months": 15, "1 year": 22, "Adult": 24 }
  },
  {
    id: 26,
    name: "Akita",
    origin: "Japan",
    description: "Courageous, dignified, and profoundly loyal",
    image: "🐕",
    weights: { "2 months": 14, "4 months": 35, "6 months": 60, "1 year": 90, "Adult": 110 }
  },
  {
    id: 27,
    name: "Border Collie",
    origin: "Scotland",
    description: "Affectionate, smart, and energetic",
    image: "🐕",
    weights: { "2 months": 5, "4 months": 14, "6 months": 25, "1 year": 38, "Adult": 42 }
  },
  {
    id: 28,
    name: "Maltese",
    origin: "Malta",
    description: "Gentle, playful, and charming",
    image: "🐕",
    weights: { "2 months": 1, "4 months": 2, "6 months": 3.5, "1 year": 5.5, "Adult": 6 }
  },
  {
    id: 29,
    name: "Chihuahua",
    origin: "Mexico",
    description: "Charming, graceful, and sassy",
    image: "🐕",
    weights: { "2 months": 0.8, "4 months": 1.5, "6 months": 2.5, "1 year": 4, "Adult": 5 }
  },
  {
    id: 30,
    name: "Saint Bernard",
    origin: "Switzerland",
    description: "Playful, charming, and inquisitive",
    image: "🐕",
    weights: { "2 months": 18, "4 months": 45, "6 months": 80, "1 year": 140, "Adult": 160 }
  }
];

export const ageStages = ["2 months", "4 months", "6 months", "1 year", "Adult"];
