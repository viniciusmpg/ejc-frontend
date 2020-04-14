import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export default ({ data, value, onChange, label }) => (
  <Autocomplete
    freeSolo
    options={data}
    onChange={(e, value) => onChange(value)}
    onInputChange={(e, value) => onChange(value)}
    defaultValue={value}
    renderInput={params => (
      <TextField
        {...params}
        label={label}
        margin="normal"
        variant="outlined"
      />
    )}
  />
);
