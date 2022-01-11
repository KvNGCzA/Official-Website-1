import {MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';
import {addAnimation, containerIsInViewport, formAnimationObject} from '../../../helpers/animate';
import {SECTION_TWO} from '../index.constants';
import './index.scss';

const Card = ({section}: { section: any; }) => {
  const headRef                 = useRef() as MutableRefObject<any>;
  const descriptionRef          = useRef() as MutableRefObject<any>;
  const imageRef                = useRef() as MutableRefObject<any>;
  const wrapperRef              = useRef() as MutableRefObject<any>;
  const [animated, setAnimated] = useState<boolean>(false);

  const runAnimations = useCallback((): void => {
    const animations = [
      formAnimationObject(headRef, 'left', 0, 0),
      formAnimationObject(descriptionRef, 'left', 0, 0),
      formAnimationObject(headRef, 'opacity', 1, 0),
      formAnimationObject(descriptionRef, 'opacity', 1, 1000),
      formAnimationObject(imageRef, 'right', 0, 0),
      formAnimationObject(imageRef, 'opacity', 1, 1500)
    ];

    addAnimation(animations);
  }, []);

  const handleScroll = useCallback(() => {
    if (containerIsInViewport(
      wrapperRef, animated
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

  return (
    <div
      className="bot-card"
      id={section.id}
      style={section?.cardStyles}
      ref={wrapperRef}
    >
      <img src={section.image} className="bot-image" alt={section.head} style={section?.imageStyles} ref={imageRef} />

      <div className="text-content">
        <p className="head" ref={headRef}>{section.head}</p>
        <p className="description" style={section?.descriptionStyles} ref={descriptionRef}>{section.description}</p>
      </div>
    </div>
  );
};

const SectionTwo = () =>
  <div className="section section__two">
    {SECTION_TWO.map(section =>
      <Card section={section} key={section.head} />
    )}
  </div>;

export default SectionTwo;
