import React, { createContext, useEffect, useState } from 'react';
import { AppContextProps, PokemonProps } from '../types/pokemon';

// Redux ile de aynı fonksiyonalite sağlanabilirdi.

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: Props) => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  const addPokemon = (pokemon: PokemonProps) => {
    if (pokemons.filter((item) => item.id === pokemon.id).length < 1) {
      localStorage.setItem('list', JSON.stringify([...pokemons, pokemon]));
      return setPokemons([...pokemons, pokemon]);
    }
  };

  const removePokemon = (id: number) => {
    const filtered = pokemons.filter((item) => item.id !== id);
    localStorage.setItem('list', JSON.stringify(filtered));
    return setPokemons(filtered);
  };

  useEffect(() => {
    const localData = localStorage.getItem('list');
    if (localData) {
      return setPokemons(JSON.parse(localData));
    }
  }, []);

  return (
    <AppContext.Provider value={{ pokemons, addPokemon, removePokemon }}>
      {children}
    </AppContext.Provider>
  );
};
