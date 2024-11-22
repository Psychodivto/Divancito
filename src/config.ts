import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Diego Conde",
  logo: "/PicRetouch_20240719_070444396.png",
  email: "perezcondediegoivan@outlook.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Acerca de mi",
    url: "/about",
  },
  {
    title: "Proyectos",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/Psychodivto",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:perezcondediegoivan@outlook.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Diego Conde",
    description:
      "Innovation begins with exploration, solutions with code.",
    image: identity.logo,
  },
  role: "Desarrollador de software",
  description:
    "La innovación comienza explorando ideas, y las soluciones cobran vida a través del código.",
  socialLinks: socialLinks,
  links: [
    {
      title: "Mis Proyectos",
      url: "/projects",
    },
    {
      title: "Acerca de mi",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "Acerca de mi | Diego Conde",
    description:
      ".",
    image: identity.logo,
  },
  subtitle: "",
  about: {
    description: `
Hola a todos 👋 soy Diego, ingeniero de software apasionado por el desarrollo web y la inteligencia artificial. 
Me gusta explorar y aprender constantemente para combinar habilidades en estas áreas y crear soluciones innovadoras.
<br/><br/>
Con experiencia en el desarrollo web y un fuerte interés en inteligencia artificial, 
estoy en búsqueda de oportunidades que me permitan crecer en ambas áreas y contribuir a proyectos de alto impacto.`, // Markdown is supported

    image_l: {
      url: "",
      alt: "",
    },
    image_r: {
      url: "",
      alt: "",
    }
    
  },
  work: {
    description: `Actualmente desarrollo el proyecto de titulación de mi tesis basado
    en un sistema de recocimiento de caracteres de placas vehiculares por medio de inteligencia artificial.`, // Markdown is supported
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Tesis",
          image: "/neural-network-license-plate-recognition-260nw-2264543831.webp",
          url: "https://github.com/Psychodivto/AI-OPS",
        },
        date: "2024 - Present",
      },
    ],
  },

  connect: {
    description: ``, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 2",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 3",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 4",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Diego Conde  ",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
