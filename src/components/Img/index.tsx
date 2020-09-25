import React, { MutableRefObject } from 'react';

interface ImgProps {
  src: string;
  alt: string;
  styles?: string;
}

export const Img = ({ src, alt, styles }: ImgProps) => {
  return <img className={styles} src={src} alt={alt} />;
};
