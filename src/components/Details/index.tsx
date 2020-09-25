import React, { useContext } from 'react';
import Container from './style';
import { useHistory, useParams } from 'react-router-dom';
import useFetchPokemon from '../../hooks/useFetchPokemon';
import Loading from '../Loading';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';
import PokemonList from '../List/Dropdown';
import { AppContext } from '../../hooks/usePokemonListAPI';

interface IdProps {
  id: string;
}

export const Details = () => {
  const history = useHistory();
  const useCtx = useContext(AppContext);
  const { id }: IdProps = useParams();
  const {
    data,
    loading,
    species,
    evolutions,
    descriptions,
    error,
  } = useFetchPokemon(id);

  if (loading || !data) {
    return <Loading />;
  }

  if (error) {
    return <p>something went wrong!</p>;
  }

  return (
    <Container className="flex items-center">
      <div className="nes-container is-rounded with-title">
        <PokemonList />
        <div className="flex flex-wrap items-center">
          <div className="mr2 nes-pointer" onClick={() => history.push('/')}>
            Home
          </div>
          <div className="nes-badge is-splited pokemon-badge">
            <span className="is-dark" style={{ width: '75%' }}>
              {data?.name}
            </span>
            <span className="is-warning" style={{ width: '25%' }}>
              #{data.id}
            </span>
          </div>
          <div className="ml2">
            <i
              className="nes-icon heart nes-pointer"
              onClick={() =>
                useCtx?.addPokemon({ id: data.id, name: data.name })
              }
            ></i>
          </div>
          <div className="ml2">
            <i
              className="nes-icon is-transparent heart nes-pointer"
              onClick={() => useCtx?.removePokemon(data.id)}
            ></i>
          </div>
        </div>
        <div className="inner-container nes-container flex-wrap is-rounded">
          <LeftPanel data={data} descriptions={descriptions} />
          <RightPanel evolutions={evolutions} pokemon={data} />
        </div>
      </div>
    </Container>
  );
};
