/**
 * OTAS | Ontario Tech Aerial Systems
 * Single Source of Truth Content Configuration
 */

export interface TeamSectionContent {
  hero: {
    teamName: string;
    headline: string;
    subheading: string;
    note: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    noProjectsDisclaimer: string;
  };
  competition: {
    eyebrow: string;
    heading: string;
    whatIsAeac: string;
    roadmap: {
      phase: string;
      title: string;
      description: string;
    }[];
    statusNote: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    preLaunchDisclaimer: string;
    plannedProject: {
      title: string;
      status: string;
      description: string;
      nextSteps: string;
    };
  };
  sponsorUs: {
    eyebrow: string;
    heading: string;
    subheading: string;
    whySponsor: string;
    currentNeedsHeading: string;
    currentNeeds: {
      title: string;
      description: string;
    }[];
    whatWeOfferHeading: string;
    whatWeOffer: {
      title: string;
      description: string;
    }[];
    contactPrompt: string;
  };
  getInvolved: {
    eyebrow: string;
    heading: string;
    invitation: string;
    experienceNote: string;
    departmentsHeading: string;
    departments: {
      name: string;
      focus: string;
      description: string;
    }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    email: string;
    location: string;
    socials: {
      name: string;
      handle: string;
      description: string;
      url: string;
    }[];
  };
}

