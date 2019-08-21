import React, { useState, useEffect } from 'react';
import PersonItem from './PersonItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const client = require('../../api/apiClient');

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    client.get(`persons`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <List>
        {this.state.persons.map((person) => <PersonItem key={person._id} person={person}></PersonItem>)}
      </List>
    );
  }
}