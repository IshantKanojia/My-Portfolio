import { Subject, Friend, NavItem } from './types';

/**
 * INSTRUCTIONS FOR ISHANT:
 * You can edit the data below to update your website content.
 */

export const PERSONAL_INFO = {
  name: "Ishant Kanojia",
  role: "AI Explorer & Student",
  class: "12th B",
  rollNo: "16",
  school: "Kendriya Vidyalaya No. 2, Delhi Cantt – 110010",
  email: "ishant.ai@example.com", // Placeholder
  about: "I am a curious mind currently navigating Class 12. My passion lies at the intersection of biology and technology, specifically how Artificial Intelligence can revolutionize our understanding of the world. I love exploring new AI tools and envisioning a future powered by smart algorithms.",
  hobbiesDescription: "When I'm not studying Physics or Chemistry, you'll find me diving deep into Large Language Models, testing new generative AI tools, or practicing Yoga to keep my mind sharp."
};

export const SUBJECTS: Subject[] = [
  { name: "Physics", icon: "⚛️", description: "Understanding the laws of the universe." },
  { name: "Chemistry", icon: "🧪", description: "Exploring matter and reactions." },
  { name: "Biology", icon: "🧬", description: "The study of life and complex systems." },
  { name: "English", icon: "📚", description: "Literature and communication." },
  { name: "Hindi", icon: "🇮🇳", description: "Language and cultural heritage." },
  { name: "Yoga", icon: "🧘", description: "Physical and mental well-being." },
];

export const FRIENDS: Friend[] = [
  { name: "Debashis", tagline: "The Logical Thinker", trait: "Always solving problems." },
  { name: "Ritesh", tagline: "The Creative Soul", trait: "Sees the world differently." },
  { name: "Aritra", tagline: "The Tech Enthusiast", trait: "Knows every gadget." },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Friends", href: "#friends" },
  { label: "Interests", href: "#hobbies" },
  { label: "Contact", href: "#contact" },
];
