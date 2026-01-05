import {
  srkr,
  portfolio,
  aditya,
  ISTE,
  eduskills,
  leetcode,
  medic,
  codechef,
  nipuna,
  employee,
  gfg,
  library
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiC,
  SiSpring,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiPhp,
  SiMongodb,
  SiIntellijidea,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiHibernate,
  SiLeetcode,
  SiThymeleaf,
  SiSpringsecurity,
} from "react-icons/si";


import { DiCss3, DiJava, DiMsqlServer } from "react-icons/di";

export const resumeLink = "https://www.linkedin.com/in/satya-sai-ajay-valavala-4a12a9285/";
export const repoLink = "https://github.com/AjayValavala/Portfolio/tree/main";

export const callToAction = "https://www.linkedin.com/in/satya-sai-ajay-valavala-4a12a9285/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  // {
  //   id: "achievements",
  //   title: "Achievements",
  // },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: srkr,
    title: "SRKR Engineering College, Bhimavaram",
    degree: "B.Tech in CSE",
    duration: "November 2022 - April 2026",
    content1: "Studied foundational software engineering subjects including DSA, DBMS, Operating Systems etc.",
    content2: "CGPA: 8.75",
  },
  {
    id: "education-2",
    icon: aditya,
    title: "SASI Junior College, Velivennu",
    degree: "Intermediate",
    duration: "September 2020 - August 2022",
    content1: "Graduated with a percentage of 97.3 ",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: leetcode,
    event: "LeetCode ",
    position: "",
    content1: "Developed strong algorithmic thinking through regular coding challenges.",
    content2: "Explored topics including trees, backtracking, graphs, greedy algorithms and dynamic programming etc.",
    content3: "Improved efficiency and accuracy in solving complex problems.",
    project: "https://leetcode.com/u/valavalasatyasaiajay/",
  },
  {
    id: "a-2",
    icon: gfg,
    event: "GeekForGeeks",
    position: "",
    content1: "Consistent problem solver on GeeksforGeeks with strong grasp on data structures and algorithms.",
    content2: "Solved problems spanning arrays, trees, graphs and dynamic programming.",
    project: "https://www.geeksforgeeks.org/profile/ajayvalavala",
  },
  /*{
    id: "a-2",
    icon: codechef,
    event: "CodeChef",
    position: "",
    content1: "Active competitive programmer on CodeChef and a regular participant in weekly contests.",
    content2: "Solved 50+ problems across diverse DSA topics.",
    project: "https://www.codechef.com/users/harsha1824",
  }*/
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-3",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-4",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },/*
      
      {
        id: "f-2",
        icon: SiSpring,
        name: "Spring",
      },
      
      {
        id: "f-3",
        icon: SiSpringboot,
        name: "Springboot",
      },
      {
        id: "f-4",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-5",
        icon: SiHibernate,
        name: "Hibernate",
      },
      {
        id: "f-6",
        icon: SiThymeleaf,
        name: "Thymeleaf",
      },
      {
        id: "f-7",
        icon: SiSpringsecurity,
        name: "Spring Security",
      },*/
      {
        id: "f-8",
        icon: SiBootstrap,
        name: "Bootstrap",
      }
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },/*
      {
        id: "t-2",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },**/
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },/*
      {
        id: "t-7",
        icon: SiIntellijidea,
        name: "Intellij IDEA",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      }*/
    ],
  },
];

export const experiences = [
  {
    organisation: "SRKR ISTE",
    logo: ISTE,
    positions: [
      {
        title: "Organizer, SRKR ISTE Student Chapter",
        duration: "Sep 2024 ",
        content: [
          {
            text: "Helped plan and coordinate technical and student-focused events, supporting participation and smooth execution.",
            link: "",
          },
          {
            text: "Handled event logistics like registrations, schedules, venue setup, and communication.",
            link:""
          },
          {
            text: "Worked with volunteers and speakers to ensure everything ran on time.",
            link: "",
          },
          {
            text: "Managed registrations for 150+ participants across multiple events.",
            link: "",
          },
        ],
      }
    ],
  },
];

