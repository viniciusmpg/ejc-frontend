import React from 'react';
import { Table } from 'react-bootstrap';

const client = require('../../api/apiClient');

export default () => {
    const [getPersons, setPersons] = React.useState([]);

    client.get('persons').then(res => {
        const persons = res.data;
        setPersons(persons);
    }).catch(err => {
        console.log(err);
    });

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                {getPersons.map((person) => {
                    return (
                        <tr key={person._id}>
                            <td>{person._id}</td>
                            <td>{person.name}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </Table>
    );
}