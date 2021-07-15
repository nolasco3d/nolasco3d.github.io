import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'André Nolasco | Front-end Developer', // e.g: 'Name | Developer'
  lang: 'pt-br', // e.g: en, es, fr, jp
  description: 'Sejam bem-vindos ao meu site!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá! Eu sou ',
  name: 'André Nolasco',
  subtitle: 'Desenvolvedor Front-end.',
  cta: 'Veja mais',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.JPG',
  paragraphOne:
    'Sou apaixonado por arte e tecnologia, graças a isso decidi seguir o caminho digital, atuando em meio às ilustrações, mídias digitais,  papelarias e ambientes tridimensionais, buscando sempre a inova- ção e alcançar o melhor resultado em cada trabalho.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Ops...',
    info: 'Sem spoilers por enquanto.',
    info2: '',
    cta: 'Ver',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Alguma dúvida? É só entrar em contato!',
  btn: 'E-mail',
  email: 'nolasco3d@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'behance',
      url: 'https://www.behance.net/nolasco3d',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nolasco3d/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nolasco3d/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
