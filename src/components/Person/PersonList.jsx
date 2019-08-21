import React, { useState, useEffect } from 'react';
import PersonItem from './PersonItem';
//import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const client = require('../../api/apiClient');

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// }));

// const classes = useStyles();
const classes = {};

// export default () => {

//   const [getPersons, setPersons] = useState([]);

//   useEffect(() => {
//     // this is only executed once
//     client.get(`persons`)
//       .then(res => {
//         const persons = res.data;
//         setPersons({ persons });
//       })
//   }, []);

//   return (
//     <List className={classes.root}>
//       {getPersons.map((person) => <PersonItem key={person._id} person={person}></PersonItem>)}
//     </List>
//   );
// }

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
      <List className={classes.root}>
        {this.state.persons.map((person) => <PersonItem key={person._id} person={person}></PersonItem>)}
      </List>
    );
  }
}