import { TrendingUp, Lightbulb, Target, LineChart, Cog, Zap } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "strategic-consulting",
    title: "Strategic Consulting",
    description: "Unlock your business potential with customized strategies designed to drive growth and efficiency. Our expert consultants work closely with you to identify opportunities and create actionable plans.",
    icon: Target,
    benefits: [
      "Market analysis and competitive positioning",
      "Business model optimization",
      "Growth strategy development",
      "Risk assessment and mitigation",
      "Performance improvement roadmaps"
    ]
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Embrace technology to enhance operations, improve customer experience, and achieve sustainable competitive advantage. We guide your journey from legacy systems to modern digital solutions.",
    icon: Zap,
    benefits: [
      "Technology stack modernization",
      "Digital process automation",
      "Cloud migration strategies",
      "Customer experience enhancement",
      "Data-driven decision making"
    ]
  },
  {
    id: "process-improvement",
    title: "Process Improvement",
    description: "Enhancing operational efficiency and effectiveness through tailored process improvement strategies that drive measurable results and sustainable growth for your organization.",
    icon: Cog,
    benefits: [
      "Workflow optimization",
      "Lean methodology implementation",
      "Quality management systems",
      "Cost reduction initiatives",
      "Productivity enhancement"
    ]
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    description: "Crafting innovative digital strategies that align with your business goals, ensuring a seamless transition into the digital landscape while maximizing your competitive advantage.",
    icon: Lightbulb,
    benefits: [
      "Digital roadmap creation",
      "Omnichannel strategy",
      "Innovation framework development",
      "Digital marketing integration",
      "Technology investment planning"
    ]
  },
  {
    id: "business-analytics",
    title: "Business Analytics",
    description: "Transform data into actionable insights with our comprehensive analytics solutions. Make informed decisions backed by powerful data analysis and visualization.",
    icon: LineChart,
    benefits: [
      "Data analytics and reporting",
      "Predictive modeling",
      "Business intelligence implementation",
      "KPI development and tracking",
      "Performance dashboards"
    ]
  },
  {
    id: "growth-consulting",
    title: "Growth Consulting",
    description: "Accelerate your business growth with strategic guidance focused on scaling operations, entering new markets, and maximizing revenue opportunities.",
    icon: TrendingUp,
    benefits: [
      "Market expansion strategies",
      "Revenue optimization",
      "Sales process improvement",
      "Customer acquisition strategies",
      "Partnership development"
    ]
  }
];
