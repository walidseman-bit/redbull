/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Benefit, Lifestyle, Athlete, EventItem, Testimonial, FAQItem } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "apex-original",
    name: "Apex Velocity Original",
    category: "original",
    categoryLabel: "Original Energy",
    flavor: "Classic Amber & Citrus",
    image: "/src/assets/images/product_original_1781610289092.jpg",
    colorTheme: "from-blue-600 via-indigo-900 to-black hover:shadow-blue-500/30",
    textColor: "text-blue-400",
    accentColor: "bg-blue-600 hover:bg-blue-700 text-white",
    tagline: "Unleash vital energy and focus when you need it most.",
    description: "Our signature blend engineered for champions. A precise ratio of taurine, B-vitamins, and high-quality ingredients that sharpens your mental focus and physically recharges your drive.",
    benefits: [
      "Accelerated cognitive processing speed",
      "Immediate physical fatigue reduction",
      "Sustained alert state without crash",
      "Enriched with vital B3, B5, B6 and B12 vitamins"
    ],
    bestUse: "Engineered for high-intensity work, physical training, and epic endurance challenges.",
    nutrition: {
      calories: "110 kcal",
      caffeine: "80 mg",
      taurine: "1000 mg",
      b_vitamins: "100% RI"
    }
  },
  {
    id: "apex-sugarfree",
    name: "Apex Ice Sugar-Free",
    category: "sugarfree",
    categoryLabel: "Sugar-Free",
    flavor: "Chilled Crisp Citrus Blend",
    image: "/src/assets/images/product_sugarfree_1781610308818.jpg",
    colorTheme: "from-cyan-500 via-sky-950 to-black hover:shadow-cyan-400/30",
    textColor: "text-cyan-400",
    accentColor: "bg-cyan-500 hover:bg-cyan-600 text-black font-semibold",
    tagline: "Absolute laser focus. Zero compromises.",
    description: "Light, ultra-crisp, and perfectly balanced. Engineered for performers who demand peak cognitive function and endless drive with absolutely zero added sugars or carbohydrates.",
    benefits: [
      "Zero sugar, low glycemic index footprint",
      "Immediate mental alertness and mental clarity",
      "Crisp, lightweight taste with zero artificial aftertaste",
      "Supports active, calorie-conscious nutrition plans"
    ],
    bestUse: "Ideal for long cognitive sprints, exams, light training, and busy workdays.",
    nutrition: {
      calories: "8 kcal",
      caffeine: "80 mg",
      taurine: "1000 mg",
      b_vitamins: "100% RI"
    }
  },
  {
    id: "apex-zero",
    name: "Apex Black Out Zero",
    category: "zero",
    categoryLabel: "Zero Sugar & Calories",
    flavor: "Black Diamond Berry Twist",
    image: "/src/assets/images/product_zero_1781610328477.jpg",
    colorTheme: "from-red-600 via-zinc-950 to-black hover:shadow-red-500/30",
    textColor: "text-red-500",
    accentColor: "bg-red-600 hover:bg-red-700 text-white",
    tagline: "Aggressive performance under extreme conditions.",
    description: "A dark, highly specialized calorie-free blend engineered for night runners, esports professionals, and tactical training. Zero-calorie hydration coupled with full-strength nervous-system ignition.",
    benefits: [
      "Zero calories, absolute cellular energy delivery",
      "Enhanced visual contrast processing and reaction speed",
      "Optimized active-dosage electrolytes",
      "Sustained micro-level neuromuscular focus"
    ],
    bestUse: "Top choice for tactical gaming marathons, night-shifts, and intensive metabolic cardio workouts.",
    nutrition: {
      calories: "0 kcal",
      caffeine: "85 mg",
      taurine: "1100 mg",
      b_vitamins: "100% RI"
    }
  },
  {
    id: "apex-summer",
    name: "Apex Tropical Edition",
    category: "editions",
    categoryLabel: "Seasonal Editions",
    flavor: "Sun-Drenched Passion Mango",
    image: "/src/assets/images/product_editions_1781610347158.jpg",
    colorTheme: "from-amber-400 via-orange-950 to-black hover:shadow-amber-500/30",
    textColor: "text-amber-400",
    accentColor: "bg-amber-400 hover:bg-amber-500 text-black font-semibold",
    tagline: "Summer vibe, high octane speed.",
    description: "An explosion of exotic passion fruit and sweet mango crafted onto our potent double-bull charge formula. A refreshing bursts of sunshine and relentless speed in one brilliant sunny can.",
    benefits: [
      "Incredible natural summer exotic fruit juices infusion",
      "Instant mood elevation and sensory refresh",
      "Solf natural carbonation for ultra smooth swallowing",
      "Keeps the mind vibrant during hot summer days"
    ],
    bestUse: "Tailored for music festivals, surf sessions, beach sports, and long summer roadtrips.",
    nutrition: {
      calories: "120 kcal",
      caffeine: "80 mg",
      taurine: "1000 mg",
      b_vitamins: "100% RI"
    }
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "active-life",
    title: "IGNITE SPORTS PERFORMANCE",
    description: "Increases muscle aerobic capacity and accelerates metabolic cellular oxygenation. Delivers power when your body is pushed past the red line.",
    iconName: "Zap"
  },
  {
    id: "on-the-go",
    title: "INSTANT ACCESSIBILITY",
    description: "Sleek, aluminum-shield cans designed for immediate use. Easily packed for hiking bags, cup holders, or gaming stations.",
    iconName: "Compass"
  },
  {
    id: "flavor-variety",
    title: "PREMIUM FLAVOR SPECTRUM",
    description: "From bitter carbonated crisp classics to exotic, zero-sugar, or tropical fruit flavors, we make sure every speed run has a matching bite.",
    iconName: "Sparkles"
  },
  {
    id: "global-identity",
    title: "ELITE COMMUNITY STATUS",
    description: "We represent a global alliance of extreme racers, digital warriors, artists, and creators. When you hold an Apex, you hold the wings of legacy.",
    iconName: "Award"
  },
  {
    id: "neurological-boost",
    title: "COGNITIVE STAMINA",
    description: "Fortified with clinical-grade taurine and energy-routing B3, B6, and B12 vitamins. Boosts working memory and lowers reactive delay.",
    iconName: "Cpu"
  },
  {
    id: "versatile-lifestyles",
    title: "MULTIDISCIPLINARY UTILITY",
    description: "Whether you are writing a clean code repository, flying a physical F1 car, studying for a PhD, or dancing till sunrise, our dosage fuels you.",
    iconName: "Activity"
  }
];

