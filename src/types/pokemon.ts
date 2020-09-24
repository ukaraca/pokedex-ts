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
  front_default: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  back_default: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
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
