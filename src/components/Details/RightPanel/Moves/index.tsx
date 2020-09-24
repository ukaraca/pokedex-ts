import React, { useState } from 'react';
import Container from './style';
import { MovesProps } from '../../../../types/pokemon';

interface MoveProps {
  moves: MovesProps[];
}

export const Moves = ({ moves }: MoveProps) => {
  const [index, setIndex] = useState(0);

  const handleButton = (newIndex: number) => {
    if (newIndex > moves.length - 1) {
      return setIndex(0);
    }

    if (newIndex < 0) {
      return setIndex(moves.length - 1);
    }
    setIndex(newIndex);
  };
  return (
    <Container>
      <div className="nes-container is-rounded flex">
        <div className="screen flex justify-between move-screen">
          {moves[index].move.name}
        </div>
        <div className="move-controls">
          <span onClick={() => handleButton(index - 1)}>
            <i className="snes-logo" />
          </span>

          <span onClick={() => handleButton(index + 1)}>
            <i className="snes-jp-logo" />
          </span>
        </div>
      </div>
    </Container>
  );
};
