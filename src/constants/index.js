import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nextjs,
  mongodb,
  git,
  firebase,
  docker,
  project1,
  project2,
  project3,
} from "../assets";

const about = [
  {
    name: "Perseverance ",
    description: "I don't give up easily. If I have a problem to solve, I always face it and don't give up despite the mistakes. I look for solutions, I read, I test. All this to solve a problem which is just another opportunity to learn. Problems do not demotivate me, they drive me to action."
  },
  {
    name: "Creativity",
    description: "Programming is an amazing creative process. One line of code written influences the next, creating a kind of story where problems are just another chance to write interesting code. Encountered issues can be solved in many ways."
  },
  {
    name: "Diligence",
    description: "As an aspiring web developer, I am deeply committed to hard work, dedicating myself to every project with passion and perseverance. I believe that hard work is the key to success in this dynamic field. With relentless dedication, I am determined to push boundaries and achieve excellence in all aspects of web development."
  },
  {
    name: "Responsibility",
    description: "As a diligent student and future web developer, I know what responsibility means. I believe that being responsible not only means meeting deadlines and delivering quality work but also actively seeking ways to contribute positively to projects and teams."
  },
  {
    name: "Good time management",
    description: "As a conscientious person, I am proud of my ability to manage time effectively. With a commitment to good time management, I aim to maximize productivity, not only in programming but also in learning other things such as Spanish. I can stop myself from doing things that distract me from being better."
  }
];

const experiences = [
  {
    title: "HTML",
    icon: html,
    iconBg: "#383E56",
    points: [
      "HTML serves as the foundational language of web development, allowing me to structure and organize content effectively to create engaging and accessible websites."
    ],
  },
  {
    title: "CSS",
    icon: css,
    iconBg: "#383E56",
    points: [
      "CSS empowers me to enhance the visual appeal and presentation of websites, enabling precise control over layout, typography, and design elements to create stunning user interfaces."
    ],
  },
  {
    title: "TAILWIND CSS",
    icon: tailwind,
    iconBg: "#383E56",
    points: [
      "Tailwind CSS revolutionizes my approach to styling websites by offering a utility-first framework focused on development, allowing me to rapidly build and customize responsive, modern interfaces with minimal CSS code."
    ],
  },
  {
    title: "JavaScript",
    icon: javascript,
    iconBg: "#383E56",
    points: [
      "JavaScript serves as the backbone of dynamic web development, empowering me to add interactivity and functionality to websites. JavaScript is also necessary to master more complex technologies such as React or NextJS"
    ],
  },
  {
    title: "React JS",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "ReactJS empowers me to build dynamic and interactive user interfaces with ease, leveraging its component-based architecture and virtual DOM to efficiently manage state and render UI components efficiently, enabling the creation of amazing web applications."
    ],
  },
  /* {
    title: "NextJS",
    icon: nextjs,
    iconBg: "#383E56",
    points: [
      "Next.js is a powerful framework that enables me to build amazing applications with ease, offering many features allowing for fast performance and seamless client-side routing, thereby enhancing the development experience as well as user experience."
    ],
  }, */
  /* {
    title: "MongoDB",
    icon: mongodb,
    iconBg: "#383E56",
    points: [
      "MongoDB, coupled with Mongoose, provides me with a robust and flexible database solution for storing and managing data in my web applications.  Offers seamless integration with Node.js, allowing for efficient development and scalability."
    ],
  }, */
  {
    title: "FireBase",
    icon: firebase,
    iconBg: "#383E56",
    points: [
      "Firebase provides me with a comprehensive suite of tools and services that streamline backend development, allowing me to build powerful web applications with real-time database functionality what I have used in one of my projects."
    ],
  },
  {
    title: "Git",
    icon: git,
    iconBg: "#383E56",
    points: [
      "Git revolutionizes my workflow as a web developer by offering a version control system that enables efficient collaboration, code management, and project tracking, ultimately enhancing productivity."
    ],
  },
];

const projects = [
  {
    name: "React shop",
    description:
      "This site allows users to filter, add to cart, and `buy` t-shirts. Product information is in the Firebase db and allows users to have the latest data on the number of T-shirts.",
    tags: [
      {
        name: "react",
        color: "blue-text",
      },
      {
        name: "react-router",
        color: "green-text",
      },
      {
        name: "firebase",
        color: "pink-text",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/kkoczot/React_shop",
    project_site_link: "https://react-firebase-shop.netlify.app/",
  },
  {
    name: "ElCocinero",
    description:
      "Website that shows my skills by features that I made like effects on scroll, light-dark theme or many languages. Here more important was the appearance of the site.",
    tags: [
      {
        name: "react",
        color: "blue-text",
      },
      {
        name: "react-router",
        color: "green-text",
      },
      {
        name: "css",
        color: "pink-text",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/kkoczot/ElCocinero",
    project_site_link: "https://react-elcocinero.netlify.app/",
  },
  {
    name: "Custom homepage",
    description:
      "A useful homepage chrome extension that allows to: check some cryptocurrencies and 10 last chrome history items, add tasks and notes and customize this extension as well.",
    tags: [
      {
        name: "react",
        color: "blue-text",
      },
      {
        name: "restapi",
        color: "green-text",
      },
      {
        name: "css",
        color: "pink-text",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/kkoczot/custom-homepage-v",
    project_site_link: "https://custom-homepage-v.netlify.app/",
  },
];

// export { about, technologies, experiences, projects };
export { about, experiences, projects };