import React from "react";

export default props => {
  if (props.facebookId) {
    return (
      <img alt="Facebook Profile Picture" src="https://bit.ly/2ZfSBiQ"></img>
    );
  }

  return null;
};
