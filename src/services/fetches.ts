import { instance } from './api';
import { PokemonList } from '../types/pokemon';
import { AxiosResponse } from 'axios';
import { splitIdFromURL } from './utility';

const fetchDefaultPokemons = async (count: number) => {
  const { data }: AxiosResponse<PokemonList> = await instance.get(
    `pokemon?limit=${count}`
  );

  const modified = data.results.map((item) => {
    const id = splitIdFromURL(item.url);
    return {
      ...item,
      id,
    };
  });

  return { ...data, results: modified };
};

const fetchMorePokemons = async (defaultData: PokemonList) => {
  const api = defaultData.next.split('v2');
  console.log(api);
  const { data }: AxiosResponse<PokemonList> = await instance.get(api[1]);

  const payload: PokemonList = data;

  const modified = payload.results.map((item) => {
    const id = splitIdFromURL(item.url);
    return {
      ...item,
      id,
    };
  });
  return { ...payload, results: defaultData.results.concat(modified) };
};

export { fetchDefaultPokemons, fetchMorePokemons };
