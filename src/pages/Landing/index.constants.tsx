export const INITIAL_STATE = {
  email:         '',
  captchaPassed: false
};

export const SOCIAL_BUTTONS = [
  {
    href:  'https://twitter.com/',
    image: './icons/twitter-24.png',
    alt:   'Twitter'
  }, {
    href:  'https://t.me/',
    image: './icons/telegram-24.png',
    alt:   'Telegram'
  }, {
    href:  'https://discord.gg/',
    image: './icons/discord-24.png',
    alt:   'Discord'
  }, {
    href:  'https://medium.com/',
    image: './icons/medium-24.png',
    alt:   'Medium'
  }, {
    href:  'https://www.reddit.com/',
    image: './icons/reddit-24.png',
    alt:   'Reddit'
  }, {
    href:  'https://www.linkedin.com/',
    image: './icons/linkedin-24.png',
    alt:   'LinkedIn'
  }, {
    href:  'https://www.facebook.com/',
    image: './icons/facebook-24.png',
    alt:   'Facebook'
  }, {
    href:  'https://www.instagram.com/',
    image: './icons/instagram-24.png',
    alt:   'Instagram'
  }
];

export const MAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
