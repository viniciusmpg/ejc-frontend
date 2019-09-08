import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PersonList from './components/Person/PersonList';
import CreatePerson from './components/Person/PersonForm';

export default () => {
  return (
    <Router>
      <Header />
      <Route path='/' component={PersonList} />
      <Route path='/adicionar' component={CreatePerson} />
    </Router>
  );
};
