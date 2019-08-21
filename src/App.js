import React from 'react';
import Header from './components/Header';
import PersonList from './components/Person//PersonList';

export default () => {
  return (
    <React.Fragment>
      <Header />
      <PersonList></PersonList>
    </React.Fragment>
  )
}
