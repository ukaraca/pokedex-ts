import React from 'react';
import { Global } from '@emotion/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pokemons from './containers';
import rootStyles from './rootStyles';
import { Details } from './components/Details';
import { AppProvider } from './hooks/usePokemonListAPI';
import { PokemonListDetails } from './components/List/PokemonListDetails';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router basename="pokedex-ts/">
        <Global styles={rootStyles} />
        <Switch>
          <Route component={Pokemons} path="/" exact />
          <Route component={Details} path="/pokemon/:id" exact />
          <Route component={PokemonListDetails} path="/list" exact />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
