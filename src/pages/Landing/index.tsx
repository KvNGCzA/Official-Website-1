import './index.scss';
import {useState} from 'react';
import Footer from '../../components/Footer';
import {SECTION_ONE, SECTION_THREE, SECTION_TWO} from './index.constants';
import TwentyTwentyTwo from '../../assets/icons/2022.png';

const SectionOne = (): JSX.Element =>
  <div className="section section__one">
    <img src={SECTION_ONE.image} alt="metacurse gif logo" className="image" />
    <p className="tag-line">{SECTION_ONE.description}</p>
  </div>;

const SectionTwo = (): JSX.Element =>
  <div className="section section__two">
    {SECTION_TWO.map(section =>
      <div
        className="bot-card" key={section.head} style={section?.cardStyles}>
        <img src={section.image} className="bot-image" alt={section.head} style={section?.imageStyles} />
        <div className="text-content">
          <p className="head">{section.head}</p>
          <p className="description" style={section?.descriptionStyles}>{section.description}</p>
        </div>
      </div>
    )}
  </div>;

const SectionThree = (): JSX.Element => {
  const [selected, setSelected] = useState('characters');

  const getMenuItemClass = (title: string): string =>
    `group-menu__item ${title === selected ? 'group-menu__item--active' : ''}`;

  return (
    <div className="section section__three">
      <p className="head">{SECTION_THREE.head}</p>
      <p className="description">{SECTION_THREE.description}</p>
      <ul className="group-menu">
        {SECTION_THREE.groups.map(group => <li
          key={group.title}
          onClick={() => setSelected(group.title)}
          className={getMenuItemClass(group.title)}
        >{group.title}</li>)}
      </ul>
      <div className="item-list">
        {SECTION_THREE.groups
          .find(group => group.title === selected)?.items
          .map(item => <div className="character-card" key={item.name}>
            <div className="image-cont">
              <img src={item.image} alt={item.name} className="character-image" />
              <div className="circle"></div>
            </div>
            <p className="name">{item.name}</p>
          </div>)
        }
      </div>
    </div>
  );
};

const SectionFour = (): JSX.Element =>
  <div className="section section__four">
    <p className="coming-soon-text">coming in</p>
    <img src={TwentyTwentyTwo} alt="coming in 2022" width={370} height="auto" />

    <Footer />
  </div>;

const Landing = (): JSX.Element => {
  return (
    <div className="landing-wrapper">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};
export default Landing;
