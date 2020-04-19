import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import EventsTable from "./EventsTable";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Paper from "@material-ui/core/Paper";
import FormLabel from "@material-ui/core/FormLabel";
import Avatar from "@material-ui/core/Avatar";

const client = require("../../api/apiClient");
const moment = require("moment");
const fileUtils = require("../../utils/fileUtils");

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
  success: {
    background: green[600],
    color: "#FFF",
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

const emptyState = {
  name: "",
  dateOfBirth: null,
  email: "",
};

export default ({ initialState }) => {
  const classes = useStyles();

  const [getForm, setForm] = useState(initialState ? initialState : emptyState);

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

  const eventsChangedHandler = (newData) => {
    setForm({ ...getForm, eventParticipations: newData });
  };

  const handleDateChange = (date) => {
    setForm({ ...getForm, dateOfBirth: date });
  };
  const handleSubmissionPromise = (savePromise) => {
    savePromise
      .then((res) => {
        setForm({ ...emptyState });
        openSuccessBar();
      })
      .catch((res) => {
        console.log("error response", res);
      });
  };

  const handleFileChange = (event) => {
    fileUtils.toBase64(event.target.files[0])
          .then((res) => setForm({...getForm, photo: res}) );
  };

  function savePerson(event) {
    event.preventDefault();
    const personToSave = {
      ...getForm,
      dateOfBirth: moment
        .utc(getForm.dateOfBirth, "MM/DD/YYYY")
        .format("DD/MM/YYYY"),
    };
    setForm(personToSave);

    const savePromise = getForm.id
      ? client.put("persons/" + getForm.id, personToSave)
      : client.post("persons", personToSave);
    handleSubmissionPromise(savePromise);
  }

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item md={6}>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Nome"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={changeHandler}
              value={getForm.name}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="dense"
                name="dateOfBirth"
                label="Data de Nascimento"
                format="dd/MM/yyyy"
                fullWidth
                value={getForm.dateOfBirth}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </MuiPickersUtilsProvider>
            <TextField
              margin="dense"
              name="email"
              label="Endereço de e-mail"
              type="email"
              value={getForm.email}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={changeHandler}
            />
          </Grid>
          <Grid item md={6}>
          <Avatar alt="Remy Sharp" src={getForm.photo} />
            <FormLabel>Foto</FormLabel>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/png, image/jpeg"
            />
          </Grid>
          <Grid item xs={12}>
            <EventsTable
              events={getForm.eventParticipations}
              onRowUpdated={eventsChangedHandler}
            ></EventsTable>
            <Button
              type="button"
              onClick={savePerson}
              variant="contained"
              color="primary"
            >
              Salvar
            </Button>
          </Grid>
        </Grid>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={getForm.openDialog}
          autoHideDuration={6000}
          onClose={closeSuccessBar}
          ContentProps={{
            "aria-describedby": "successMessage",
            classes: {
              root: classes.success,
            },
          }}
          message={
            <span id="successMessage">{getForm.name} salvo com sucesso!</span>
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
            </IconButton>,
          ]}
        />
      </Paper>
    </main>
  );
};
