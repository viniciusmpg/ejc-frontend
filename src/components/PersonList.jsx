import React, { useState, useEffect } from 'react';
import PersonCard from './PersonCard';

const client = require('../api/apiClient');

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
            <div>
                <h1>Lista de pessoas</h1>
                {this.state.persons.map((person) => <PersonCard key={person._id} person={person}></PersonCard>)}
            </div>
        );
    }
}

// export default () => {
//     const [getPersons, setPersons] = useState([]);

//     useEffect(() => {
//         client.get('persons').then(res => {
//             console.log(res.data);
//             setPersons([...res.data]);
//         }).catch(err => {
//             console.log(err);
//         });
//     }, []);



// }