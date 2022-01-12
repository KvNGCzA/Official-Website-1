import {createRef, MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';
import {uniqueRef} from '../../../helpers/unique-ref';
import {SectionTwoProps} from './index.interface';
import {addAnimation, containerIsInViewport, formAnimationObject} from '../../../helpers/animate';
import {SECTION_TWO} from '../index.constants';
import './index.scss';

const Card = ({section}: { section: SectionTwoProps; }) => {
  const headRef                 = useRef() as MutableRefObject<any>;
  const descriptionRef          = useRef() as MutableRefObject<any>;
  const imageRef                = useRef() as MutableRefObject<any>;
  const glitchRef               = useRef([]) as MutableRefObject<any>;
  const wrapperRef              = useRef() as MutableRefObject<any>;
  const [animated, setAnimated] = useState<boolean>(false);
  glitchRef.current             = section.glitches?.map((glitch, index) => glitchRef.current[index] ?? createRef());

  const runAnimations = useCallback((): void => {
    const glitches = glitchRef.current?.map((ref: any, index: number) =>
      formAnimationObject(ref, 'opacity', 1, 1000 + (index * 500)));

    const animations = [
      formAnimationObject(headRef, 'left'),
      formAnimationObject(descriptionRef, 'left'),
      formAnimationObject(headRef, 'opacity', 1),
      formAnimationObject(descriptionRef, 'opacity', 1, 500),
      formAnimationObject(imageRef, 'right', section?.animate?.right ?? 0),
      formAnimationObject(imageRef, 'opacity', 1, 1500)
    ];

    glitches?.forEach((glitch: any) => {
      animations.push(glitch);
    });

    addAnimation(animations);
  }, [section]);

  const handleScroll = useCallback(() => {
    if (containerIsInViewport(wrapperRef, animated)) {
      setAnimated(() => {
        runAnimations();
        return true;
      });
    }
  }, [animated, runAnimations]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, section]);

  return (
    <div
      className="bot-card"
      id={section.id}
      ref={wrapperRef}
    >
      <img
        src={section.image}
        className="bot-image"
        alt={section.head}
        ref={imageRef}
      />

      <div className="text-content">
        <p className="head" ref={headRef}>{section.head}</p>
        <p className="description" ref={descriptionRef}>{section.description}</p>
      </div>
      {section.glitches?.map?.((glitch, index) => <img
        src={glitch.image}
        style={glitch.styles}
        ref={glitchRef.current[index]}
        className="glitch"
        alt="glitch"
        key={uniqueRef()}
      />)}
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
