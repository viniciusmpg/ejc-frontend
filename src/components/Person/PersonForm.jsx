import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import PersonPicture from './PersonPicture';

const client = require('../../api/apiClient');

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
  success: {
    background: green[600],
    color: '#FFF'
  }
}));

export default props => {
  const classes = useStyles();
  const [getForm, setForm] = React.useState({});

  function changeHandler(event) {
    const { name, value } = event.target;
    setForm({ ...getForm, [name]: value });
  }

  function openSuccessBar() {
    setForm({ ...getForm, openDialog: true });
  }

  function closeSuccessBar() {
    setForm({ ...getForm, openDialog: false });
  }

  function handleSubmit(event) {
    event.preventDefault();
    client.post('persons', getForm).then(res => {
      openSuccessBar();
    }).catch(res => {
      console.log('error response', res)
    });
  }

  return (

    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <PersonPicture facebookId={getForm.facebookId}></PersonPicture>
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
        <TextField
          margin='dense'
          name='facebookId'
          label='Facebook'
          type='text'
          value={getForm.facebookId}
          fullWidth
          InputLabelProps={{
            shrink: true
          }}
          onChange={changeHandler}
        />
        <Button type='submit'>Salvar</Button>
      </form>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={getForm.openDialog}
        autoHideDuration={6000}
        onClose={closeSuccessBar}
        ContentProps={{
          'aria-describedby': 'message-id',
          classes: {
            root: classes.success
          }
        }}
        message={<span id="message-id">{getForm.name} adicionado com sucesso!</span>}
        action={[
          <Button component={Link} to="/" key="undo" color="primary" size="small" onClick={closeSuccessBar}>
            Voltar para lista
             </Button>,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={closeSuccessBar}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </React.Fragment>
  );
};
