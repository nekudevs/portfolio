import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Gamepad2Icon } from "lucide-react";

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
    "Azure Devops",
    "Jira",
    "Typescript",
    "Node.js",
    "Python",
    "R",
    "RShiny",
    "C#",
    "CI/CD",
    "Data Analytics",
    "PostgreSQL",
    "Docker",
    "Java",
    "Springboot",
    "MySQL"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/tamagotchi", icon: Gamepad2Icon, label: "Tamagotchi" },
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
      company: "FDM Group",
      badges: [],
      href: "https://www.lsbu.ac.uk/",
      location: "London, Remote",
      title: "Digital Transformation Developer",
      logoUrl: "/lsbu.png",
      start: "Jul 2025",
      end: "Current",
      description:
        "Assisting in system integration and upkeep of student/staff record data and third line support.",
    },
    {
      company: "FDM Group",
      badges: [],
      href: "https://www.fdmgroup.com/",
      location: "London, Hybrid",
      title: "Software Consultant",
      logoUrl: "/fdm.png",
      start: "Dec 2025",
      end: "Current",
      description:
        "Finished Full Stack Development training and currently awaiting to be assigned to a lucky client.",
    },
    {
      company: "Falcon Coffees Ltd.",
      badges: [],
      href: "https://falconcoffees.com",
      location: "Lewes, Remote",
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
      location: "Southampton, On-Site",
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
      logoUrl: "/brightonuni.png"
    },
    {
      school: "Brockenhurst College",
      href: "https://www.brock.ac.uk/",
      degree: "A-Levels in Mathematics (A), Computer Science (B) and Animation (B)",
      logoUrl: "/brockcollege.png"
    },
    {
      school: "Noadswood School",
      href: "https://www.noadswood.hants.sch.uk/",
      degree: "GCSEs in \n Mathematics (7), \n Computer Science (7), \n Combined Science (8,8), \n English Language (5), \n English Literature (6), \n French (6), \n Graphics (7) \n Portuguese (A), \n Media Studies (7)",
      logoUrl: "/noadswood.png"
    },
  ],
  projects: [
    {
      title: "Natural Language Spot Robot Assistant",
      href: "https://chatcollect.com",
      dates: "Sept 2023 - June 2024",
      active: true,
      description:
        "Created a natural language AI assistant for the Boston Dynamics Spot robot which can understand and execute voice commands. Integrated ElevenLabs text-to-speech for realistic voice responses and OpenAI Whisper for accurate speech recognition. Developed using Python and the Spot SDK, enabling dynamic interactions with the robot such as movement or assistant. The problem was tackling the Spot's capabilities to help in real world situations.",
      technologies: [
        "Python",
        "Spot SDK",
        "ElevenLabs API",
        "OpenAI GPT-4 API",
        "OpenAI Whisper API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/nekudevs/final-project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/test.mp4",
    },
    {
      title: "IO",
      href: "https://www.instagram.com/io_society/?hl=en",
      dates: "Sept 2022 - May 2024",
      active: true,
      description:
        "Created and lead the University of Brighton's first ever tech society, IO Society. Organized weekly workshops and talks, hackathons, and social events for society members. Also lead the marketing, all promotional images prior to May 2024 were done by myself using Photoshop, Procreate and Canva.",
      technologies: [
        "Photoshop",
        "Procreate",
        "Canva",
      ],
      links: [
        {
          type: "Instagram",
          href: "https://www.instagram.com/io_society/?hl=en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/io.png",
      video: "",
    },
    {
      title: "Beach Diorama",
      href: "",
      dates: "2023",
      active: true,
      description:
        "As a beginner I created this model after following a tutorial on YouTube (by Polygon Runway) I managed to render this diorama of a beach.",
      technologies: [
        "Blender",
      ],
      links: [
        {
          type: "Tutorial Video",
          href: "https://www.youtube.com/watch?v=sL9ozfAivi0",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/blender.png",
      video: "",
    },
    {
      title: "Festimo",
      href: "",
      dates: "December 2024 - July 2025",
      active: true,
      description:
        "Developed a cross-platform mobile application using Flutter and Dart to help users share photos and events via user created albums which enabled synchronous photo sharing during festivals and events. Implemented features such as real-time chat, photo uploads, and event scheduling. Integrated FastAPI backend for user authentication and data management, hosted on AWS S3 with Docker and Kubernetes for scalability.",
      technologies: [
        "Flutter",
        "Dart",
        "Javascript",
        "HTML/CSS",
        "MaterialUI",
        "FastAPI",
        "AWS S3",
        "Docker",
        "Kubernetes",
      ],
      links: [
      ],
      image: "/festimo.png",
      video:
        "",
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
      title: "IO Society Hackathon 2023",
      dates: "22nd March 2023",
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
