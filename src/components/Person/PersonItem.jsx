import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { makeStyles } from "@material-ui/core/styles";
import EditButton from "../common/EditButton";
import DeleteButton from "../common/DeleteButton";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default ({ person }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={person.photo} />
        </ListItemAvatar>
        <ListItemText
          primary={person.name}
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" color="textPrimary">
                {`Participações em EJC: ${person.eventParticipations.length ||
                  0}`}
              </Typography>
              {"  "}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <EditButton className={classes.fab} personId={person.id}></EditButton>
          <DeleteButton
            className={classes.fab}
            name={person.name}
            personId={person.id}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};
