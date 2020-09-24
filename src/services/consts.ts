const spriteEndpoint = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const apiURL = 'https://pokeapi.co/api/v2/';

export { spriteEndpoint, apiURL };
