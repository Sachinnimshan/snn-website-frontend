import type { CommercialProject } from "../types/projects";


export const commercialProjects: CommercialProject[] = [
    {
        id: 1,
        title: "IFM - DMS, IRIS Capital Ltd - Tax Document Management System",
        client: "IRIS Capital Ltd",
        period: "February 2025 - present",
        tasks: [
            "Led the development of a scalable web platform focused on frontend performance and usability.",
            "Built responsive UIs in React and TypeScript, integrated with .NET APIs, implemented design systems, reusable components, and optimized app performance.",
            "Managed CI/CD and deployments on Azure, collaborating across teams.",
        ],
        technologies: [
            "React",
            "TypeScript",
            "Ant Design",
            "Kendo UI",
            "Redux Toolkit",
            "Firebase Realtime Database",
            "CI/CD",
            "Azure",
            ".NET APIs",
        ],
        image: '/projects/iris.png',
        website: 'https://www.irisglobal.com/products/accounting-document-management/'
    },
    {
        id: 2,
        title: "Operator X, Circles Life - Telco SAAS Platform",
        client: "Circles Life, Singapore",
        period: "January 2024 - May 2024",
        tasks: [
            "Developed a company-based dashboard from end to end for Onic, a digital product in Singapore.",
            "Focused on UI design, state management, and backend integration for a seamless experience.",
            "Built the frontend using React, Next.js, and TypeScript, styled with Ant Design, and integrated backend logic with Node.js.",
        ],
        technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Ant Design",
            "Node.js",
            "Jest",
        ],
        image: '/projects/circles-life.svg',
        website: 'https://www.circles.life/sg/',
    },
    {
        id: 3,
        title: "Annapurana Customer X, Circles Life - Telco SAAS Platform",
        client: "Circles Life, Singapore",
        period: "August 2023 - January 2024",
        tasks: [
            "Rewrote and modernized a complex legacy codebase for a major telco SaaS client.",
            "Modularized architecture, improved maintainability, and optimized frontend performance.",
            "Enhanced both customer and operator portals with improved UI workflows and streamlined UX.",
            "Delivered milestones enabling faster feature rollouts.",
        ],
        technologies: [
            "React",
            "TypeScript",
            "Zustand",
            "Next UI",
            "React Query",
            "REST APIs",
            "Azure DevOps",
            "CI/CD",
        ],
        image: '/projects/circles-life.svg',
        website: 'https://www.circles.life/sg/',
    },
    {
        id: 4,
        title: "Spades App, Spades – POS Integrated Restaurant Service Platform",
        client: "Spades App, UAE",
        period: "February 2022 - December 2022",
        tasks: [
            "Developed the restaurant ordering and payment module with React SPA and integrated with payment gateways.",
            "Built a reusable design system and component library using React and Material-UI.",
            "Enhanced SEO and initial load performance with a customer-facing web app using Next.js.",
            "Implemented analytics for better product decisions.",
        ],
        technologies: [
            "React",
            "Next.js",
            "Material-UI",
            "Node.js",
            "MongoDB",
            "REST APIs",
            "Google Analytics",
            "Datadog",
            "Azure CI/CD",
        ],
        image: '/projects/spades.jpeg',
        website: 'https://www.linkedin.com/company/spadesapp/'
    },
];

