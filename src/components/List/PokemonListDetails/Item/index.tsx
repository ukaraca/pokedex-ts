import React, { useContext } from 'react';
import Container from './style';
import { spriteEndpoint } from '../../../../services/consts';
import { Img } from '../../../Img';
import { AppContext } from '../../../../hooks/usePokemonListAPI';
import { useHistory } from 'react-router-dom';

interface ListItemProps {
  pokemon: {
    id: number;
    name: string;
  };
}

export const ListItem = ({ pokemon }: ListItemProps) => {
  const history = useHistory();
  const useCtx = useContext(AppContext);
  return (
    <Container>
      <div className="nes-container is-rounded flex justify-between items-center">
        <div>
          <Img
            src={spriteEndpoint(pokemon.id)}
            alt={pokemon.name}
            styles="screen"
          />
        </div>
        <div>
          <p
            className="nes-pointer"
            onClick={() => history.push(`/pokemon/${pokemon.id}`)}
          >
            {pokemon.name}
          </p>
        </div>
        <div>
          <i
            className="nes-icon close nes-pointer"
            onClick={() => useCtx?.removePokemon(pokemon.id)}
          ></i>
        </div>
      </div>
    </Container>
  );
};
