import {CSSProperties} from 'react';
import P2EBot from '../../assets/images/p2e-bot.png';
import ExploreBot from '../../assets/images/explore-bot.png';
import DesktopGame from '../../assets/images/desktop-game.png';
import Pyramid from '../../assets/images/pyramid.png';
import GifLogo from '../../assets/images/logo.png';
import Kong from '../../assets/images/kong.png';
import Diana from '../../assets/images/diana.png';
import Robert from '../../assets/images/robert.png';

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

export const SECTION_ONE = {
  image:       GifLogo,
  description: `“The year is 42069. All that is left of Earth are the vestiges of humanity too addicted to the metaverse to notice the dying planet they were trying so desperately to escape. The colossal Zuckerbot still roams the desolate remains of what was civilization, scanning for what is no longer there…”`
};

export const SECTION_TWO: {
  image: any;
  head: string;
  description: string;
  background: string;
  imageStyles?: CSSProperties;
  cardStyles?: CSSProperties;
  descriptionStyles?: CSSProperties;
}[] = [
  {
    image:       P2EBot,
    head:        'P2E METAVERSE',
    description: `Metacurse is a cynical P2E metaverse game set in a robot’s dying memory of Earth. Simple game mechanics for thrilling yet accessible gameplay in a NFT-filled expanding metaverse. Metacurse is not just another NFT crypto metaverse game with tons of gimmicks, it’s an actual game made for gamers with fun combat mechanism`,
    background:  'section-two-back',
    imageStyles: {
      width:      '29%',
      marginLeft: '116px'
    },
    cardStyles:  {
      marginTop: '52px'
    }
  }, {
    image:             ExploreBot,
    head:              'EXPLORE AND CONQUER',
    description:       `You will be able to roam in our metaverse world, and challenge friends and foes online in a battle arena that requires you to outsmart the opponent players and predict their moves. In MetaCurse, you will engage with friends in different types of activities, get quests from NPCs, buy lands and other virtual assets, build their own virtual buildings, and get into adventure to explore hidden treasures. `,
    background:        'section-three-back',
    imageStyles:       {
      position: 'absolute',
      top:      '-124px',
      right:    '20%',
      width:    '13.5%'
    },
    cardStyles:        {
      padding: '0 370px 0 128px'
    },
    descriptionStyles: {
      maxWidth: '785px'
    }
  }, {
    image:       Pyramid,
    head:        'FUN COMBAT SYSTEM',
    description: `In every battle arena, each player will be given five seconds to choose not only an attack type (Ranged, Melee, Spell) but also an attack modifier, which will also act as a defense modifier in the case where their attack type is beaten.

On top of these attack types, there will be seven different elemental attack modifiers: water, fire, earth, plant, lightning, memory, and glitch, each with its own pros and cons.
 `,
    background:  'section-three-back',
    cardStyles:  {
      padding: '317px 0 0 128px'
    },
    imageStyles: {
      width: '44%'
    }
  }, {
    image:             DesktopGame,
    head:              'FAMILIAR\nCHARACTERS',
    description:       `There will be familiar NFT characters, playable inside Metacurse game. The NFTs will use Deftify token (DFTY) staking mechanism if you want to use them and win in-game rewards`,
    background:        'section-three-back',
    cardStyles:        {
      paddingLeft:    '128px',
      justifyContent: 'space-between'
    },
    descriptionStyles: {
      maxWidth: '560px'
    },
    imageStyles:       {
      width:  '50%',
      margin: '56px 60px 0 0'
    }
  }
];

export const SECTION_THREE = {
  head:        'NFT MARKETPLACE',
  description: 'Your Metacurse NFTs will be tradeable in our own trustless marketplace mechanism',
  groups:      [
    {
      title: 'characters',
      items: [
        {
          name:  'kong',
          image: Kong
        }, {
          name:  'robert',
          image: Robert
        }, {
          name:  'diana',
          image: Diana
        }
      ]
    }, {
      title: 'items',
      items: []
    }, {
      title: 'accessories',
      items: []
    }
  ]
};
