import React, { useState } from 'react';

export const SearchBar = () => {
  const [value, setValue] = useState('');
  return (
    <div className="nes-field title">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="nes-input"
        placeholder="Search Pokemons..."
      />
    </div>
  );
};
