import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import { useParams } from "react-router";
const client = require("../../api/apiClient");
const moment = require("moment");

export default () => {
  const [person, setPerson] = useState();

  let { id } = useParams();

  useEffect(() => {
    client
      .get("/persons/" + id)
      .then(response => setPerson(response.data))
      .catch(response => console.error(response));
  }, []);

  if (person) {
    person.dateOfBirth = moment.utc(person.dateOfBirth).format("DD/MM/YYYY");
    return <PersonForm initialState={person} />;
  }

  return null;
};
