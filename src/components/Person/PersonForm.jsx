import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import EventsTable from './EventParticipationsTable';

const client = require("../../api/apiClient");

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  },
  success: {
    background: green[600],
    color: "#FFF"
  }
}));

export default () => {
  const classes = useStyles();
  const [getForm, setForm] = React.useState({});

  const initialState = {
    Name: "",
    DateOfBirth: "",
    Email: ""
  };

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

  const eventsChangedHandler =  (newData) => {
    debugger;
    setForm({ ...getForm, eventParticipations: newData });

    console.log('new state', getForm);
  };

  function handleSubmit(event) {
    event.preventDefault();
    debugger;
    client
      .post("persons", getForm)
      .then(res => {
        setForm({ ...initialState });
        openSuccessBar();
      })
      .catch(res => {
        console.log("error response", res);
      });
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <form id="personForm" onSubmit={handleSubmit}>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Nome"
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true
          }}
          onChange={changeHandler}
          value={getForm.name}
        />
        <TextField
          margin="dense"
          name="dateOfBirth"
          label="Data de Nascimento"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true
          }}
          onChange={changeHandler}
          value={getForm.dob}
        />
        <TextField
          margin="dense"
          name="email"
          label="Endereço de e-mail"
          type="email"
          value={getForm.email}
          fullWidth
          InputLabelProps={{
            shrink: true
          }}
          onChange={changeHandler}
        />
        <EventsTable events={getForm.eventParticipations} onRowUpdated={eventsChangedHandler}></EventsTable>
        
     <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </form>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={getForm.openDialog}
        autoHideDuration={6000}
        onClose={closeSuccessBar}
        ContentProps={{
          "aria-describedby": "successMessage",
          classes: {
            root: classes.success
          }
        }}
        message={
          <span id="successMessage">
            {getForm.name} adicionado com sucesso!
          </span>
        }
        action={[
          <Button
            component={Link}
            to="/"
            key="undo"
            color="primary"
            size="small"
            onClick={closeSuccessBar}
          >
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
          </IconButton>
        ]}
      />
    </Grid>
  );
};
