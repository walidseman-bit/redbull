/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: "original" | "sugarfree" | "zero" | "editions";
  categoryLabel: string;
  flavor: string;
  image: string;
  colorTheme: string; // Tailwind gradient/shadow details
  textColor: string;
  accentColor: string;
  tagline: string;
  description: string;
  benefits: string[];
  bestUse: string;
  nutrition: {
    calories: string;
    caffeine: string;
    taurine: string;
    b_vitamins: string;
  };
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Lifestyle {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  category: "Adventure" | "Gaming" | "Fitness" | "Nightlife" | "Creativity" | "Competition";
}

export interface Athlete {
  id: string;
  name: string;
  sport: string;
  category: "Racing" | "Cycling" | "Snow Sports" | "Esports" | "Running" | "Skateboarding";
  achievement: string;
  quote: string;
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  highlight: string;
  image: string;
}

export interface Testimonial {
  id: string;
  user: string;
  role: string;
  story: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
