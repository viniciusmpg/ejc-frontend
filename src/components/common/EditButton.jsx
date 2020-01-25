import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";

export default props => {
  return (
    <Fab size="small" aria-label="edit" {...props}>
      <EditIcon />
    </Fab>
  );
};
