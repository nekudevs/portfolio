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
      title: "HackSussex Hackathon 2024",
      dates: "17th February - 18th February, 2024",
      location: "Brighton and Hove, UK",
      description:
        "Went as part of University of Brighton IO Society's representation, helped mentor society members and coach them through the experience and any issues they had.",
      image:
        "/hacksussex.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "HackSussex",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hacksussex.com/",
        },
      ],
    },
    {
      title: "IO Society Hackathon",
      dates: "22nd March",
      location: "Brighton and Hove, UK",
      description:
        "Hosted and organized the University of Brighton's first ever hackathon with 10+ participants.",
      image: "/io.png",
      links: [
        {
          title: "Instagram",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.instagram.com/p/Cp27iNqKjn1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
      ],
    },
    {
      title: "HackSussex Hackathon 2023",
      dates: "5th March - 6th March, 2023",
      location: "Brighton and Hove, UK",
      description:
        "Developed a prototype motion control knife throwing game using Unreal Blueprints and created models in Blender.",
      image: "/hacksussex.png",
      mlh: "",
      links: [
        {
          title: "Man'O'Knife Presentation",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/2nnySeUFI3w?si=wcXqlzb1YMFQuFSg&t=26281",
        },
        {
          title: "HackSussex",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hacksussex.com/",
        },
      ],
    },
  ],
} as const;
