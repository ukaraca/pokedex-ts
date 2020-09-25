import React, { useState } from 'react';
import Container from './style';
import { MovesProps } from '../../../../types/pokemon';

interface MoveProps {
  moves: MovesProps[];
}

export const Moves = ({ moves }: MoveProps) => {
  const [index, setIndex] = useState(0);

  const handleButton = (newIndex: number) => {
    if (newIndex > moves.length - 4) {
      return setIndex(0);
    }

    if (newIndex < 0) {
      return setIndex(moves.length - 4);
    }
    setIndex(newIndex);
  };
  return (
    <Container>
      <div className="nes-container is-rounded flex">
        <div className="nes-container is-rounded screen move-screen">
          <p>{moves[index].move.name}</p>
          <p>{moves[index + 1].move.name}</p>
          <p>{moves[index + 2].move.name}</p>
          <p>{moves[index + 3].move.name}</p>
        </div>
        <div className="move-controls">
          <span onClick={() => handleButton(index - 4)}>
            <i className="snes-logo" />
          </span>

          <span onClick={() => handleButton(index + 4)}>
            <i className="snes-jp-logo" />
          </span>
        </div>
      </div>
    </Container>
  );
};
