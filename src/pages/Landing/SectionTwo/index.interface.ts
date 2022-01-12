import {CSSProperties} from 'react';

export interface SectionTwoProps {
  animate?: any;
  background: string;
  description: string;
  glitches?: { image: string; styles: CSSProperties; key: string }[];
  head: string;
  id: string;
  image: any;
}
