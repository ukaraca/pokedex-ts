import React from 'react';
import Container from './style';
import { Pokemon } from '../../../types/pokemon';

interface LeftPanelProps {
  data: Pokemon;
  descriptions: string[];
}

export const LeftPanel = ({ data, descriptions }: LeftPanelProps) => {
  return (
    <Container className="col-6 flex flex-column justify-between">
      <div className="nes-container is-rounded">
        <img
          className="pokemon-sprite"
          src={data.sprites.front_default}
          alt={data.name}
        />
      </div>
      <div className="flex">
        <div>
          <button type="button" className="nes-btn is-primary">
            a
          </button>
        </div>
        <div>
          <button type="button" className="nes-btn is-primary">
            b
          </button>
        </div>
        <div>
          <button type="button" className="nes-btn is-primary">
            c
          </button>
        </div>
      </div>
      <div className="nes-container is-rounded screen">
        <p>{descriptions[0]}</p>
      </div>
    </Container>
  );
};
