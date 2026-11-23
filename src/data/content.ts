/**
 * OTAS | Ontario Tech Aerial Systems
 * Single Source of Truth Content Configuration
 */

export type SponsorTierId = 'mission-partner' | 'flight-path' | 'ground-link';

export interface SponsorEntry {
  name: string;
  tier: SponsorTierId;
  websiteUrl?: string;
  logoUrl?: string;
  description?: string;
}

export interface TeamSectionContent {
  hero: {
    teamName: string;
    headline: string;
    subheading: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    advisors: {
      heading: string;
      summary: string;
      points: string[];
      ctaLabel: string;
      ctaSubject: string;
    };
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
  };
  projects: {
    eyebrow: string;
    heading: string;
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
    tiersHeading: string;
    tiers: {
      id: SponsorTierId;
      name: string;
      range: string;
      description: string;
      perks: string[];
    }[];
    currentNeedsHeading: string;
    needsSplit: {
      monetary: {
        title: string;
        tagline: string;
        items: string[];
      };
      inKind: {
        title: string;
        tagline: string;
        items: string[];
      };
    };
    whatWeOfferHeading: string;
    whatWeOffer: {
      title: string;
      description: string;
    }[];
    contactPrompt: string;
    officialClubsPortalUrl: string;
  };
  getInvolved: {
    eyebrow: string;
    heading: string;
    invitation: string;
    departmentsHeading: string;
    departments: {
      name: string;
      focus: string;
      description: string;
    }[];
    advisorRole: {
      heading: string;
      description: string;
      ctaLabel: string;
      ctaSubject: string;
    };
    faqHeading: string;
    faqs: {
      question: string;
      answer: string;
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
  sponsorsPage: {
    eyebrow: string;
    heading: string;
    description: string;
    sponsors: SponsorEntry[];
  };
}

export interface SiteConfig {
  teamName: string;
  shortName: string;
  university: string;
  location: string;
  contactEmail: string;
  recruitmentOpen: boolean;
  externalForms: {
    studentApplicationUrl: string;
    sponsorInquiryUrl: string;
    officialClubsPortalUrl: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  teamName: "OTAS | Ontario Tech Aerial Systems",
  shortName: "OTAS",
  university: "Ontario Tech University",
  location: "Ontario Tech University, Oshawa, Ontario, Canada",
  contactEmail: "otas@ontariotechu.net",
  recruitmentOpen: true,

  // External Form Links
  externalForms: {
    studentApplicationUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4aDMUVotG02qmt2qp4ruwo-2n_UZr7VOlcJUsk7Kfn5UNFoxTk5MM1NJQUpHWjlaODNVWU05VFEzQy4u",
    sponsorInquiryUrl: "mailto:otas@ontariotechu.net?subject=Sponsorship%20Inquiry%20-%20Ontario%20Tech%20Aerial%20Systems",
    officialClubsPortalUrl: "https://engineering.ontariotechu.ca/current-students/current-undergraduate/clubs_and_societies/index.php",
  },
};

export const WEBSITE_CONTENT: TeamSectionContent = {
  hero: {
    teamName: "OTAS | Ontario Tech Aerial Systems",
    headline: "Ontario Tech’s Drone Design Team.",
    subheading: "We are a new student engineering design team at Ontario Tech University. Our goal is to compete in the Aerial Evolution Association of Canada (AEAC) National Student UAS Competition. Our current focus is designing and building a modular quadcopter for flight testing and training.",
  },

  about: {
    eyebrow: "Our Mission & Origins",
    heading: "About the Team",
    paragraphs: [
      "Ontario Tech Aerial Systems (OTAS) is a new student engineering design team founded to give Ontario Tech students practical, cross-disciplinary experience designing, assembling, and programming unmanned aerial systems.",
      "Our long-term milestone is to design, manufacture, and fly an autonomous competition aircraft at the annual Aerial Evolution Association of Canada (AEAC) National Student UAS Competition.",
      "During our first year, our focus is on building our team, establishing our workflows, and creating a reliable modular quadcopter.",
    ],
    advisors: {
      heading: "Technical & Industry Advisors",
      summary:
        "Alongside our student team, OTAS offers Technical & Industry Advisor roles for external experts who want to mentor students and share domain knowledge without holding decision-making power.",
      points: [
        "Mentorship Position: Advisors provide technical guidance, design review feedback, and industry perspective across avionics, airframes, software, and flight safety.",
        "No Decision-Making Power: OTAS remains completely student-led; advisors do not hold voting rights or formal authority over team decisions.",
        "Open to External Experts: Advisors do not need to be Ontario Tech University students, faculty, or staff.",
      ],
      ctaLabel: "Inquire About Advising",
      ctaSubject: "Advisor Inquiry - Ontario Tech Aerial Systems",
    },
  },

  competition: {
    eyebrow: "National Collegiate Challenge",
    heading: "Competition & AEAC",
    whatIsAeac: "The Aerial Evolution Association of Canada (AEAC) National Student UAS Competition is Canada's premier collegiate drone challenge, tasking student teams with solving realistic aerial operations such as autonomous waypoint navigation, sensor payload integration, and target reconnaissance.",
    roadmap: [
      {
        phase: "Year 1",
        title: "Team Foundations",
        description: "In our first year we are working on putting our team together - we believe success will come from first building a resilient team. We are also working on designing, building and then flying our first multirotor drone before next year's AEAC competition.",
      },
      {
        phase: "Year 2+",
        title: "Compete at AEAC",
        description: "Year 2 is game time, this is where we put our year 1 efforts to the test and aim ourselves at the annual AEAC competition!",
      },
    ],
  },

  projects: {
    eyebrow: "Technical Development",
    heading: "Current Engineering Projects",
    plannedProject: {
      title: "Modular Quadcopter Testbed",
      status: "In Development",
      description: "Our primary technical project is a modular quadcopter designed to serve as a learning platform for new members and a test bench for future competition aircraft. Our team is currently working on defining our project constraints across our technical departments.",
      nextSteps: "Detailed build specs and flight test updates will be shared as bench testing begins.",
    },
  },

  sponsorUs: {
    eyebrow: "Industry & Community Partners",
    heading: "Sponsor Our Team",
    subheading: "Partner with Ontario Tech engineering students building collegiate aerial robotics capabilities from the ground up.",
    whySponsor: "As an engineering design team at Ontario Tech University, sponsor backing directly equips student engineers with fundamental hardware, benchtop safety tools, and testing components. Sponsoring our team gives industry partners direct visibility among motivated students in mechanical, electrical, software, and mechatronics engineering.",
    tiersHeading: "Sponsorship Tiers",
    tiers: [
      {
        id: "ground-link",
        name: "Ground Link Tier",
        range: "$500 – $999",
        description: "Foundational support strengthening OTAS operations, student development, and early engineering milestones.",
        perks: [
          "Logo and link featured on official OTAS website",
          "Social media welcome and sponsor recognition post",
          "Semester technical progress and build updates",
          "Team resume book access for student recruitment",
        ],
      },
      {
        id: "flight-path",
        name: "Flight Path Tier",
        range: "$1,000 – $2,500",
        description: "Expanded support accelerating team growth, hands-on learning, and progress toward major technical milestones.",
        perks: [
          "Medium logo placement on our physical testbed airframe",
          "Featured company spotlight across team social channels",
          "Invitation to team events",
          "Prominent logo on official team presentations and posters",
          "Direct student engagement and recruiting outreach",
        ],
      },
      {
        id: "mission-partner",
        name: "Mission Partner Tier",
        range: "$2,500+",
        description: "Flagship partnership powering OTAS through its founding years, highest-impact initiatives, and long-term growth.",
        perks: [
          "Premier large logo on physical competition aircraft & team apparel",
          "Dedicated company recognition in all competition submissions",
          "Exclusive private flight demonstration and team presentation",
          "Priority recruiting sessions and direct access to graduating members",
          "Permanent recognition as an OTAS Founding Mission Partner",
        ],
      },
    ],
    currentNeedsHeading: "Foundational Hardware & Resource Needs",
    needsSplit: {
      monetary: {
        title: "Monetary Sponsorship Funds",
        tagline: "Direct team funding allocated toward high-impact development and competition milestones.",
        items: [
          "Components for our first quadcopter, including motors, ESCs, propellers, batteries, and a flight controller",
          "Build and testing tools, such as soldering equipment, multimeters, safety gear, and workshop consumables",
          "Materials and fabrication, including airframe components, fasteners, 3D-printing materials, and custom mounting hardware",
          "Drone equipment, including telemetry radios, RC equipment, chargers, and sensor modules",
          "Future AEAC Student UAS Competition participation, including registration fees and team travel once we reach the competition stage",
        ],
      },
      inKind: {
        title: "In-Kind Equipment & Resources",
        tagline: "Component donations, bench tools, raw materials, or engineering software access.",
        items: [
          "Drone Hardware: Brushless motors, ESCs, carbon-fiber frame plates, flight controllers, GPS & telemetry",
          "Benchtop Tools & Materials: Soldering stations, digital multimeters, wire harnesses, crimpers, fasteners, storage containers",
          "Battery & Power Systems: LiPo flight batteries, balance chargers, fire-safe charging bags, bench DC power supplies",
          "Fabrication & Engineering Software: 3D printing filament, composite fabrication supplies, CNC machining, CAD/simulation licenses",
        ],
      },
    },
    whatWeOfferHeading: "What We Offer Partners",
    whatWeOffer: [
      {
        title: "Clear Project Updates",
        description: "Regular technical progress reports showing exactly how sponsor funding and equipment are used on our testbed.",
      },
      {
        title: "Brand Visibility",
        description: "Logo placement on our physical testbed airframe, team apparel, website, and technical reports.",
      },
      {
        title: "Talent Engagement",
        description: "Direct connection with motivated Ontario Tech students building practical aerospace, avionics, and software experience.",
      },
    ],
    contactPrompt: "Ready to partner with OTAS or have questions for our student engineering team? You can contribute through Ontario Tech's official design teams portal or connect with our organizers directly.",
    officialClubsPortalUrl: "https://engineering.ontariotechu.ca/current-students/current-undergraduate/clubs_and_societies/index.php",
  },

  getInvolved: {
    eyebrow: "Students & New Recruits",
    heading: "Join Us",
    invitation: "We invite Ontario Tech students from any faculty, program, or academic year to join our team. No prior drone, robotics, or aerospace experience is needed. We are here to learn, build, and test together through hands-on technical projects.",
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
    advisorRole: {
      heading: "Technical & Industry Advisors",
      description: "We welcome experienced engineers, UAV specialists, alumni, and industry professionals into advisory roles to mentor students and review technical designs without holding decision-making power. Advisors do not need to be Ontario Tech University students, faculty, or staff—the team stays student-led while learning from your experience.",
      ctaLabel: "Inquire About Advising",
      ctaSubject: "Advisor Inquiry - Ontario Tech Aerial Systems",
    },
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is the weekly time commitment?",
        answer: "Most members spend around 3 to 5 hours per week on subteam meetings, CAD or software tasks, and hands-on builds. Hours are flexible around midterms, labs, and final exams.",
      },
      {
        question: "Do I have to be in Engineering?",
        answer: "No. We welcome Ontario Tech students from any faculty, program, or year—including Computer Science, Engineering, Business, and Science.",
      },
      {
        question: "When will I hear back after applying?",
        answer: "Recruitment runs on a rolling basis. After you submit the application form, a team lead will follow up by university email with subteam onboarding details and meeting times.",
      },
    ],
  },

  contact: {
    eyebrow: "Get in Touch",
    heading: "Contact the Team",
    description: "Interested in sponsoring, joining, or connecting with the student team? Reach out through any of the channels below.",
    email: "otas@ontariotechu.net",
    location: "Ontario Tech University, Oshawa, Ontario, Canada",
    socials: [
      {
        name: "Email",
        handle: "otas@ontariotechu.net",
        description: "Direct sponsorship and student inquiry inbox",
        url: "mailto:otas@ontariotechu.net",
      },
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
        name: "X",
        handle: "@ontechdrone",
        description: "Team news, quick updates & campus announcements",
        url: "https://x.com/ontechdrone",
      },
    ],
  },

  sponsorsPage: {
    eyebrow: "Thank You to Our Partners",
    heading: "Thank You to Our Sponsors",
    description:
      "We are grateful to the companies and organizations that support Ontario Tech Aerial Systems. Your contributions equip our students with the hardware, fabrication tooling, and operational support needed to design, build, and test autonomous aerial vehicles.",
    // Add confirmed sponsors here:
    // { name: "Partner Name", tier: "mission-partner" | "flight-path" | "ground-link", websiteUrl: "https://...", logoUrl: "/...", description: "..." }
    sponsors: [
      {
        name: "Protocase",
        tier: "ground-link",
        websiteUrl: "https://www.protocase.com/",
        logoUrl: "/assets/aistudio/protocase-brand_8997491c.png",
      },
    ],
  },
};
