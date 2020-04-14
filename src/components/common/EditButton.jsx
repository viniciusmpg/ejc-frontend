import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <Link to={"/editar/" + props.personId}>
      <Fab size="small" aria-label="edit" {...props}>
        <EditIcon />
      </Fab>
    </Link>
  );
};
