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

export const containerIsInViewport = (ref: MutableRefObject<any>, animated: boolean, pad?: number): boolean =>
  window.scrollY >= ref?.current?.getBoundingClientRect()?.y + (pad ?? 150) &&
  !animated;

export const formAnimationObject = (ref: MutableRefObject<any>, attr: string, value: any, time: number): Animation => ({
  ref,
  attr,
  value,
  time
});
