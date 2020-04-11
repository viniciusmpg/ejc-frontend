import React from "react";
import MaterialTable from "material-table";

const columns = [
  { title: "EJC", field: "EventName" },
  { title: "Equipe", field: "Team" },
  { title: "Ano", field: "Year", type: "numeric" },
  { title: "Função", field: "Role" }
];

export default function EventParticipationsTable({events, onRowUpdated}) {
  const [state, setState] = React.useState({
    data: events ? events : []
  });

  return (
    <MaterialTable
      title="Participações em EJC"
      columns={columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                onRowUpdated(data);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  onRowUpdated(data);
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                onRowUpdated(data);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