export const LIFESTYLES: Lifestyle[] = [
  {
    id: "lifestyle-adventure",
    title: "HIGH-ALTITUDE ADVENTURES",
    tagline: "Scale peaks, cross canyons, explore the unknown.",
    description: "When thin air and sheer cliffs test your will, summon the energy to push past fear. Designed for climbers, snowboarders, and high-adrenaline adrenaline seekers.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    category: "Adventure"
  },
  {
    id: "lifestyle-gaming",
    title: "ELITE ESPORTS & GAMING",
    tagline: "Decimal point precision. Zero frame latency.",
    description: "Maximize your visual search, mechanical reaction timing, and strategic focus. Fueling top-tier rosters through championship match points and midnight marathons.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    category: "Gaming"
  },
  {
    id: "lifestyle-fitness",
    title: "HIGH-METABOLIC FITNESS",
    tagline: "Outwork your yesterday. Break personal records.",
    description: "Ignite power in your muscles. Perfect as a pre-workout catalyst, unlocking explosive energy, metabolic drive, and severe endurance.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    category: "Fitness"
  },
  {
    id: "lifestyle-nightlife",
    title: "COSMOS NIGHTLIFE & CREATIVITY",
    tagline: "Music till dawn. Artistic fire inside.",
    description: "Never miss a beat. Power through production sets, late-night DJ panels, graffiti murals, or street-dance circles until the morning sky is ablaze.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
    category: "Nightlife"
  }
];

export const ATHLETES: Athlete[] = [
  {
    id: "athlete-racing",
    name: "Max Verstappen (Inspired Dynamic Profile)",
    sport: "Formula 1 Racing Team Driver",
    category: "Racing",
    achievement: "3x World Champion, Master of G-Force",
    quote: "On the racetrack, taking a corner at 300km/h demands milliseconds of supreme neural visual focus. My physical state drives my vehicle's win.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "athlete-cycling",
    name: "Wout van Aert (Inspired Performance Profile)",
    sport: "Classic Cyclocross & Tour Enduro",
    category: "Cycling",
    achievement: "Multiple Legendary Green Jersey Wins",
    quote: "When your lungs burn and the mud is up to your wheel spikes, you don't slow down. You fuel the fire inside.",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "athlete-skate",
    name: "Leticia Bufoni (Inspired Skateboarding Icon)",
    sport: "Street Skateboarding Champion",
    category: "Skateboarding",
    achievement: "6x X-Games Golden Medal Winner",
    quote: "Falling is standard. Staying down is a choice. You need mental sharpness to commit to that mega rail drop-in.",
    image: "https://images.unsplash.com/photo-1520156473397-f2df47416432?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "athlete-esports",
    name: "Johan 'N0tail' Sundstein",
    sport: "Competitive Esports Tactician",
    category: "Esports",
    achievement: "Back-to-Back Legendary Aegis Holder",
    quote: "Behind every mouse click is a team decision. In esports, brain stamina in active play hour 5 is what separates legends from the pack.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600"
  }
];

