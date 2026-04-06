export const sponsors = [
  // ── 2025 CURRENT ──
  {
    name: "ANSYS",
    tier: "Title",
    year: 2025,
    status: "current",
    website: "https://ansys.com",
    logo: "/logos/ansys.png",
    description: "Simulation-driven product development software for engineering."
  },
  {
    name: "SolidWorks",
    tier: "Title",
    year: 2025,
    status: "current",
    website: "https://solidworks.com",
    logo: "/logos/solidworks.png",
    description: "Industry-leading 3D CAD design and engineering solutions."
  },
  {
    name: "Altium",
    tier: "Gold",
    year: 2025,
    status: "current",
    website: "https://altium.com",
    logo: "/logos/altium.png",
    description: "PCB design software for next-gen electronic systems."
  },
  {
    name: "MATLAB",
    tier: "Gold",
    year: 2025,
    status: "current",
    website: "https://mathworks.com",
    logo: "/logos/matlab.png",
    description: "Computing environment for algorithm development and data analysis."
  },
  {
    name: "SKF Bearings",
    tier: "Silver",
    year: 2025,
    status: "current",
    website: "https://skf.com",
    logo: "/logos/skf.png",
    description: "Precision bearings and rotating equipment technology."
  },
  {
    name: "3M",
    tier: "Silver",
    year: 2025,
    status: "current",
    website: "https://3m.com",
    logo: "/logos/3m.png",
    description: "Advanced materials, adhesives, and industrial solutions."
  },
  {
    name: "Brembo",
    tier: "Silver",
    year: 2025,
    status: "current",
    website: "https://brembo.com",
    logo: "/logos/brembo.png",
    description: "High-performance braking systems for motorsport."
  },
  {
    name: "Würth",
    tier: "Bronze",
    year: 2025,
    status: "current",
    website: "https://wurth.com",
    logo: "/logos/wurth.png",
    description: "Fasteners, tools, and assembly supplies."
  },
  {
    name: "Mouser Electronics",
    tier: "Bronze",
    year: 2025,
    status: "current",
    website: "https://mouser.com",
    logo: "/logos/mouser.png",
    description: "Electronic component distributor for prototyping."
  },
  {
    name: "Henkel",
    tier: "Bronze",
    year: 2025,
    status: "current",
    website: "https://henkel.com",
    logo: "/logos/henkel.png",
    description: "Adhesive technologies and surface treatments."
  },

  // ── 2024 CURRENT ──
  {
    name: "Siemens NX",
    tier: "Title",
    year: 2024,
    status: "current",
    website: "https://siemens.com",
    logo: "/logos/siemens.png",
    description: "Integrated CAD/CAM/CAE for product engineering."
  },
  {
    name: "ANSYS",
    tier: "Gold",
    year: 2024,
    status: "current",
    website: "https://ansys.com",
    logo: "/logos/ansys.png",
    description: "Simulation-driven product development software."
  },
  {
    name: "Continental",
    tier: "Gold",
    year: 2024,
    status: "current",
    website: "https://continental.com",
    logo: "/logos/continental.png",
    description: "Automotive technology and tire systems."
  },
  {
    name: "Bosch",
    tier: "Silver",
    year: 2024,
    status: "current",
    website: "https://bosch.com",
    logo: "/logos/bosch.png",
    description: "Mobility solutions and automotive components."
  },
  {
    name: "Harting",
    tier: "Bronze",
    year: 2024,
    status: "current",
    website: "https://harting.com",
    logo: "/logos/harting.png",
    description: "Industrial connectivity and HV connectors."
  },

  // ── 2023 PAST ──
  {
    name: "SolidWorks",
    tier: "Title",
    year: 2023,
    status: "past",
    website: "https://solidworks.com",
    logo: "/logos/solidworks.png",
    description: "3D CAD design and engineering solutions."
  },
  {
    name: "Texas Instruments",
    tier: "Gold",
    year: 2023,
    status: "past",
    website: "https://ti.com",
    logo: "/logos/ti.png",
    description: "Semiconductors and embedded processors."
  },
  {
    name: "Dow Chemical",
    tier: "Silver",
    year: 2023,
    status: "past",
    website: "https://dow.com",
    logo: "/logos/dow.png",
    description: "Material science and specialty chemicals."
  },
  {
    name: "Proto Labs",
    tier: "Bronze",
    year: 2023,
    status: "past",
    website: "https://protolabs.com",
    logo: "/logos/protolabs.png",
    description: "Rapid prototyping and on-demand manufacturing."
  },

  // ── 2022 PAST ──
  {
    name: "Dassault Systèmes",
    tier: "Title",
    year: 2022,
    status: "past",
    website: "https://3ds.com",
    logo: "/logos/dassault.png",
    description: "3DEXPERIENCE platform and virtual twin solutions."
  },
  {
    name: "National Instruments",
    tier: "Gold",
    year: 2022,
    status: "past",
    website: "https://ni.com",
    logo: "/logos/ni.png",
    description: "Test, measurement, and control systems."
  },
  {
    name: "Shell",
    tier: "Silver",
    year: 2022,
    status: "past",
    website: "https://shell.com",
    logo: "/logos/shell.png",
    description: "Lubricants and energy solutions for motorsport."
  }
];

