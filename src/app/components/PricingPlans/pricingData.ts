// src/app/components/PricingPlans/data.ts

import { PiggyBank, Wallet, Briefcase } from "lucide-react";

export const pricingPlans = [
  {
    id: 1,
    icon: PiggyBank,
    title: "Free Trial",
    highlight: "(30 Days)",
    price: "$0",
    period: "/m",
    description: "A simple start for everyone",
    features: [
      "Dashboard",
      "Incident Management",
      "Service Catalog",
      "IT Asset Management",
      "Reports and Analytics",
      "User Management",
      "Knowledge Base Page",
      "Manage Organization",
    ],
    buttonText: "Start Free Trial",
    
  },
  {
    id: 2,
    icon: Wallet,
    title: "Standard",
    price: "$40",
    period: "/m",
    description: "For small to medium businesses",
    subText: "USD 480/year",
    features: [
      "Dashboard",
      "Incident Management",
      "Service Catalog",
      "IT Asset Management",
      "Reports and Analytics",
      "User Management",
      "Knowledge Base Page",
      "Manage Organization",
    ],
    buttonText: "Get It Now",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Enterprise",
    price: "$--",
    period: "/m",
    description: "Solution for big organizations",
    badge: "Popular",
    features: [
      "Dashboard",
      "Incident Management",
      "Service Catalog",
      "IT Asset Management",
      "Reports and Analytics",
      "User Management",
      "Knowledge Base Page",
      "Manage Organization",
    ],
    buttonText: "Contact Us",
  },
];