export const EVENTS: EventItem[] = [
  {
    id: "event-stratos",
    title: "Apex Cloudfall Drop",
    date: "September 12, 2026",
    location: "Space Edge, Stratosphere",
    description: "A record-shattering supersonic freefall jump from a specialized carbon capsule at 128,000 feet, touching Mach 1.25 speeds.",
    highlight: "Breaking the sound barrier using only a gravity suit",
    image: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "event-cliff",
    title: "Abyss Cliff Diving Series",
    date: "July 24, 2026",
    location: "Svalbard Fjords, Norway",
    description: "Elite divers launch themselves from extreme 30-meter ice structures into deep arctic waters, combining grace with severe impact danger.",
    highlight: "Freefall acrobatics at negative air temperatures",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "event-ramp",
    title: "Apex Megaramp Skate Showdown",
    date: "August 18, 2026",
    location: "Los Angeles, California",
    description: "The world's largest custom wooden mega-ramp hosting high-flying boarders, attempting never-before-seen spins and transitions.",
    highlight: "1080-degree physical rotation trials with heavy g-force landing",
    image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "story-1",
    user: "Marcus Vance",
    role: "Fullstack Web & Blockchain Engineer",
    story: "During an intense 48-hour decentralized hackathon, my brain was shutting down at 3 AM. I cracked open a sugar-free ice can, and it instantly pulled me back into flow. It literally gave me the neurological boost to push past the final block commit.",
    rating: 5
  },
  {
    id: "story-2",
    user: "Sarah Jenkins",
    role: "Offshore Sailing Racer & Navigator",
    story: "Sailing through rough Atlantic waters at midnight requires intense sensory alertness. Apex Original is my lifeline when I need to monitor heavy machinery and tidal flows in the pitch black.",
    rating: 5
  },
  {
    id: "story-3",
    user: "Kenji Sato",
    role: "Urban Traceur & Free Runner",
    story: "Precision jumping requires absolute synergy between eyes, leg muscles, and speed timing. When I am shooting dangerous concrete maneuvers, a can before the run gives me the high confidence and perfect spatial tracking I need.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What product options are available in the Apex Velocity range?",
    answer: "We offer four core categories tailored to different needs: Apex Velocity Original (our classic physical and mental ignite formula), Apex Ice Sugar-Free (laser focus with zero sugar), Apex Black Out Zero (calorie-free aggressive energy for night tactical and tactical gamers), and our seasonal Editions (including the sun-charged Tropical mango flavor)."
  },
  {
    question: "Which flavor options should I choose for standard study sprints?",
    answer: "For long cognitive tasks or study sessions, we highly recommend our Apex Ice Sugar-Free. It contains the identical taurine and B-vitamin ignite complex to boost working memory, without heavy carbohydrates, preventing any post-study grogginess or glucose drop."
  },
  {
    question: "Where can I purchase or locate Apex products?",
    answer: "Apex products are distributed globally in premium grocery locations, extreme sports gyms, electronics and esports stores, and convenience hubs. Use our live digital 'Find Your Energy' locator in this showcase to map authorized stockists nearby."
  },
  {
    question: "What specific lifestyles are these energy formulas designed for?",
    answer: "Apex is built for ambitious high-performers. This spans athletes seeking physical metabolic drive, gamers requiring instant reaction speed and neurological stamina, creative developers or late-night artists pushing boundaries, and active travelers needing highway driving alertness."
  },
  {
    question: "How do I secure tickets or join upcoming Apex events as a participant?",
    answer: "Our extreme events have limited spectator seating but are streamed globally in ultra-high resolution. To participate, register via our newsletter below to get advance ticket links, custom esports lobby keys, or volunteer applications for our beach diving series."
  },
  {
    question: "How can I contact the brand team for custom sponsorships?",
    answer: "We are always hunting for raw kinetic talent! If you are an active runner, extreme sportsman, esports roster lead, or content designer, jump to our interactive Contact Form and select 'Extreme Talent Sponsorship' to send your portfolio directly to our recruiters."
  }
];
