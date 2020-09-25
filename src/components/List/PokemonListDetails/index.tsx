import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../hooks/usePokemonListAPI';
import { ListItem } from './Item';
import Container from './style';

export const PokemonListDetails = () => {
  const history = useHistory();
  const useCtx = useContext(AppContext);

  useEffect(() => {
    if (!useCtx?.pokemons.length) {
      history.push('/');
    }
  }, [useCtx, history]);

  return (
    <Container className="flex items-center">
      <div className="nes-container with-title is-rounded">
        <p className="title">My Pokémons</p>
        <div className="flex flex-wrap">
          <p className="nes-pointer" onClick={() => history.push('/')}>
            Home
          </p>
          <p className="nes-pointer pl2" onClick={() => history.goBack()}>
            Back
          </p>
        </div>
        {useCtx?.pokemons.map((item) => (
          <ListItem key={item.id} pokemon={{ id: item.id, name: item.name }} />
        ))}
      </div>
    </Container>
  );
};
