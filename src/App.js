import React from 'react';
import Header from './components/Header';
import PersonTable from './components/PersonList';

export default () => {
  return (
    <React.Fragment>
      <Header />
      <PersonTable />
    </React.Fragment>
  )
}
