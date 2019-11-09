import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PersonList from './components/Person/PersonList';
import CreatePerson from './components/Person/PersonForm';

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={PersonList} />
        <Route exact path='/adicionar' component={CreatePerson} />
      </Switch>
    </Router>
  );
};
