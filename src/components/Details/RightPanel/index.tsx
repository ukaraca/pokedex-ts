import React from 'react';
import { Pokemon } from '../../../types/pokemon';
import { Evolutions } from './Evolutions';
import { Moves } from './Moves';
import { Stats } from './Stats';
import Container from './style';
import { Type } from './Type';

interface RightPanelProps {
  evolutions: Pokemon[];
  pokemon: Pokemon;
}

export const RightPanel = ({ evolutions, pokemon }: RightPanelProps) => {
  return (
    <Container className="col-12 lg-col-6 p1">
      <Stats stats={pokemon.stats} />
      <Type badges={pokemon.types} />
      <Evolutions evolutions={evolutions} />
      <Moves moves={pokemon.moves} />
    </Container>
  );
};
