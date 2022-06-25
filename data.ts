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
      'An web app which showsa collection of films and its description',
    key_techs: ['React'],
  },

  {
    name: 'e-commerece app',
    image_path: '/images/e-commerece.png',
    deployed_url: 'https://ecommerece-sand.vercel.app/',
    github_url: '',
    category: ['Next'],
    description:
      'e-commerece app which show some products and the description of each product',
    key_techs: ['Next', 'Tailwind', 'Api'],
  },

  {
    name: 'Realtime Chat App',
    image_path: '/images/chatapp.jpg',
    deployed_url: 'https://sumit-chat.netlify.app/',
    github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
    category: ['node', 'react'],
    description:
      'Basic Realtime Chat App where one can create a room can talk to each other',
    key_techs: ['React', 'Node', 'Express', 'Socket', 'Bootstrap'],
  },

  {
    name: 'last portofolio',
    image_path: '/images/portfolio.jpg',
    deployed_url: 'https://mostafa-khedre-reactjs.vercel.app/',
    github_url: 'https://github.com/Dey-Sumit/tweetme',
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
    description: '',
    key_techs: ['html', 'css', 'Vanilla js'],
  },
  {
    name: 'vlog',
    image_path: '/images/temp2.png',
    deployed_url: 'https://tem3.vercel.app/',
    github_url: 'https://temp3-mkhedre3-gmailcom.vercel.app/',
    category: ['html', 'css'],
    description: '',
    key_techs: ['html', 'css', 'Vanilla js'],
  },
  {
    name: 'YouTube using YouTube ',
    image_path: '/images/youtubeClone.png',
    deployed_url: 'https://not-utube.web.app/',
    github_url: 'https://github.com/Dey-Sumit/youtube-clone-tutorial-up',
    category: ['express'],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      'React',
      'Redux',
      'Firebase Auth',
      'YouTube API',
      'Sass',
      'Bootstrap',
    ],
  },
  {
    name: 'Football App',
    image_path: '/images/football.png',
    deployed_url: 'https://o-my-goal.web.app/',
    github_url: 'https://github.com/Dey-Sumit/football-app',
    category: ['react'],
    description:
      'o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ',
    key_techs: ['React', 'Redux', 'Firebase Auth', 'API', 'Sass', 'Bootstrap'],
  },
];
