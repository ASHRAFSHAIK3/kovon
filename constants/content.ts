import type { NavLink, FeatureCard, HowItWorksStep, FooterLink, SocialLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 1,
    icon: "VerifiedUser",
    title: "Verified Talent Pool",
    description:
      "Access 100,000+ pre-verified candidates with validated passports, experience certificates, and training proofs. Zero junk leads.",
  },
  {
    id: 2,
    icon: "Public",
    title: "50+ Countries",
    description:
      "Bridge skilled workers to international opportunities across more than 50 countries with full regulatory compliance.",
  },
  {
    id: 3,
    icon: "SmartToy",
    title: "AI-Powered Matching",
    description:
      "Our intelligent AI instantly notifies relevant workers who match your exact criteria — no middlemen, no delays.",
  },
  {
    id: 4,
    icon: "Security",
    title: "100% Compliant",
    description:
      "Every placement is fully compliant with local and international labor laws. We handle the complexity, you close the deal.",
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Create Your Account",
    description:
      "Sign up with your MEA License number and complete your employer profile to access our verified talent database.",
  },
  {
    step: 2,
    title: "Post Your Demand",
    description:
      "Upload demand letter details — job role, salary range, and destination country. Our AI takes it from there.",
  },
  {
    step: 3,
    title: "Review Candidates",
    description:
      "Receive pre-verified applications or search our database directly. Shortlist, interview, and process visas effortlessly.",
  },
  {
    step: 4,
    title: "Close the Deal",
    description:
      "Finalize placements faster than ever. Kovon guides you every step — from shortlist to successful placement.",
  },
];

export const FOOTER_QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", href: "https://linkedin.com", icon: "LinkedIn" },
  { platform: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { platform: "Facebook", href: "https://facebook.com", icon: "Facebook" },
  { platform: "Instagram", href: "https://instagram.com", icon: "Instagram" },
];

export const SITE_META = {
  title: "Kovon — Global Talent Mobility Platform",
  description:
    "Hire verified global talent instantly. The bridge between international employers and India's best workforce.",
  url: "https://kovon.io",
};
