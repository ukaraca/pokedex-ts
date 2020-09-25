import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PokemonList } from '../types/pokemon';
import Container from './style';
import { Pokemon } from '../components/Pokemon';
import Loading from '../components/Loading';
import { SearchBar } from '../components/SearchBar';
import { fetchDefaultPokemons, fetchMorePokemons } from '../services/fetches';
import { startsWith } from 'lodash';
import { useHistory } from 'react-router-dom';
import List from '../components/List/Dropdown';

const initialState = {
  count: 0,
  next: '',
  previous: '',
  results: [{ name: '', url: '', id: 0 }],
};

const Pokemons: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<PokemonList>(initialState);
  const [searchValue, setSearchValue] = useState('');
  const [defaultData, setDefaultData] = useState<PokemonList>(initialState);

  const fetch = async (count: number) => {
    const response = await fetchDefaultPokemons(count);
    setLoading(false);
    setDefaultData(response);
    setData(response);
  };

  const fetchMore = async () => {
    const response = await fetchMorePokemons(data);
    setData(response);
  };

  useEffect(() => {
    if (!searchValue) {
      return setData(defaultData);
    }

    const filtered = defaultData.results.filter((item) =>
      startsWith(item.name.toUpperCase(), searchValue.toUpperCase())
    );

    setData({ ...defaultData, results: filtered });
  }, [searchValue, defaultData, history]);

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
      <Container className="nes-container with-title is-rounded">
        <SearchBar value={searchValue} onSearch={setSearchValue} />
        <List />
        <InfiniteScroll
          style={{ overflow: 'hidden', marginTop: 60 }}
          dataLength={data.results.length}
          next={fetchMore}
          hasMore={!!data.next}
          loader={null}
        >
          <div className="flex flex-wrap justify-center">
            {data.results.map((item) => {
              return (
                <article
                  className="col col-12 sm-col-6 md-col-4 lg-col-3 xl-col-2 nes-container is-rounded"
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
