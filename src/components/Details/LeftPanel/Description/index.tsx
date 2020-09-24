import React, { useState } from 'react';
import Container from './style';

interface DescriptionProps {
  descriptions: string[];
}

export const Description = ({ descriptions }: DescriptionProps) => {
  const [index, setIndex] = useState(0);

  const handleButton = (newIndex: number) => {
    if (newIndex > descriptions.length - 1) {
      return setIndex(0);
    }

    if (newIndex < 0) {
      return setIndex(descriptions.length - 1);
    }
    setIndex(newIndex);
  };
  return (
    <Container>
      <div className="nes-container is-rounded screen flex items-center content-stretch">
        <span onClick={() => handleButton(index - 1)}>
          <i className="snes-logo" />
        </span>

        <p className="p2">{descriptions[index]}</p>

        <span onClick={() => handleButton(index + 1)}>
          <i className="snes-jp-logo" />
        </span>
      </div>
    </Container>
  );
};
