import './index.scss';
import {createRef, MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';
import {addAnimation, containerIsInViewport, formAnimationObject} from '../../helpers/animate';

const SOCIAL_ICONS = ['telegram', 'twitter', 'discord', 'medium'];

const Footer = () => {
  const [animated, setAnimated] = useState<boolean>(false);
  const iconRef                 = useRef([]) as MutableRefObject<any>;
  iconRef.current               = SOCIAL_ICONS
    .map((icon, index) => iconRef.current[index] ?? createRef());
  const wrapperRef              = useRef() as MutableRefObject<any>;

  const runAnimations = useCallback(() => {
    const animations = iconRef.current.map((ref: any, index: number) =>
      formAnimationObject(ref, 'left', 0, 2000 + (index * 800)));
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

  return (
    <footer className="footer" ref={wrapperRef}>
      {SOCIAL_ICONS.map((social, index) => <img
        src={process.env.PUBLIC_URL + '/icons/' + social + '.png'}
        alt={'social'}
        height={54}
        width={54}
        className="social-icon"
        key={social}
        ref={iconRef.current[index]}
      />)}
    </footer>
  );
};

export default Footer;
