import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const client = require('../../api/apiClient');

export default props => {
  const [getForm, setForm] = React.useState({});

  function changeHandler(event) {
    const { name, value } = event.target;
    setForm({ ...getForm, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    client.post('persons', getForm).then(res => {
      console.log('response', res);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        margin='dense'
        name='name'
        label='Nome'
        type='text'
        fullWidth
        InputLabelProps={{
          shrink: true
        }}
        onChange={changeHandler}
        value={getForm.name}
      />
      <TextField
        margin='dense'
        name='dob'
        label='Data de Nascimento'
        type='date'
        fullWidth
        InputLabelProps={{
          shrink: true
        }}
        onChange={changeHandler}
        value={getForm.dob}
      />
      <TextField
        margin='dense'
        name='email'
        label='Endereço de e-mail'
        type='email'
        value={getForm.email}
        fullWidth
        InputLabelProps={{
          shrink: true
        }}
        onChange={changeHandler}
      />
      <Button type='submit'>Salvar</Button>
    </form>
  );
};
