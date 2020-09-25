import React from 'react';
import { useHistory } from 'react-router-dom';
import { Pokemon } from '../../../../types/pokemon';
import { Img } from '../../../Img';
import Container from './style';
interface RightPanelProps {
  evolutions: Pokemon[];
}

export const Evolutions = ({ evolutions }: RightPanelProps) => {
  const history = useHistory();
  return (
    <Container className="mt2">
      <div className="nes-container is-rounded flex flex-wrap">
        {evolutions.map((item, i) => (
          <div
            key={i}
            className="flex flex-column nes-pointer"
            onClick={() => history.push(`/pokemon/${item.id}`)}
          >
            <Img
              src={item.sprites.front_default || ' '}
              styles="pokemon-sprite"
              alt={item.name}
            />

            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};
