export interface Pokemon {
  id: number;
  name: string;
  stats: PokemonStatItem[];
  height: number;
  weight: number;
  sprites: PokemonSprites;
  species: PokemonSpecies;
  types: PokemonTypeItem[];
}

export interface PokemonStatItem {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface Stat {
  id: number;
  name: string;
  url: string;
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface SpeciesDataProps {
  flavor_text_entries: FlavorTextEntriesProps[];
  evolution_chain: {
    url: string;
  };
}

interface FlavorTextEntriesProps {
  language: {
    name: string;
  };
  flavor_text: string;
}

export interface PokemonSprites {
  back_female: string | null;
  back_shiny_female: string | null;
  back_default: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  [key: string]: string | null;
}

export interface PokemonTypeItem {
  slot: number;
  type: PokemonType;
}

export interface PokemonList {
  count: number;
  next: string;
  previous: string | null;
  results: Stat[];
}
