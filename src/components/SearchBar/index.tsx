import React from 'react';
import Container from './style';

interface SearchBarProps {
  value?: string;
  onSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ value, onSearch }: SearchBarProps) => {
  return (
    <Container>
      <div className="nes-field">
        <input
          list="pokemon-list"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
          type="text"
          className="nes-input"
          placeholder="Search Pokémons..."
        />
      </div>
    </Container>
  );
};
