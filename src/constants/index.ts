import Twitter from "@/../public/images/projects/twitter.png";
import { FaBriefcase, FaEnvelope, FaGraduationCap, FaHome, FaLaptopCode, FaProjectDiagram, FaTools, FaUser } from "react-icons/fa";

import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export const myTwitterLink = "https://twitter.com/Ratul2582";
export const myGithubLink = "https://github.com/ratul544388";
export const MyLinkdinLink =
  "https://www.linkedin.com/in/ratul-islam-a0774521a";
export const myFacebookLink = "https://www.facebook.com/ratul544388";

export const myEmail = "ratulislam544388@gmail.com";
export const myAddress = "Keranigonj Dhaka 1310, Bangladesh";
export const myPhone = "+8801815555105";

export const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: FaHome
  },
  {
    label: "About",
    href: "#about",
    icon: FaUser,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: FaProjectDiagram
  },
  {
    label: "Skills",
    href: "#skills",
    icon: FaTools
  },
  {
    label: "Experience",
    href: "#experience",
    icon: FaBriefcase,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: FaEnvelope,
  },
] as const;

export const projects = [
  {
    name: "Twitter Clone",
    description:
      "This is the projects description. It should be a little  bit longer. This is the projects description. It should be a little  bit longer. This is the projects description. It should be a little  bit longer",
    image: Twitter,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "ShadcnUI",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Stripe",
    ],
  },
  {
    name: "Twitter Clone",
    description:
      "This is the projects description. It should be a little  bit longer",
    image: Twitter,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "ShadcnUI",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Stripe",
    ],
  },
  {
    name: "Twitter Clone",
    description:
      "This is the projects description. It should be a little  bit longer",
    image: Twitter,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "ShadcnUI",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Stripe",
    ],
  },
  {
    name: "Twitter Clone",
    description:
      "This is the projects description. It should be a little  bit longer",
    image: Twitter,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "ShadcnUI",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Stripe",
    ],
  },
];

export const skills = [
  "Html",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Next.js",
  "ShadcnUI",
  "Framer motion",
  "MySQL",
  "MongoDB",
  "Prisma",
  "Tanstack Query",
  "Stripe",
];

export const experiences = [
  {
    title: "Self-Taught Full Stack Developer",
    icon: FaGraduationCap,
    location: "Your City, Your Country",
    description:
      "I embarked on a self-learning journey to become a full-stack web developer. I dedicated my time to learning various technologies, including React, Node.js, Express, MongoDB, and more. Through online courses, tutorials, and personal projects, I gained hands-on experience in building web applications from scratch.",
    date: "2022",
  },
  {
    title: "Personal Projects",
    icon: FaLaptopCode,
    location: "Your Home Office",
    description:
      "Throughout my learning journey, I worked on several personal projects to apply and reinforce my skills. These projects include (mention some of your projects along with a brief description of each). Through these projects, I honed my problem-solving abilities, improved my coding skills, and gained valuable experience in software development.",
    date: "2023 - 2024",
  },
  {
    title: "Freelance Web Developer",
    icon: FaBriefcase,
    location: "Remote",
    description:
      "As a freelance web developer, I collaborated with clients to bring their ideas to life. I specialized in creating custom websites and web applications tailored to their specific needs. From conceptualization to deployment, I provided end-to-end development services, ensuring high-quality solutions that met client requirements and exceeded expectations.",
    date: "2024",
  },
];

export const socialIcons = [
  {
    name: AiOutlineTwitter,
    href: myTwitterLink,
  },
  {
    name: FaFacebookSquare,
    href: myFacebookLink,
  },
  {
    name: FaGithubSquare,
    href: myGithubLink,
  },
  {
    name: FaLinkedin,
    href: MyLinkdinLink,
  },
];



