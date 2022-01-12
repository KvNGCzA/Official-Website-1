import {MutableRefObject} from 'react';

interface Animation {
  attr: string;
  ref: MutableRefObject<any>;
  time: number;
  value: any;
}

export const animate = ({ref, attr, value, time}: Animation): void => {
  if (time) {
    setTimeout(() => {
      ref.current.style[attr] = value;
    }, time);
  } else {
    ref.current.style[attr] = value;
  }
};

export const addAnimation = (animations: Animation[]): void => {
  for (let animation of animations) {
    animate(animation);
  }
};

export const containerIsInViewport = (ref: MutableRefObject<any>, animated: boolean, pad?: number): boolean => {
  const rect = ref?.current?.getBoundingClientRect();
  return (
      rect.top <= 500 ||
      rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight) + (pad ?? 0))) &&
    !animated;
};

export const formAnimationObject = (
  ref: MutableRefObject<any>,
  attr: string,
  value: any = 0,
  time: number = 0
): Animation => ({
  ref,
  attr,
  value,
  time
});
