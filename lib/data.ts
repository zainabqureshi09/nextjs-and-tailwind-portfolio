import botImg from "@/public/chatbot.png";
import trackerImg from "@/public/tracker.png";
import portfolioImg from "@/public/portfolioweb.png";
import todoImg from "@/public/todo.png";
import quizImg from "@/public/quizweb.png"
import type { ProjectDataTypes } from "./types";

export const CVLINK =
  "https://drive.google.com/file/d/1g5PlOYbjqyVs2_2sA5kcs_mPy0fTPbIx/view?usp=drive_link";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const techData = {
  JavaScript: "Javascript",
  TypeScript: "Typescript",
  React: "ReactJs",
  HTML:"HTML",
  CSS:"CSS",
  NextJs:"NextJs"
};




export const projectsData: ProjectDataTypes[] = [
 
  {
    title: "My Portfolio website",
    description:
      "I am just practicing on HTML5,CSS3 and on typescript fo I make this website.",
    tags: [
      "TypeScript",
      "HTML",
      "CSS",
    ],
    imageUrl: portfolioImg,
    siteUrl: "https://portfolio-website-ztzl.vercel.app/",
    codeUrl: "https://github.com/zainabqureshi09/portfolio-website",
  },

  {
    title: "Practice Chatbot",
    description:
      "This is a chatbot made by me only using HTML, CSS and typescript",
    tags: [
      
      "HTML",
      "CSS",
      "TypeScript",
      
    ],
    imageUrl: botImg,
    siteUrl: "https://chat-bot-one-azure.vercel.app/",
    codeUrl: "https://github.com/zainabqureshi09/chat-bot",
  },
  {
    title: "Expense tracker",
    description:"Take control of your finances with my new expenses tracker! ",
    tags: ["HTML", "CSS", 'TypeScript'],
    imageUrl: trackerImg,
    siteUrl: "https://expenses-tracker-4h4l.vercel.app/",
    codeUrl: "https://github.com/zainabqureshi09/expenses-tracker",
  },

  {
    title: "Todo web",
    description:"This is self made todo app to enhance my skills check it out..",
    tags: ["HTML", "CSS", "TypeScript"],
    imageUrl: todoImg,
    siteUrl:"https://to-do-web-blush.vercel.app/",
    codeUrl:"https://github.com/zainabqureshi09/To-do-web",
  },
  {
    title: "Quiz Application",
    description:
      "Basically this is a quiz web just made to enhance my skills",
    tags: ["HTML", "CSS", "TypeScript"],
    imageUrl: quizImg,
    siteUrl:"https://html-quiz-application.vercel.app/",
    codeUrl:"https://github.com/zainabqureshi09/html-quiz-application",

  },
] as const;

