import './index.scss';
import {MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';
import {addAnimation, containerIsInViewport, formAnimationObject} from '../../../helpers/animate';
import TwentyTwentyTwo from '../../../assets/icons/2022.png';
import Footer from '../../../components/Footer';

const SectionFour = () => {
  const comingRef               = useRef() as MutableRefObject<any>;
  const sectionRef              = useRef() as MutableRefObject<any>;
  const [animated, setAnimated] = useState<boolean>(false);
  const imageRef                = useRef() as MutableRefObject<any>;

  const runAnimations = useCallback(() => {
    const animations = [formAnimationObject(comingRef, 'left', 0, 2000)];

    addAnimation(animations);
  }, []);

  const handleScroll = useCallback(() => {
    if (containerIsInViewport(sectionRef, animated, 600)) {
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
    <div className="section section__four" ref={sectionRef}>
      <p className="coming-soon-text" ref={comingRef}>coming in</p>
      <img
        src={TwentyTwentyTwo}
        alt="coming in 2022"
        width={370}
        height="auto"
        className="twenty-twenty-two"
        ref={imageRef}
      />
      <Footer />
    </div>
  );
};

export default SectionFour;
