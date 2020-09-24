import React from 'react';
import { randomArrayElement } from '../../../../services/utility';
import { PokemonTypeItem } from '../../../../types/pokemon';

interface TypeProps {
  badges: PokemonTypeItem[];
}

const badgeColors = ['is-dark', 'is-success', 'is-warning', 'is-error'];

export const Type = ({ badges }: TypeProps) => {
  return (
    <div className="mt2">
      {badges.map((item, i) => (
        <a className="nes-badge" key={i}>
          <span className={randomArrayElement(badgeColors)}>
            {item.type?.name}
          </span>
        </a>
      ))}
    </div>
  );
};
