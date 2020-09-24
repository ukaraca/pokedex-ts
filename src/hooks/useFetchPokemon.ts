import { useCallback, useEffect, useState } from 'react';
import { instance } from '../services/api';
import { getUniqueItems } from '../services/utility';
import { Pokemon, SpeciesDataProps } from '../types/pokemon';

interface SpeciesData {
  data: SpeciesDataProps;
}

interface PokemonProp {
  data: Pokemon;
}

const useFetchPokemon = (id: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Pokemon | undefined>();
  const [species, setSpecies] = useState<SpeciesDataProps | undefined>();
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [evolutions, setEvolutions] = useState<Pokemon[]>([]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { data: pokemonData }: PokemonProp = await instance.get(
        `pokemon/${id}`
      );

      const fetchSpeciesURL = pokemonData.species.url;

      const { data: speciesData }: SpeciesData = await instance.get(
        fetchSpeciesURL
      );

      const flavorTexts = speciesData.flavor_text_entries
        .filter((item) => item.language.name === 'en')
        .map((item) => item.flavor_text);

      const descriptions: string[] = getUniqueItems(flavorTexts);
      const fetchEvolution = speciesData.evolution_chain.url;

      const { data: evolutionData } = await instance.get(fetchEvolution);

      const evolutions = [];
      const first = evolutionData.chain;
      let second;
      let third;

      const { data: evolution1 } = await instance.get(
        `pokemon/${first.species.name}/`
      );
      evolutions.push(evolution1);
      second = first.evolves_to[0];

      if (second) {
        const { data: evolution2 } = await instance.get(
          `pokemon/${second.species.name}/`
        );
        evolutions.push(evolution2);
        third = second.evolves_to[0];
      }

      if (third) {
        const { data: evolution3 }: PokemonProp = await instance.get(
          `pokemon/${third.species.name}/`
        );
        evolutions.push(evolution3);
      }

      setData(pokemonData);
      setDescriptions(descriptions);
      setEvolutions(evolutions);
      setSpecies(speciesData);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.error(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id, fetchData]);

  return { loading, data, species, evolutions, descriptions, error };
};

export default useFetchPokemon;
