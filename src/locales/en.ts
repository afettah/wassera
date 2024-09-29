import { info } from 'console';
import { m } from 'framer-motion';

export default {
  menu: {
    home: 'Home',
    about: 'About Wassera',
    services: 'Our Services',
    news: 'News',
    careers: 'Careers',
    contact: 'Contact Us',
  },
  hero: {
    title: 'Unlock Effortless Mortgage Solutions',
    description:
      'Take control of your financial future with tailored mortgage, investment, and savings services designed to maximize the value of your assets through easy-to-access collateralized loans.',
    button: {
      started: 'Get Started',
      more: 'Learn More',
    },

    home: {
      info: {
        vision: {
          title: 'Our Vision',
          description: 'To be the first choice in the debt industry for monetizing locked capital and untapped assets',
        },
        mission: {
          title: 'Our Mission',
          description:
            'To optimize the use of technological advances providing new opportunities to give citizens and market participants access to untapped assets.',
        },
      },
    },
  },
} as const;
