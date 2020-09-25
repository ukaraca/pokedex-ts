import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../hooks/usePokemonListAPI';
import Container from './style';

const PokemonList = () => {
  const history = useHistory();
  const useCtx = useContext(AppContext);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (useCtx?.pokemons.length) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 500);
    }
  }, [useCtx?.pokemons]);

  const onChangeHandler = (id: number | string) => {
    if (id === 'view_all') {
      return history.push('/list');
    }
    if (id) {
      return history.push(`/pokemon/${id}`);
    }
  };

  return (
    <Container>
      <div className={`nes-select ${success ? 'is-success' : ''}`}>
        <select onChange={(e) => onChangeHandler(e.target.value)}>
          <option>My Pokémons</option>
          {useCtx?.pokemons.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
          {useCtx?.pokemons.length ? (
            <option value="view_all">View All</option>
          ) : null}
        </select>
      </div>
    </Container>
  );
};

export default PokemonList;
