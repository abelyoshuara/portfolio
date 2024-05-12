import heroProfile from "../assets/hero-profile.jpg";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const hero = {
  heading: "Abel Yoshuara",
  position: ["Information System", "Front-End Web Developer", "Web Developer"],
  description:
    "I graduated from ITB STIKOM Bali with a major in Information System. Over the past two years, I have accumulated valuable experience in front-end web development. A strong passion and commitment drive me to continue looking for new opportunities to expand my knowledge in social skills and programming. I always maintain a humble attitude, have a strong sense of responsibility, and am highly self-motivated. Apart from that, I also have good adaptability and a solid work ethic. I am dedicated to excellence and creating great solutions.",
  profile: heroProfile,
};

export const experiences = [
  {
    date: "Jun 2022 - Present",
    role: ["Front-End Web Developer", "Web Developer"],
    company: "ITB STIKOM Bali",
    description:
      "Building web applications using the PHP framework, namely CodeIgniter and Laravel. Apart from that, building a 'Sistem Informasi Dosen' using the Angular frontend framework and Bootstrap as the CSS framework thereby speeding up the creation of websites that apply the Single Page Application concept.",
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
    image: project1,
    description:
      "A web-based Discussion Forum Application that implements Automation Testing and CI/CD. The features available in this application are user authentication, adding threads, commenting on threads, like and dislike a thread.",
    technologies: ["React", "Tailwind", "Redux", "RTK Query", "Typescript"],
    demo: "https://dicoding-forum-app-five.vercel.app",
    code: "https://github.com/abelyoshuara/dicoding-forum-app",
  },
  {
    title: "Sistem Informasi Dosen",
    image: project2,
    description:
      "An application for managing data related to lecturers such as updating lecturer biodata, teaching schedule info, approving final assignment titles, student searches, lecturer searches, and so on.",
    technologies: ["Angular", "Bootstrap", "jQuery", "Typescript"],
    demo: "https://dicoding-forum-app-five.vercel.app",
  },
  {
    title: "Itinerary",
    image: project3,
    description:
      "A web-based scheduling planning application. The features of this application are user authentication, travel planning management, and so on.",
    technologies: ["Laravel", "Bootstrap", "jQuery", "MySQL"],
    demo: "https://youtu.be/k_8DJpU1a8o",
    code: "https://github.com/AudyCipta/itinerary-app",
  },
  {
    title: "PTPP",
    image: project4,
    description:
      "A platform for creating reports requesting corrective and preventive actions, the features in this application are user authentication, managing PTPP data, exporting PTPP reports, and exporting PTPP status logs.",
    technologies: ["CodeIgniter", "Bootstrap", "jQuery", "MySQL"],
    demo: "https://youtu.be/b7maEFO6iQE",
  },
];
