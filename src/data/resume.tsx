import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dani Javeed",
  initials: "DJ",
  url: "https://dillion.io",
  location: "Hampshire, UK",
  locationLink: "https://www.google.com/maps/place/hampshire",
  description:
    "Software Engineer and Graphic Designer. I love creating/building things and helping people.",
  summary:
    "I've learned how to type on a keyboard before I could spell my own name. In the past, [I pursued a bachelor's of science degree in software engineering](/#education), interned at IBM, and [competed in 2 hackathons and even hosted 1 for fun](/#hackathons). I also had the pleasure of attending [AWS Summit 2025](https://aws.amazon.com/events/summits/london/) in London.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Blender",
    "Figma",
    "Photoshop",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "R",
    "RShiny",
    "C#",
    "CI/CD",
    "Data Analytics",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "danieljaveed@gmail.com",
    tel: "+447578608606",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nekudevs",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/danijaveed/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Falcon Coffees Ltd.",
      badges: [],
      href: "https://falconcoffees.com",
      location: "Remote",
      title: "Data Analyst",
      logoUrl: "/falconcoffees.png",
      start: "August 2024",
      end: "August 2025",
      description:
        "Developed R and Python scripts to analyse tree deforestation via geospatial information.Developed a full-stack web application using R Shiny package for traders to view the analysis.Explored methods to generate in-house deforestation results via satellite imagery and public deforestation data. Implemented database and optimized queries on top of configuring CI/CD pipelines for the project.",
    },
    {
      company: "IBM",
      badges: [],
      href: "https://www.ibm.com",
      location: "On-Site",
      title: "Information Technology Intern",
      logoUrl: "/ibm.png",
      start: "July 2019",
      end: "July 2019",
      description:
        "Implemented an automated real-time repository search algorithm.",
    },
  ],
  education: [
    {
      school: "University of Brighton",
      href: "https://www.brighton.ac.uk/index.aspx",
      degree: "2:1 Bachelor's Degree of Software Engineering (BSc)",
      logoUrl: "/brightonuni.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Brockenhurst College",
      href: "https://www.brock.ac.uk/",
      degree: "A-Levels in Mathematics (A), Computer Science (B) and Animation (B)",
      logoUrl: "/brockcollege.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Noadswood School",
      href: "https://www.noadswood.hants.sch.uk/",
      degree: "GCSEs in \n Mathematics (7), \n Computer Science (7), \n Combined Science (8,8), \n English Language (5), \n English Literature (6), \n French (6), \n Graphics (7) \n Portuguese (A), \n Media Studies (7)",
      logoUrl: "/noadswood.png",
      start: "2014",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
  ],
} as const;
