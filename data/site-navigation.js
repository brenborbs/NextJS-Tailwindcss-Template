import { nanoid } from 'nanoid';

import {
  HomeIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GitHubIcon,
  DribbbleIcon,
} from '../components/vectors';

export const mainNavigation = [
  {
    id: nanoid(),
    label: 'Home',
    slug: '/',
    icon: HomeIcon,
  },
  {
    id: nanoid(),
    label: 'Projects',
    slug: '/projects',
    icon: HomeIcon,
  },

  {
    id: nanoid(),
    label: 'Faqs',
    slug: '/faqs',
    icon: HomeIcon,
  },
  {
    id: nanoid(),
    label: 'Contact',
    slug: '/contact',
    icon: HomeIcon,
  },
];

export const footerNavigation = [
  { id: nanoid(), label: 'Home', slug: '/' },
  { id: nanoid(), label: 'Projects', slug: '/projects' },
  { id: nanoid(), label: 'Faqs', slug: '/faqs' },
  { id: nanoid(), label: 'Contact', slug: '/contact' },
];

export const socialLinks = [
  {
    id: nanoid(),
    label: 'Facebook',
    url: 'https://www.facebook.com',
    icon: FacebookIcon,
  },
  {
    id: nanoid(),
    label: 'Instagram',
    url: 'https://www.instagram.com',
    icon: InstagramIcon,
  },
  {
    id: nanoid(),
    label: 'Twitter',
    url: 'https://www.twitter.com',
    icon: TwitterIcon,
  },
  {
    id: nanoid(),
    label: 'GitHub',
    url: 'https://www.github.com',
    icon: GitHubIcon,
  },
  {
    id: nanoid(),
    label: 'Dribbble',
    url: 'https://www.dribbble.com',
    icon: DribbbleIcon,
  },
];
