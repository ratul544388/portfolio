import EcommerceImage from "@/../public/images/projects/ecommerce.png";
import TwitterImage from "@/../public/images/projects/twitter-clone.png";
import FoodDeliveryImage from "@/../public/images/projects/food-delivery-app.png";
import GymImage from "@/../public/images/projects/gym.png";
import PortfolioImage from "@/../public/images/projects/portfolio.png";
import BlogAppImage from "@/../public/images/projects/blog-app.png";
import CarHubImage from "@/../public/images/projects/carhub.png";
import MiniProjectsImage from "@/../public/images/projects/mini-projects.png";

import {
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
  FaHome,
  FaLaptopCode,
  FaProjectDiagram,
  FaTools,
  FaUser,
} from "react-icons/fa";

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
export const nextJsUrl = "https://nextjs.org/";
export const reactUrl = "https://react.dev/";

export const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: FaHome,
  },
  {
    label: "About",
    href: "#about",
    icon: FaUser,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: FaProjectDiagram,
  },
  {
    label: "Skills",
    href: "#skills",
    icon: FaTools,
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
    name: "Ecommerce App",
    description:
      "The full-stack e-commerce platform enables admins to effortlessly manage products, categories, and features while providing users with a seamless shopping experience. Users can browse, add to cart or wishlist, and securely purchase products using Stripe.",
    image: EcommerceImage,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "ShadcnUI",
      "Clerk",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Stripe",
      "Framer motion",
    ],
    githubLink: "https://github.com/ratul544388/ecommerce",
    deployedLink: "https://ecommerce-coral-delta.vercel.app",
  },
  {
    name: "Twitter Clone",
    description:
      "Empower your voice with Tweets, engage through Likes, explore vibrant communities, and experience seamless discovery. Unlock Blue Badge perks for exclusive features.",
    image: TwitterImage,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "ShadcnUI",
      "Clerk",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Stripe",
    ],
    githubLink: "https://github.com/ratul544388/Twitter-clone-next-14",
    deployedLink: "https://twitter-clone-next-14.vercel.app",
  },
  {
    name: "Food Delivery App",
    description:
      "Food Delivery app with its seamless platform for users and administrators. Customers enjoy effortless browsing, ordering, and reviewing, while restaurant owners manage orders and menus with ease. With Quick Bite, experience swift and satisfying culinary journeys, offering convenience at your fingertips.",
    image: FoodDeliveryImage,
    tags: [
      "React",
      "Next.Js",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "MongoDB",
      "Prisma",
      "Clerk",
      "Framer Motion",
    ],
    githubLink: "https://github.com/ratul544388/quick-bite",
    deployedLink: "https://quick-bite-eosin.vercel.app",
  },
  {
    name: "Gym, Admin & User Portal",
    description:
      "Specializing in Efficient Gym Administration: Seamlessly Manage Member Enrollment, Renewals, and Membership Plans. Utilize User Tables with Versatile Filters for Member Management. Enhance User Experience with a Dynamic FAQ Page. Experience Elevated Gym Management on Our Full Stack Website.",
    image: GymImage,
    tags: [
      "React",
      "Next.Js",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "MongoDB",
      "Prisma",
      "Clerk",
      "Tanstack Query",
      "Stripe",
    ],
    githubLink: "https://github.com/ratul544388/gym",
    deployedLink: "https://gym-phi-one.vercel.app/",
  },
  {
    name: "My Portfolio",
    description:
      "Welcome to Ratul Hossain's portfolio! Explore my creative projects and innovative designs. Let's turn your ideas into reality together.",
    image: PortfolioImage,
    tags: [
      "React",
      "Next.Js",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "Framer Motion",
      "Resend",
    ],
    githubLink: "https://github.com/ratul544388/portfolio",
    deployedLink: "https://portfolio-vert-pi-26.vercel.app",
  },
  {
    name: "Blog App",
    description:
      "QuillQuest is a vibrant blog web app where users share diverse topics, fostering interactive engagement through voting and commenting. With an intuitive interface, users navigate captivating content, shaping lively discussions. It's a dynamic platform where every post is a journey of discovery, bringing words and wisdom together in a vibrant community.",
    image: BlogAppImage,
    tags: [
      "React",
      "Next.Js",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "MongoDB",
      "Prisma",
      "Clerk",
    ],
    githubLink: "https://github.com/ratul544388/blog-app",
    deployedLink: "https://blog-app-chi-drab.vercel.app",
  },
  {
    name: "Car Hub",
    description:
      "CarHub offers a seamless browsing experience, allowing users to explore a wide range of cars with advanced filters for year, fuel type, and manufacturer. Easily find rental options with transparent pricing, tailored to your preferences, making car rental hassle-free and efficient.",
    image: CarHubImage,
    tags: ["React", "Next.Js", "TypeScript", "TailwindCSS", "ShadcnUI"],
    githubLink: "https://github.com/ratul544388/car-hub",
    deployedLink:
      "https://portfolio-two-sepia-49.vercel.app/https://car-hub-dusky-eta.vercel.app",
  },
  {
    name: "Mini Projects",
    description:
      "Explore a collection of classic games like Tic Tac Toe, Hangman, and more in one mini project. Challenge yourself and have fun anytime, anywhere!",
    image: MiniProjectsImage,
    tags: ["React", "Next.Js", "TypeScript", "TailwindCSS", "ShadcnUI"],
    githubLink: "https://github.com/ratul544388/mini-projects",
    deployedLink: "https://mini-projects-zeta.vercel.app",
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
    location: "Dhaka, Bangladesh",
    description:
      "I embarked on a self-learning journey to become a full-stack web developer. I dedicated my time to learning various technologies, including TypeScript, React, Tailwind CSS, Node.js, Next.js, MongoDB, and more. Through online courses, tutorials, and personal projects, I gained hands-on experience in building web applications from scratch.",
    date: "2022",
  },
  {
    title: "Personal Projects",
    icon: FaLaptopCode,
    location: "Dhaka",
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
    icon: AiOutlineTwitter,
    href: myTwitterLink,
  },
  {
    icon: FaFacebookSquare,
    href: myFacebookLink,
  },
  {
    icon: FaGithubSquare,
    href: myGithubLink,
  },
  {
    icon: FaLinkedin,
    href: MyLinkdinLink,
  },
];

export const ease = [0.37, 0, 0.63, 1];
