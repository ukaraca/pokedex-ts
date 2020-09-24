import React from 'react';
import { Global } from '@emotion/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pokemons from './containers/Pokemons';
import rootStyles from './rootStyles';
import { Details } from './components/Details';

const App: React.FC = () => {
  return (
    <Router>
      <Global styles={rootStyles} />
      <Switch>
        <Route component={Pokemons} path="/" exact />
        <Route component={Details} path="/:id" exact />
      </Switch>
    </Router>
  );
};

export default App;