export const projects = [
  /*{
    id: "project-1",
    title: "Nipuna25",
    github: "https://github.com/HarshaPragallapati/Nipuna25",
    link: "",
    image: nipuna,
    content:
      "Developed Nipuna's dynamic website with event registration and backend features, ensuring a seamless user experience and optimized performance during the fest.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-4",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-5",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-6",
        icon: SiBootstrap,
        name: "Bootstrap",
      }
    ],
  },*/
  
  {
    id: "project-2",
    title: "Housing Project",
    github: "https://github.com/AjayValavala/house-rental-system-project/tree/main/3-2",
    link: "",
    image: library,
    content:
      "Designed and developed a responsive real estate website showcasing property listings with buy, rent, and plots categories,enabling users to explore different housing options quickly.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-4",
        icon: SiNodedotjs,
        name: "Node.js"
      },/*
      {
        id: "icon-5",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-6",
        icon: SiBootstrap,
        name: "Bootstrap",
      }
      {
        id: "icon-1",
        icon: SiSpringboot,
        name: "SpringBoot"
      },
      {
        id: "icon-2",
        icon: SiMysql,
        name: "MySQL"
        
      },
      {
        id: "icon-3",
        icon: SiThymeleaf,
        name: "Thymeleaf"
      },
      {
        id: "icon-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      }*/
    ],
  },
/*
  {
    id: "project-3",
    title: "Employee Management",
    github: "https://github.com/HarshaPragallapati/RESTful-Employee-Management-API",
    link: "",
    image: employee,
    content:
      "Built a secure RESTful API with Spring Boot for employee management, integrating role-based access control and MySQL. Implemented best practices for security, exception handling, and API design.",
    stack: [
      {
        id: "icon-1",
        icon: SiSpringboot,
        name: "SpringBoot"
      },
      {
        id: "icon-2",
        icon: SiMysql,
        name: "MySQL"
        
      },
      {
        id: "icon-3",
        icon: SiPostman,
        name: "Postman"
      },
      {
        id: "icon-4",
        icon: SiSpringsecurity,
        name: "Spring Security"
      }
    ],
  },*/
  {
    id: "project-4",
    title: "Diamond Price Prediction",
    github: "https://github.com/AjayValavala/diamod-price-prediction",
    link: "",
    image: medic,
    content:
      "Developed a Meachine Learning Model for Diamond price prediction ,intuitive interface for predictions.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiPhp,
        name: "PHP"
      },
      {
        id: "icon-4",
        icon: SiMysql,
        name: "MySQL"
      }
    ],
  },
  
  {
    id: "project-5",
    title: "Portfolio",
    github: "https://github.com/AjayValavala/Portfolio/tree/main",
    link: "#",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
  
  
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];


export const extraCurricular = [
  {
    id: 1,
    organisation: "SRKR ISTE",
    title: "Organizer",
    duration: "September 2024 ",
    content: [
      {
        text: "Actively contributing to the professional growth and collaboration among ISTE members by organizing various interactive events and workshops.",
        link: "https://www.instagram.com/srkriste/p/DAU0yWCydB7/",
      },
      {
        text: "Co-organized Nipuna, AP’s largest techno-management fest, successfully managing 17+ events, ensuring seamless coordination, team collaboration, event planning, and impactful student engagement under ISTE leadership.",
        link: "https://www.instagram.com/nipuna2k25/p/DHDnW0ZNjEg/",
      },
    ],
    logo: ISTE,
  },
  
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/satya-sai-ajay-valavala-4a12a9285/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/AjayValavala",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:valavalasatyasaiajay@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "#",
  },
  {
    id: "social-media-5",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/valavalasatyasaiajay/",
  }
];

// professional summary
export const aboutMe = {
    name: "Satya Sai Ajay Valavala",
    githubUsername: 'AjayValavala',
    tagLine: "Full Stack Developer",
    intro: "Aspiring full-stack developer with a focus on Java and modern web technologies, always learning and creating.."
}



