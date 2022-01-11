import {MutableRefObject, useEffect, useRef} from 'react';
import {addAnimation, formAnimationObject} from '../../../helpers/animate';
import {SECTION_ONE} from '../index.constants';
import './index.scss';

const SectionOne = (): JSX.Element => {
  const tagRef = useRef() as MutableRefObject<any>;
  const gifRef = useRef() as MutableRefObject<any>;

  const runAnimations = () => {
    const animations = [
      formAnimationObject(gifRef, 'opacity', 1, 1000),
      formAnimationObject(tagRef, 'opacity', 1, 2000),
      formAnimationObject(tagRef, 'top', 0, 1000)
    ];
    addAnimation(animations);
  };

  useEffect(() => {
    runAnimations();
  }, []);

  return (
    <div className="section section__one">
      <div className="gif-wrapper" ref={gifRef}>
        <img src={SECTION_ONE.gifCharacters} alt="metacurse characters" className="characters" />
        <img src={SECTION_ONE.image} alt="metacurse gif logo" className="image" />
      </div>
      <p className="tag-line" ref={tagRef}>{SECTION_ONE.description}</p>
      <div className="scrolling-image scrolling-image__one" />
      <div className="scrolling-image scrolling-image__two" />
    </div>);
};

export default SectionOne;
