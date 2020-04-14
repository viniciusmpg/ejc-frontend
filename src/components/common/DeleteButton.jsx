import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import * as actionCreators from "../../actions/actions";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";

const client = require("../../api/apiClient");

const mapStateToProps = state => {
  return state;
};

function DeleteButton(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function confirmDelete() {
    client
      .delete(`persons/${props.personId}`)
      .then(function() {
        props.loadPersonList();
      })
      .catch(function(error) {
        console.log(error);
      });
    handleClose();
  }

  return (
    <React.Fragment>
      <Fab
        size="small"
        color="secondary"
        aria-label="delete"
        onClick={handleClickOpen}
        {...props}
      >
        <DeleteIcon />
      </Fab>
      <Dialog
        open={open}
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Deseja realmente excluir ${props.name}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Este processo não poderá ser revertido.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Não
          </Button>
          <Button onClick={confirmDelete} color="primary" autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default connect(
  mapStateToProps,
  actionCreators
)(DeleteButton);
