import React from 'react';
import { randomArrayElement } from '../../../../services/utility';
import { PokemonTypeItem } from '../../../../types/pokemon';

interface TypeProps {
  badges: PokemonTypeItem[];
}

const badgeColors = ['is-dark', 'is-success', 'is-warning', 'is-error'];

export const Type = ({ badges }: TypeProps) => {
  return (
    <div className="pokemon-type mt2 flex flex-wrap">
      {badges.map((item, i) => (
        <div className="nes-badge" key={i}>
          <span className={randomArrayElement(badgeColors)}>
            {item.type?.name}
          </span>
        </div>
      ))}
    </div>
  );
};
