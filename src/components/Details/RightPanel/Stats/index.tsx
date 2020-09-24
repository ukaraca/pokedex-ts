import React from 'react';
import Container from './style';
import { PokemonStatItem } from '../../../../types/pokemon';

interface StatsProps {
  stats: PokemonStatItem[];
}

export const Stats = ({ stats }: StatsProps) => {
  return (
    <Container>
      <div className="nes-container is-rounded">
        {stats.map((item, i) => (
          <div key={i}>
            <label htmlFor={item.stat.name}>
              {item.stat.name}:{item.base_stat}
            </label>
            <progress
              id={item.stat.name}
              className="nes-progress"
              value={item.base_stat}
              max="100"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
