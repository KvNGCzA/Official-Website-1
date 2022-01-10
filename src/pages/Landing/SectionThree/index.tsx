import {useState} from 'react';
import {SECTION_THREE} from '../index.constants';
import './index.scss';

const SectionThree = (): JSX.Element => {
  const [selected, setSelected] = useState('characters');

  const getMenuItemClass = (title: string): string =>
    `group-menu__item${title === selected ? ' group-menu__item--active' : ''}`;

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
          .find(group => group.title === 'characters')?.items
          .map(item => <div className="character-card" key={item.name}>
            <div className="image-cont">
              <img src={item.image} alt={item.name} className="character-image" />
              <div className="circle" />
            </div>
            <p className="name">{item.name}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default SectionThree;
