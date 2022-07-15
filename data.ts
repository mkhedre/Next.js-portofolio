import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { IProject, Service, Skill } from './types';

import { BsCircleFill } from 'react-icons/bs';

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>,<b>React.js</b>,<b>Next.js</b>,<b>bootstrap </b>and <b>Tailwind.js</b> ',
  },

  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I can fetch REST API using <b>rest-api</b>  & <b>Axios</b> ',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about: 'a daily problem solver in <b>edabit</b>  and <b>Leet Code</b> ',
  },

  {
    Icon: RiComputerLine,
    title: 'Whatever',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'html',
    level: '65',
  },
  {
    Icon: BsCircleFill,
    name: 'css',
    level: '65',
  },
  {
    Icon: BsCircleFill,
    name: 'Java Script',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'React.js',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Next.js',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Tailwind',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Bootstrap',
    level: '70',
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Figma',
    level: '45',
  },
  {
    Icon: BsCircleFill,
    name: 'adobe premier pro',
    level: '50',
  },

  {
    Icon: BsCircleFill,
    name: 'Framer',
    level: '45',
  },
];

export const projects: IProject[] = [
  {
    name: 'Booking system',
    description: 'This app helps us to book a room in hotel',
    image_path: '/images/booking-system.png',
    deployed_url: 'https://booking-system-blue.vercel.app/',
    github_url: 'https://github.com/mkhedre/booking-system',
    category: ['react'],
    key_techs: ['React', 'React-redux'],
  },
  {
    name: 'Movies app',
    image_path: '/images/movie.png',
    deployed_url: 'https://react-redux-tool-kit-movie-app.vercel.app/',
    github_url: 'https://github.com/mkhedre/movies-app',
    category: ['react'],
    description:
      'a web app that helps us to search for movies and shows and also to watch them',
    key_techs: ['React'],
  },
  {
    name: 'Reminder app',
    image_path: '/images/reminder.png',
    deployed_url: 'https://reminder-app-main.vercel.app/',
    github_url: 'https://github.com/mkhedre/Reminder-App',
    category: ['react'],
    description:
      'a web app which helps us to set reminders and also to check the reminders',
    key_techs: ['React'],
  },
  {
    name: 'weather app',
    image_path: '/images/weather.png',
    deployed_url: 'https://mkhedre-weather-app.herokuapp.com/',
    github_url: 'https://github.com/mkhedre/Reminder-App',
    category: ['node'],
    description:
      'a web app in which you can see the weather of any city in the world',
    key_techs: ['node', 'express'],
  },
  {
    name: 'task manager api',
    image_path: '',
    deployed_url: 'https://github.com/mkhedre/task-manager-api',
    github_url: 'https://github.com/mkhedre/Reminder-App',
    category: ['node', 'mongodb'],
    description:
      'Task manager application built using NODE JS and MongoDB. It follows a RESTFul API design architecture. The app sends an email notification upon registration and deactivation of the users account. Its richly built with a simple scientific technique and best practices in the world of API design.',
    key_techs: ['node', 'express'],
  },
  {
    name: 'e-commerece app',
    image_path: '/images/e-commerece.png',
    deployed_url: 'https://ecommerece-sand.vercel.app/',
    github_url: 'https://github.com/mkhedre/next-ecommerece',
    category: ['Next'],
    description:
      'e-commerece app which show some products and the description of each product',
    key_techs: ['Next', 'Tailwind', 'Api'],
  },
  {
    name: 'portofolio',
    image_path: '/images/new-portofolio.png',
    deployed_url: 'https://portofolio-beige.vercel.app/',
    github_url: 'https://github.com/mkhedre/Next.js-portofolio',
    category: ['Next'],
    description:
      'my portofolio in which i show my projects ,reusme and skills ',
    key_techs: ['Next', 'Tailwind', 'Api', 'typeScript'],
  },

  {
    name: 'last portofolio',
    image_path: '/images/portfolio.jpg',
    deployed_url: 'https://mostafa-khedre-reactjs.vercel.app/',
    github_url: '',
    category: ['html', 'css', 'js'],
    description:
      'my last portofolio which was made without any library or framework',
    key_techs: ['html', 'css', 'javaScript'],
  },

  {
    name: 'learning template',
    image_path: '/images/temp1.png',
    deployed_url: 'https://tem1.vercel.app/',
    github_url: '',
    category: ['html', 'css'],
    description: ' a template for learning',
    key_techs: ['html', 'css', 'Vanilla js'],
  },
  {
    name: 'vlog',
    image_path: '/images/temp2.png',
    deployed_url: 'https://tem3.vercel.app/',
    github_url: 'https://temp3-mkhedre3-gmailcom.vercel.app/',
    category: ['html', 'css'],
    description: ' a template for vlog',
    key_techs: ['html', 'css', 'Vanilla js'],
  },
  {
    name: 'kaspar',
    image_path: '/images/kaspar.png',
    deployed_url: 'https://kaspar.vercel.app/',
    github_url: '',
    category: ['html'],
    description: 'We Are Kasper We Make Art.',
    key_techs: ['html', 'css', 'javaScript'],
  },
];
