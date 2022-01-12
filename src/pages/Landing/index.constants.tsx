import {uniqueRef} from '../../helpers/unique-ref';
import {SectionTwoProps} from './SectionTwo/index.interface';
import P2EBot from '../../assets/images/p2e-bot.png';
import ExploreBot from '../../assets/images/explore-bot.png';
import DesktopGame from '../../assets/images/desktop-game.png';
import Pyramid from '../../assets/images/pyramid.png';
import GifLogo from '../../assets/images/logo.gif';
import GifCharacters from '../../assets/images/gif-characters.png';
import Kong from '../../assets/images/kong.png';
import Diana from '../../assets/images/diana.png';
import Robert from '../../assets/images/robert.png';
import GlitchOne from '../../assets/images/glitch-01.png';
import GlitchTwo from '../../assets/images/glitch-02.png';
import GlitchThree from '../../assets/images/glitch-03.png';

export const SECTION_ONE = {
  image:         GifLogo,
  gifCharacters: GifCharacters,
  description:   `“The year is 42069. All that is left of Earth are the vestiges of humanity too addicted to the metaverse to notice the dying planet they were trying so desperately to escape. The colossal Zuckerbot still roams the desolate remains of what was civilization, scanning for what is no longer there…”`
};

export const SECTION_TWO: SectionTwoProps[] = [
  {
    image:       P2EBot,
    head:        'P2E METAVERSE',
    description: `Metacurse is a cynical P2E metaverse game set in a robot’s dying memory of Earth. Simple game mechanics for thrilling yet accessible gameplay in a NFT-filled expanding metaverse. Metacurse is not just another NFT crypto metaverse game with tons of gimmicks, it’s an actual game made for gamers with fun combat mechanism`,
    background:  'section-two-back',
    id:          'section-two-back',
    glitches:    [
      {
        image:  GlitchOne,
        styles: {
          left: '38.6%',
          top:  '63px'
        },
        key:    uniqueRef()
      }, {
        image:  GlitchTwo,
        styles: {
          left: '51.8%',
          top:  '256px'
        },
        key:    uniqueRef()
      }
    ]
  }, {
    image:       ExploreBot,
    head:        'EXPLORE AND CONQUER',
    description: `You will be able to roam in our metaverse world, and challenge friends and foes online in a battle arena that requires you to outsmart the opponent players and predict their moves. In MetaCurse, you will engage with friends in different types of activities, get quests from NPCs, buy lands and other virtual assets, build their own virtual buildings, and get into adventure to explore hidden treasures. `,
    background:  'section-three-back',
    id:          'section-three-back',
    animate:     {
      right: window.innerWidth <= 1440 ? '80px' : '20%'
    },
    glitches:    [
      {
        image:  GlitchThree,
        styles: {
          left: '29.4%',
          top:  '290px'
        },
        key:    uniqueRef()
      }
    ]
  }, {
    image:       Pyramid,
    head:        'FUN COMBAT SYSTEM',
    description: `In every battle arena, each player will be given five seconds to choose not only an attack type (Ranged, Melee, Spell) but also an attack modifier, which will also act as a defense modifier in the case where their attack type is beaten.

On top of these attack types, there will be seven different elemental attack modifiers: water, fire, earth, plant, lightning, memory, and glitch, each with its own pros and cons.
 `,
    background:  'section-four-back',
    id:          'section-four-back'
  }, {
    image:       DesktopGame,
    head:        'FAMILIAR\nCHARACTERS',
    description: `There will be familiar NFT characters, playable inside Metacurse game. The NFTs will use Deftify token (DFTY) staking mechanism if you want to play them and win in-game rewards`,
    background:  'section-five-back',
    id:          'section-five-back'
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
