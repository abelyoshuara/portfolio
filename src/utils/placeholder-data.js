import heroProfile from "../assets/hero-profile.jpg";
import dicodingForum from "../assets/projects/dicoding-forum.png";
import todo from "../assets/projects/todo.png";
import tictactoe from "../assets/projects/tictactoe.png";
import imageSearch from "../assets/projects/image-search.png";
import calculator from "../assets/projects/calculator.png";
import restaurantCatalogue from "../assets/projects/restaurant-catalogue.png";
import sid from "../assets/projects/sid.png";
import itinerary from "../assets/projects/itinerary.png";
import ptpp from "../assets/projects/ptpp.png";

export const hero = {
  heading: "Abel Yoshuara",
  position: ["Information System", "Front-End Web Developer", "Web Developer"],
  description:
    "I graduated from ITB STIKOM Bali with a major in Information System. Over the past two years, I have accumulated valuable experience in front-end web development. A strong passion and commitment drive me to continue looking for new opportunities to expand my knowledge in social skills and programming. I always maintain a humble attitude, have a strong sense of responsibility, and highly self-motivated. Apart from that, I also have good adaptability, enthusiasm for work, and a solid work ethic.",
  profile: heroProfile,
};

export const experiences = [
  {
    date: "Jun 2022 - Present",
    role: ["Front-End Web Developer", "Web Developer"],
    company: "ITB STIKOM Bali",
    description:
      "Develop a Lecturer Information System using the Angular and Bootstrap as the CSS framework thereby speeding up the creation of websites that apply the Single Page Application concept. Apart from that, Built a PTPP System using CodeIgniter framework and Built a Laporan Sasaran Mutu System using Laravel framework.",
    technologies: ["Angular", "CodeIgniter", "Laravel", "Bootstrap", "MySQL"],
  },
  {
    date: "Jan 2019 - Apr 2019",
    role: ["Web Developer"],
    company: "CV. DigiBali",
    description:
      "Build attractive websites using HTML, CSS, and JavaScript, apart from that, build dynamic websites using the PHP programming language natively and the database management system used is MySQL which can be used for free and also supports various operating systems such as Windows, Linux, OSX.",
    technologies: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
  },
];

export const projects = [
  {
    title: "Dicoding Forum",
    image: dicodingForum,
    description:
      "A web-based Discussion Forum Application that implements Automation Testing and CI/CD. The features available in this application are user authentication, adding threads, commenting on threads, like and dislike a thread.",
    technologies: [
      "React",
      "Tailwind",
      "Redux",
      "RTK Query",
      "Typescript",
      "Vitest",
    ],
    demo: "https://dicoding-forum-app-five.vercel.app",
    code: "https://github.com/abelyoshuara/dicoding-forum-app",
  },
  {
    title: "Todo List App",
    image: todo,
    description:
      "A simple to-do list application built using react.js. This application has the features of adding todos, deleting todos, and updating todo status.",
    technologies: ["React", "Tailwind", "Typescript", "Vitest"],
    demo: "https://todo-app-eight-pearl-87.vercel.app",
    code: "https://github.com/abelyoshuara/todo-app",
  },
  {
    title: "TicTacToe List App",
    image: tictactoe,
    description:
      "A simple tic-tac-toe game made using react.js. This application has a move history feature that can be moved around.",
    technologies: ["React", "Tailwind", "Typescript", "Vitest"],
    demo: "https://tictactoe-app-beta.vercel.app",
    code: "https://github.com/abelyoshuara/tictactoe-app",
  },
  {
    title: "Image Search App",
    image: imageSearch,
    description:
      "An simple image search application made using react.js. This application retrieve images from the Unsplash API. It also implements automation testing using vitest.",
    technologies: ["React", "Tailwind", "Typescript", "Vitest"],
    demo: "https://image-search-app-steel.vercel.app",
    code: "https://github.com/abelyoshuara/image-search-app",
  },
  {
    title: "Calculator App",
    image: calculator,
    description:
      "An simple calculator application made using react.js. This application implements automation testing using vitest. It also implements CI/CD using Vercel and GitHub.",
    technologies: ["React", "Tailwind", "Typescript", "Vitest"],
    demo: "https://calculator-app-omega-roan.vercel.app",
    code: "https://github.com/abelyoshuara/calculator-app",
  },
  {
    title: "Restaurant Catalogue App",
    image: restaurantCatalogue,
    description:
      "An application for showing restaurant catalogues. This application implements automation testing, image optimization, progresive web apps, and CI/CD deployment.",
    technologies: ["Javascript", "SASS", "Webpack"],
    demo: "https://restoay.netlify.app",
    code: "https://github.com/abelyoshuara/restaurant-catalogue-app",
  },
  {
    title: "Sistem Informasi Dosen",
    image: sid,
    description:
      "An application for managing data related to lecturers such as updating lecturer biodata, teaching schedule info, approving final assignment titles, student searches, lecturer searches, and so on.",
    technologies: ["Angular", "Bootstrap", "jQuery", "Typescript"],
    demo: "https://youtu.be/yGjZE2E37_0",
  },
  {
    title: "Itinerary",
    image: itinerary,
    description:
      "A web-based scheduling planning application. The features of this application are user authentication, travel planning management, and so on.",
    technologies: ["Laravel", "Bootstrap", "jQuery", "MySQL"],
    demo: "https://youtu.be/k_8DJpU1a8o",
    code: "https://github.com/AudyCipta/itinerary-app",
  },
  {
    title: "PTPP",
    image: ptpp,
    description:
      "A platform for creating reports requesting corrective and preventive actions, the features in this application are user authentication, managing PTPP data, exporting PTPP reports, and exporting PTPP status logs.",
    technologies: ["CodeIgniter", "Bootstrap", "jQuery", "MySQL"],
    demo: "https://youtu.be/b7maEFO6iQE",
  },
];