export const tierOrder = ['Title', 'Gold', 'Silver', 'Bronze'];

export const tierColors = {
  Title: '#FF2E2E',
  Gold: '#FFB800',
  Silver: '#A8B4C0',
  Bronze: '#CD7F32',
};

export const tierBenefits = [
  {
    tier: 'Title',
    price: '₹2.5L+',
    benefits: [
      'Logo on car body (prime placement)',
      'Logo on team jersey & pit banner',
      'Social media feature (dedicated post)',
      'Mention in all event presentations',
      'Naming rights for a subsystem',
      'Annual performance report',
      'First access to recruit from team',
    ],
  },
  {
    tier: 'Gold',
    price: '₹1L – ₹2.5L',
    benefits: [
      'Logo on car sidepod / rear wing',
      'Logo on team jersey',
      'Social media mention (shared post)',
      'Mention in event presentations',
      'Quarterly progress updates',
    ],
  },
  {
    tier: 'Silver',
    price: '₹50K – ₹1L',
    benefits: [
      'Logo on car (secondary placement)',
      'Logo on pit banner',
      'Social media mention',
      'Bi-annual progress updates',
    ],
  },
  {
    tier: 'Bronze',
    price: '₹30K+',
    benefits: [
      'Logo on team website',
      'Logo on pit banner',
      'Social media thank-you post',
    ],
  },
];

export const whyPartner = [
  {
    title: 'Brand Visibility',
    text: 'Your logo on the car, jersey, pit banner, and across our digital platforms — seen at national and international FSAE events.',
  },
  {
    title: 'Engineering Talent Pipeline',
    text: 'Direct access to top engineering talent trained in real-world design, manufacturing, and problem-solving.',
  },
  {
    title: 'R&D Collaboration',
    text: 'Test your products in extreme motorsport conditions. Get real-world validation data and case studies.',
  },
  {
    title: 'CSR & Education',
    text: 'Support STEM education and next-generation engineers. Demonstrate commitment to innovation and youth empowerment.',
  },
  {
    title: 'Industry Network',
    text: 'Connect with 100+ FSAE teams, judges from OEMs like Tesla, Bosch, and Mahindra at global competitions.',
  },
];

export const supportMethods = [
  {
    title: 'Financial Sponsorship',
    text: 'Direct monetary contributions that fund components, manufacturing, and competition travel.',
    icon: '₹',
  },
  {
    title: 'In-Kind Sponsorship',
    text: 'Provide materials, components, raw stock, or fabrication services directly to the team.',
    icon: '⚙',
  },
  {
    title: 'Technical Partnership',
    text: 'Software licenses, simulation tools, or engineering mentorship from your technical team.',
    icon: '⚡',
  },
  {
    title: 'Manufacturing Support',
    text: 'CNC machining, 3D printing, welding, or composite layup services for vehicle parts.',
    icon: '🔩',
  },
  {
    title: 'Knowledge & Mentorship',
    text: 'Share expertise through workshops, design reviews, or assign an engineer mentor to the team.',
    icon: '📐',
  },
];
