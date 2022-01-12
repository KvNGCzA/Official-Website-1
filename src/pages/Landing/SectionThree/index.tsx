import {createRef, MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';
import {addAnimation, containerIsInViewport, formAnimationObject} from '../../../helpers/animate';
import {SECTION_THREE} from '../index.constants';
import './index.scss';

const SectionThree = (): JSX.Element => {
  const [selected, setSelected] = useState('characters');
  const [animated, setAnimated] = useState<boolean>(false);
  const wrapperRef              = useRef() as MutableRefObject<any>;
  const headRef                 = useRef() as MutableRefObject<any>;
  const descriptionRef          = useRef() as MutableRefObject<any>;
  const groupMenuRef            = useRef() as MutableRefObject<any>;
  const characterRef            = useRef([]) as MutableRefObject<any>;
  characterRef.current          = SECTION_THREE.groups
    .find(group => group.title === 'characters')?.items
    .map((char, index) => characterRef.current[index] ?? createRef());

  const runAnimations = useCallback(() => {
    const animations = [
      formAnimationObject(headRef, 'opacity', 1),
      formAnimationObject(headRef, 'right', '0'),
      formAnimationObject(descriptionRef, 'opacity', 1, 500),
      formAnimationObject(descriptionRef, 'left', '0', 500),
      formAnimationObject(groupMenuRef, 'opacity', 1, 1000),
      ...characterRef.current.map((ref: any, index: number) =>
        formAnimationObject(ref, 'opacity', 1, 1200 + (index * 500))),
      ...characterRef.current.map((ref: any, index: number) =>
        formAnimationObject(ref, 'left', 0, 1200 + (index * 500)))
    ];

    addAnimation(animations);
  }, []);

  const handleScroll = useCallback(() => {
    if (containerIsInViewport(
      wrapperRef, animated, 300
    )) {
      setAnimated(() => {
        runAnimations();
        return true;
      });
    }
  }, [animated, runAnimations]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const getMenuItemClass = (title: string): string =>
    `group-menu__item${title === selected ? ' group-menu__item--active' : ''}`;

  return (
    <div className="section section__three" ref={wrapperRef}>
      <p className="head" ref={headRef}>{SECTION_THREE.head}</p>
      <p className="description" ref={descriptionRef}>{SECTION_THREE.description}</p>
      <ul className="group-menu" ref={groupMenuRef}>
        {SECTION_THREE.groups.map(group => <li
          key={group.title}
          onClick={() => setSelected(group.title)}
          className={getMenuItemClass(group.title)}
        >{group.title}</li>)}
      </ul>
      <div className="item-list">
        {SECTION_THREE.groups
          .find(group => group.title === 'characters')?.items
          .map((item, index) =>
            <div className="character-card" key={item.name} ref={characterRef.current[index]}>
              <div className="image-cont">
                <img src={item.image} alt={item.name} className="character-image" />
                <div className="circle" />
              </div>
              <p className="name">{item.name}</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default SectionThree;
