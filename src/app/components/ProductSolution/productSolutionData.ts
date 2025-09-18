import { Clipboard, DollarSign, PlayCircle } from "lucide-react";

export const PSTabs = [
  {
    id: "itsm",
    title: "ITSM Overview",
    type: "content",
    image: "/itsm-intro.sm_.avif",
    content: [
      {
        title: "One platform for enterprise automation",
        desc: "Leverage AI-driven intelligence to track IT asset costs, usage, and compliance effortlessly. Streamline essential processes and manage everything seamlessly with SupportEngine, your unified enterprise solution.",
      }
    ],
    actions: [
      {
        text: "Get Ebook",
        style: "secondary",
        link: "#"
      },
      {
        text: "Explore now →",
        style: "primary",
        link: "#"
      }
    ]
  },
  {
    id: "benefits",
    title: "Benefits",
    type: "content",
    image: "/infographic.png",
    content: [
      {
        title: "Benefits",
        desc: "Take control of your hardware, software, and cloud assets with IT Asset Management.",
      },
      {
        title: "Modernize and automate IT",
        desc: "Manage IT assets seamlessly within a unified platform, integrating planning, service, and operations under one data model and architecture. Automate asset workflows across every stage of the lifecycle with SupportEngine.",
      }
    ],
    actions: [
      {
        text: "Get Ebook",
        style: "secondary",
        link: "#"
      },

    ]
  },
  {
    id: "platform",
    title: "Platform",
    type: "content",
    image: "/platform.sm_.avif",
    content: [
      {
        title: "Built on the SupportEngine Platform",
        desc: "ITAM leverages AI and advanced platform capabilities to streamline technology asset management and maximize cloud efficiency. Empower your business with a unified platform designed for digital transformation.",
      },
      {
        title: "One platform for enterprise automation",
        desc: "Leverage AI-driven intelligence to track IT asset costs, usage, and compliance effortlessly. Streamline essential processes and manage everything seamlessly with SupportEngine, your unified enterprise solution.",
      }
    ],
    actions: [
      {
        text: "Get Ebook",
        style: "secondary",
        link: "#"
      },
      {
        text: "Explore platform →",
        style: "primary",
        link: "#"
      }
    ]
  },
  {
    id: "resources",
    title: "Resources",
    type: "cards",
    cards: [
      {
        icon: Clipboard,
        title: "ITSM",
        desc: "Streamline IT operations with ticketing, asset management, incident handling, and workflow automation for improved IT service delivery.",
        link: "#",
        btnText: "Get Now"
      },
      {
        icon: PlayCircle,
        title: "Customer service",
        desc: "Enhance customer experience by managing queries, complaints, and support tickets efficiently with automated responses and tracking.",
        link: "#",
        btnText: "Watch Now"
      },
      {
        icon: DollarSign,
        title: "Human resources",
        desc: "Optimize HR processes like employee requests, onboarding, leave management, and payroll inquiries with structured workflows.",
        link: "#",
        btnText: "Get Update"
      },
    ]
  }
];