import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PokemonList } from '../../types/pokemon';
import Container from './style';
import { Pokemon } from '../../components/Pokemon';
import Loading from '../../components/Loading';
import { SearchBar } from '../../components/SearchBar';
import {
  fetchDefaultPokemons,
  fetchMorePokemons,
} from '../../services/fetches';

const initialState = {
  count: 0,
  next: '',
  previous: '',
  results: [{ name: '', url: '', id: 0 }],
};

const Pokemons: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<PokemonList>(initialState);

  const fetch = async (count: number) => {
    const response = await fetchDefaultPokemons(count);
    setLoading(false);
    setData(response);
  };

  const fetchMore = async () => {
    const response = await fetchMorePokemons(data);
    setData(response);
  };

  useEffect(() => {
    const area =
      (document.getElementById('root')?.clientHeight ?? 150) *
      (document.getElementById('root')?.clientWidth ?? 200);

    const count = Math.floor(area / (200 * 150));
    fetch(count);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <Container className="nes-container with-title is-centered">
        <SearchBar />
        <InfiniteScroll
          style={{ overflow: 'hidden' }}
          dataLength={data.results.length}
          next={fetchMore}
          hasMore={!!data.next}
          loader={<Loading />}
        >
          <div className="flex flex-wrap justify-center">
            {data.results.map((item) => {
              return (
                <article
                  className="col col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 m2"
                  key={item.id}
                >
                  <Pokemon data={item} />
                </article>
              );
            })}
          </div>
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default Pokemons;
