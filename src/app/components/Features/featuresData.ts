import {
  Zap,
  Handshake,
  Lightbulb,
  SlidersVertical,
  ChartNoAxesCombined,
  Workflow,
  ChartBarStacked,
  ClipboardClock,
  ScrollText,
  Database,
  Repeat2,
  UsersRound,
  ShieldCheck,
  Network,
  FileSignature,
} from "lucide-react";

export const featureTabs = [
  {
    id: "incident",
    title: "Incident Management",
    image: "/data.png", // 👈 put image in /public/features/
    content: [
      {
        icon: Zap,
        title: "Faster Resolution",
        desc: "Streamline incident tracking and resolution processes to minimize downtime.",
      },
      {
        icon: Handshake,
        title: "Improved Collaboration",
        desc: "Enable teams to collaborate effectively during incidents with real-time updates.",
      },
      {
        icon: Lightbulb,
        title: "Proactive Monitoring",
        desc: "Identify and address potential incidents before they escalate.",
      },
    ],
  },
  {
    id: "workflow",
    title: "Customizable Workflows",
    image: "/data.png",
    content: [
      {
        icon: SlidersVertical,
        title: "Tailored Processes",
        desc: "Adapt workflows to match your organization’s unique processes and requirements.",
      },
      {
        icon: ChartNoAxesCombined,
        title: "Scalability",
        desc: "Easily scale workflows as your team or organization grows.",
      },
      {
        icon: Workflow,
        title: "Efficiency",
        desc: "Automate repetitive tasks and approvals to save time and reduce manual effort.",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytical Dashboard",
    image: "/data.png",
    content: [
      {
        icon: ChartBarStacked,
        title: "Data-Driven Decisions",
        desc: "Use insights from performance metrics to make informed decisions and improve service delivery.",
      },
      {
        icon: ClipboardClock,
        title: "Performance Tracking",
        desc: "Monitor key metrics like resolution times, SLA compliance, and customer satisfaction to identify areas for improvement.",
      },
      {
        icon: ScrollText,
        title: "Transparency",
        desc: "Provide stakeholders with clear, actionable reports to demonstrate the value of your support operations.",
      },
    ],
  },
  {
    id: "assets",
    title: "IT Asset Management",
    image: "/data.png",
    content: [
      {
        icon: Database,
        title: "Single Source of Truth",
        desc: "Maintain a centralized repository for all IT assets (hardware, software, licenses, and configurations), ensuring accurate and up-to-date information.",
      },
      {
        icon: Repeat2,
        title: "Lifecycle Management",
        desc: "Track the entire lifecycle of assets—from procurement to retirement—ensuring optimal utilization and timely upgrades or replacements.",
      },
      {
        icon: FileSignature,
        title: "Vendor Management",
        desc: "Track vendor contracts and warranties to ensure timely renewals and avoid unexpected expenses.",
      },
    ],
  },
  {
    id: "org",
    title: "Organization Management",
    image: "/data.png",
    content: [
      {
        icon: UsersRound,
        title: "Centralized User Management",
        desc: "Link IT assets to individual users or teams, making it easy to track who is responsible for specific devices or software.",
      },
      {
        icon: ShieldCheck,
        title: "Role-Based Access Control",
        desc: "Assign specific roles and permissions to users based on their department or function, ensuring secure and efficient access to IT assets.",
      },
      {
        icon: Network,
        title: "Hierarchical Structure",
        desc: "Create and manage a clear hierarchy of branches, departments, and teams, ensuring accountability and streamlined communication.",
      },
    ],
  },
];
