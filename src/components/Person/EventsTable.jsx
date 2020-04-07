import React from "react";
import MaterialTable from "material-table";

export default ({ events, onEventsChanged }) => {
  return (
    <MaterialTable
      columns={[
        { title: "EJC", field: "eventName" },
        { title: "Equipe", field: "team" },
        { title: "Ano", field: "year", type: "numeric" },
        { title: "Função", field: "role" },
      ]}
      data={events}
      editable={{
        isEditable: true,
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            console.log('newData', newData);
            setTimeout(() => {
              {
                /* const data = this.state.data;
                    data.push(newData);
                    this.setState({ data }, () => resolve()); */
              }
              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                /* const data = this.state.data;
                    const index = data.indexOf(oldData);
                    data[index] = newData;                
                    this.setState({ data }, () => resolve()); */
              }
              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                /* let data = this.state.data;
                    const index = data.indexOf(oldData);
                    data.splice(index, 1);
                    this.setState({ data }, () => resolve()); */
              }
              resolve();
            }, 1000);
          }),
      }}
      title="Participações em EJC"
    />
  );
};