export interface SiteConfig {
  teamName: string;
  shortName: string;
  university: string;
  location: string;
  contactEmail: string;
  provisionalStatusNotice: {
    enabled: boolean;
    badge: string;
    message: string;
    subtext?: string;
  };
  externalForms: {
    studentApplicationUrl: string;
    sponsorInquiryUrl: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  teamName: "OTAS | Ontario Tech Aerial Systems",
  shortName: "OTAS",
  university: "Ontario Tech University",
  location: "Ontario Tech University, Oshawa, Ontario, Canada",
  contactEmail: "otudrone@gmail.com",

  // Provisional / Pending University Status Banner
  provisionalStatusNotice: {
    enabled: true,
    badge: "Official Status: Under Review",
    message: "OTAS (Ontario Tech Aerial Systems) is actively operating in its pre-launch planning phase with weekly meetings and team development, currently awaiting formal university approval.",
    subtext: "Faculty response has been positive and formal design team approval is expected",
  },

  // External Form Links
  externalForms: {
    studentApplicationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc_OTAS_Sample_Intake/viewform",
    sponsorInquiryUrl: "mailto:otudrone@gmail.com?subject=Sponsorship%20Inquiry%20-%20Ontario%20Tech%20Aerial%20Systems",
  },
};

export const WEBSITE_CONTENT: TeamSectionContent = {
  hero: {
    teamName: "OTAS | Ontario Tech Aerial Systems",
    headline: "Building hands-on aerial systems experience from the ground up at Ontario Tech.",
    subheading: "We are a newly forming student design team at Ontario Tech University working toward competing in the Aerial Evolution Association of Canada (AEAC) National Student UAS Competition. Our initial focus is developing a modular quadcopter testbed as a hands-on training platform for new members.",
    note: "Actively operating in planning & team setup with weekly meetings. Official university approval is expected following positive faculty response.",
  },

  about: {
    eyebrow: "Our Mission & Origins",
    heading: "About the Team",
    paragraphs: [
      "Ontario Tech Aerial Systems (OTAS) is an engineering design team founded to give Ontario Tech students practical, cross-disciplinary experience designing, assembling, and programming unmanned aerial systems.",
      "We are actively operating in our pre-launch planning phase—hosting weekly team meetings, assembling core documentation, and structuring foundational workflows. University faculty have responded positively to our initial proposal, and formal design team recognition is expected as we finalize administrative review.",
      "Our long-term milestone is to design, manufacture, and fly an autonomous competition aircraft at the annual Aerial Evolution Association of Canada (AEAC) National Student UAS Competition.",
      "During our first year, our focus is grounded and educational: building core UAV fundamentals, establishing team workflows, and creating a reliable modular quadcopter testbed rather than rushing into complex airframes.",
    ],
    noProjectsDisclaimer: "We do not yet have completed projects to showcase.",
  },

  competition: {
    eyebrow: "National Collegiate Challenge",
    heading: "Competition & AEAC",
    whatIsAeac: "The Aerial Evolution Association of Canada (AEAC) National Student UAS Competition is Canada's premier collegiate drone challenge, tasking student teams with solving realistic aerial operations such as autonomous waypoint navigation, sensor payload integration, and target reconnaissance.",
    roadmap: [
      {
        phase: "Year 1",
        title: "Learning & Quadcopter Testbed",
        description: "Establish hands-on workshops in airframe assembly, flight controller configuration, and safety procedures while building our modular testbed.",
      },
      {
        phase: "Year 2+",
        title: "Build & Compete at AEAC",
        description: "Apply testbed flight data and acquired design experience to engineer our mission-specific aircraft and travel to compete directly at the national AEAC competition.",
      },
    ],
    statusNote: "We are currently laying the operational groundwork and technical roadmap in preparation for future AEAC competition cycles.",
  },

  projects: {
    eyebrow: "Technical Development",
    heading: "Current Engineering Projects",
    preLaunchDisclaimer: "We are in the pre-launch phase and do not yet have completed projects.",
    plannedProject: {
      title: "Modular Quadcopter Testbed (scope under definition)",
      status: "Planned / In definition",
      description: "Our first planned technical effort is a modular quadcopter testbed designed to serve as an accessible learning platform for new members and an experimental foundation for future competition aircraft. The detailed mechanical, electrical, and avionics scope is currently being defined.",
      nextSteps: "High-level technical specifications and performance benchmarks will be shared once development progresses.",
    },
  },

  sponsorUs: {
    eyebrow: "Industry & Community Partners",
    heading: "Sponsor Our Team",
    subheading: "Partner with Ontario Tech engineering students building collegiate aerial robotics capabilities from the ground up.",
    whySponsor: "As a newly forming engineering design initiative, early sponsor backing directly equips student engineers with fundamental hardware, benchtop safety tools, and testing components. Sponsoring our team gives industry partners direct visibility among motivated students in mechanical, electrical, software, and mechatronics engineering.",
    currentNeedsHeading: "Foundational Hardware & Resource Needs",
    currentNeeds: [
      {
        title: "Testbed Hardware & Avionics",
        description: "Motors, ESCs, carbon frames, flight controllers, radios, and telemetry modules for our training platform.",
      },
      {
        title: "Electronics & Benchtop Tools",
        description: "Soldering equipment, digital multimeters, wire harnesses, crimping tools, and basic test bench instrumentation.",
      },
      {
        title: "Battery & Charging Safety Equipment",
        description: "LiPo balance chargers, safety charging cases/bags, battery monitors, and power supplies.",
      },
      {
        title: "In-Kind Parts, Fabrication & Software",
        description: "Donations of off-the-shelf components, PCB manufacturing, 3D printing supplies, or engineering software access.",
      },
    ],
    whatWeOfferHeading: "What We Offer Partners",
    whatWeOffer: [
      {
        title: "Transparent & Grounded Collaboration",
        description: "Regular technical progress updates showing exactly how contributed equipment or funding is utilized on our testbed.",
      },
      {
        title: "Brand Visibility",
        description: "Prominent logo placement on our physical testbed airframe, website, team communications, and documentation.",
      },
      {
        title: "Talent Engagement",
        description: "Direct connection with hands-on Ontario Tech students actively building practical aerospace and autonomous systems skills.",
      },
    ],
    contactPrompt: "We welcome financial contributions, hardware donations, tooling, and mentorship. If your organization is interested in discussing partnership opportunities, please get in touch.",
  },

  getInvolved: {
    eyebrow: "Students & New Recruits",
    heading: "Get Involved with OTAS",
    invitation: "We invite Ontario Tech students from any program or academic year to get involved in shaping the team from day one.",
    experienceNote: "No prior drone, robotics, or aerospace experience is required. We are building this team so students can learn these skills together through guided, practical projects.",
    departmentsHeading: "Team Departments",
    departments: [
      {
        name: "Avionics",
        focus: "Flight hardware & power architecture",
        description: "Flight controllers, motor/ESC wiring, power distribution boards, sensor integration, radio links, and battery safety systems.",
      },
      {
        name: "Payload",
        focus: "Mission sensors & release mechanisms",
        description: "Camera gimbals, environmental sensors, target observation optics, and mission-specific deployment/drop mechanisms.",
      },
      {
        name: "Mechanical",
        focus: "Airframe structure & physical fabrication",
        description: "Structural design, CAD modeling, 3D printing, composite materials, motor mounts, landing gear, and physical stress testing.",
      },
      {
        name: "Software and Autonomy",
        focus: "Flight code, autonomy & ground control",
        description: "Flight stack configuration (PX4/ArduPilot), autonomous waypoint navigation, fail-safe logic, telemetry logging, and ground station software.",
      },
      {
        name: "Media and Outreach",
        focus: "Community engagement, documentation & brand",
        description: "Campus recruitment, video/photo build documentation, social presence, presentation assets, and prospective member communication.",
      },
      {
        name: "Finance",
        focus: "Budget management & procurement",
        description: "Team budget tracking, hardware procurement logistics, sponsor funding management, and expense accounting.",
      },
    ],
  },

  contact: {
    eyebrow: "Get in Touch",
    heading: "Contact the Team",
    description: "Interested in sponsoring, joining, or connecting with the student organizers? Reach out through any of the channels below.",
    email: "otudrone@gmail.com",
    location: "Ontario Tech University, Oshawa, Ontario, Canada",
    socials: [
      {
        name: "Instagram",
        handle: "@ontariotechdrone",
        description: "Official team announcements & build updates",
        url: "https://www.instagram.com/ontariotechdrone",
      },
      {
        name: "LinkedIn",
        handle: "Ontario Tech Aerial Systems",
        description: "Professional updates, partnerships & industry outreach",
        url: "https://www.linkedin.com/company/ontario-tech-aerial-systems",
      },
      {
        name: "Email",
        handle: "otudrone@gmail.com",
        description: "Direct sponsorship and student inquiry inbox",
        url: "mailto:otudrone@gmail.com",
      },
    ],
  },
};
