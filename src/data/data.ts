import { PiChalkboardTeacherBold } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { FaMouse } from "react-icons/fa";
import { HiDesktopComputer } from "react-icons/hi";
import { BsKeyboard } from "react-icons/bs";
import React from "react";

export const LINKS = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Studies",
    hash: "#studies",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const STUDIES_DATA = [
  {
    year: "Currently Studying",
    title: "Backend Developer Rock{TheCode}",
    description: {
      1: "Node",
      2: "MongoDB",
      3: "API Rest",
      4: "Express",
    },
    icon: React.createElement(HiDesktopComputer),
  },
  {
    year: "Jan 2023 - Oct 2023",
    title: "Front-End Developer Rock{TheCode}",
    description: {
      1: "React",
      2: "React styles",
      3: "React with Typescript",
      4: "Introductn to testing with React",
    },
    icon: React.createElement(BsKeyboard),
  },
  {
    year: "Jan 2023 - Sept 2023",
    title: "Javascript Developer Rock{TheCode}",
    description: {
      1: "HTML",
      2: "CSS",
      3: "Advance Javascript",
      4: "Advance Javascript DOM",
      5: "Asynchronous Javascript",
    },

    icon: React.createElement(FaMouse),
  },
  {
    year: "2017 - 2023",
    title: "Physical Activity and Sport Sciences Degree",
    description: {
      1: "Understanding the utilization and design of technologies that are applicable in the fields of study, physical activity, health, or sports",
    },

    icon: React.createElement(CgGym),
  },
  {
    year: "2017 - 2023",
    title: "Primary School Teacher Degree ",
    description: {
      1: "Applying information and communication education technologies and introductory robotics teaching methodologies",
    },

    icon: React.createElement(PiChalkboardTeacherBold),
  },
] as const;

export const SKILLS_DATA = [
  {
    name: "Frontend:",
    skills: [
      {
        name: "HTML5",
        icon: "./assets/icons/skills/html.png",
      },
      {
        name: "CSS3",
        icon: "./assets/icons/skills/css.png",
      },
      {
        name: "Javascript",
        icon: "./assets/icons/skills/javaascript.png",
      },
      {
        name: "TypeScript",
        icon: "./assets/icons/skills/typescript.png",
      },

      {
        name: "React",
        icon: "./assets/icons/skills/react.png",
      },

      {
        name: "Tailwind",
        icon: "./assets/icons/skills/tailwind.png",
      },

      {
        name: "Vite",
        icon: "./assets/icons/skills/vite.png",
      },
    ],
  },

  {
    name: "Backend: in Progress",

    skills: [
      {
        name: "Node",
        icon: "./assets/icons/skills/node.png",
      },
      {
        name: "MongoDB",
        icon: "./assets/icons/skills/mongo.png",
      },
      {
        name: "Express",
        icon: "./assets/icons/skills/express.png",
      },

      {
        name: "Testing",
        icon: "./assets/icons/skills/testing.png",
      },
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "Game Hub",
    description:
      "Based on rock-climbing, includes Tic Tac Toe, Hangman, and Sudoku games. User authentication included. ",
    tools: ["HTML", "CSS", "Typescript", "React"],
    preview: "./assets/images/projects/game-hub.png",
    code: "https://github.com/mireia22/game-hub",

    app: "https://rock-game-hub.netlify.app/",
  },
  {
    title: "Nasa App",
    description:
      "Showcasing Astronomy Pictures of the Day and Mars rover images.",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    preview: "./assets/images/projects/nasa.jpg",
    code: "https://github.com/mireia22/REACT-Project1-NASA-API",
    app: "https://powernasa.netlify.app/",
  },

  {
    title: "Meteo App",
    description:
      "A mobile app for learning languages with vocabulary quizzes, flashcards, and pronunciation practice.",
    tools: ["HTML", "CSS", "TypeScript", "React"],
    preview: "./assets/images/projects/meteo.jpg",
    code: "https://github.com/mireia22/la_meteo",
    app: "https://lameteoapp.netlify.app/",
  },
  {
    title: "Listy",
    description:
      "A task management tool for organizing and tracking personal duties.",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    preview: "./assets/images/projects/listy.png",
    code: "https://github.com/mireia22/Listy",
    app: "https://listyshopping.netlify.app/",
  },
] as const;
