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
  const noteRef                 = useRef() as MutableRefObject<any>;

  const runAnimations = useCallback(() => {
    const animations = iconRef.current.map((ref: any, index: number) =>
      formAnimationObject(ref, 'left', 0, index * 500));
    addAnimation([
      ...animations,
      formAnimationObject(noteRef, 'opacity', 1, 2000)
    ]);
  }, []);

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
  }, [handleScroll]);

  return (
    <footer className="footer" ref={wrapperRef}>
      <div className="icons">
        {SOCIAL_ICONS.map((social, index) => <img
          src={process.env.PUBLIC_URL + '/icons/' + social + '.png'}
          alt={'social'}
          height={54}
          width={54}
          className="social-icon"
          key={social}
          ref={iconRef.current[index]}
        />)}
      </div>
      <p className="note" ref={noteRef}>
        <b>Note:</b> Some of the images above are only visual representation of the upcoming original concept art, which
                     would be updated soon
      </p>
    </footer>
  );
};

export default Footer;
