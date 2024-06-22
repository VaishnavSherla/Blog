import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Booking System - Solved Double Booking Problem',
    slug: 'booking-system',
    // banner: '/static/projects/booking-system.png',
    banner: null,
    website: 'https://github.com/VaishnavSherla/Booking-System',
    description: `Booking system aims to solve the double booking conflict.
    Which arises when multiple users tries to book the single seat!
    Uses the Pessimistic Locking approach to handle concurrency!
    Also i've automated the process of checking with multiple threads using python
    `,
    shortDescription:
      `Booking system aims to solve the double booking conflict.`,
    repository: 'https://github.com/VaishnavSherla/Booking-System',
    stack: [
      Stack.javascript,
      Stack.python,
      Stack.node,
      Stack.postgres
    ],
    dimensions: [338, 600],
    screenshots: [
      'https://raw.githubusercontent.com/VaishnavSherla/Booking-System/main/demo/demo.gif'
    ],
    deployment: {
      web: 'https://github.com/VaishnavSherla/Booking-System',
    },
    subProjects: [],
  },
  {
    title: 'Subscription Based - File Sharing Bot',
    slug: 'file-sharing',
    banner: null,
    website: null,
    description: `Telegram bot built for a customer.
    Uses telegram as cloud service.
    It can be used to share the videos and files with the paid/subscribed users.
    Users can Easily manage subscribed users through website built with flask.
    `,
    repository: null,
    stack: [
      Stack.python,
      Stack.flask,
      Stack.postgres,
      Stack.redis,
    ],
    screenshots: [
      
    ],
    deployment: null,
    subProjects: [],
  },
  {
    title: 'Vidly - REST API',
    slug: 'vidly',
    website: null,
    banner: null,
    description:
      'Vidly Backend Clone using MERN Stack',
    repository: null,
    stack: [
      Stack.mongo,
      Stack.express,
      Stack.node,
      Stack.react
    ],
    screenshots: [
    ],
    deployment: {
      web: 'https://github.com/VaishnavSherla/Vidly'
    },
    subProjects: [],
  },
  {
    title: 'Google Scraper',
    slug: 'google-scraper',
    // banner: '/static/projects/google-scraper.png',
    banner: null,
    website: 'https://github.com/VaishnavSherla/Google-Scraper',
    description:
      'Google Search Results Scraper Built Using Python uses requests-html library. Repository has 20+ Stars on GitHub.',
    shortDescription:
      'Simple Google Search Results Scraper Built Using Python, Repository has 20+ Stars on GitHub.',
    repository: 'https://github.com/VaishnavSherla/Google-Scraper',
    stack: [
      Stack.python,
    ],
    dimensions: [360, 640],
    screenshots: [
    ],
    deployment: {
      web: 'https://github.com/VaishnavSherla/Google-Scraper',
    },
    subProjects: [],
  },
  {
    title: 'Rate Limiter',
    slug: 'rate-limiter',
    website: null,
    banner: null,
    description:
      'Token-Bucket based rate limiter using python',
    repository: null,
    stack: [
      Stack.python,
    ],
    screenshots: [
    ],
    deployment: null,
    subProjects: [],
  },
  {
    title: 'TriCred',
    slug: 'tri-cred',
    website: null,
    banner: null,
    description:
      'TriCred is a in memory prefix search tool, which uses trie data structure to search for credit cards',
    repository: null,
    stack: [
      Stack.python,
    ],
    screenshots: [
    ],
    deployment: null,
    subProjects: [],
  },
  
  
 
];
