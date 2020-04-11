import React from "react";
import MaterialTable from "material-table";

export default ({ events, onEventsChanged }) => {
  const [getEvents, setEvents] = React.useState(events);

  return (
    <MaterialTable
      columns={[
        { title: "EJC", field: "eventName" },
        { title: "Equipe", field: "team" },
        { title: "Ano", field: "year", type: "numeric" },
        { title: "Função", field: "role" },
      ]}
      data={getEvents}
      editable={{
        isEditable: true,
        onRowAdd: (newData) => {
          console.log("chegou aqui!!");
          console.log("new data", newData);
          return new Promise((resolve, reject) => {
            setEvents([...getEvents, newData]);
            resolve();
          });
        },
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            const index = getEvents.indexOf(oldData);
            const data = [...getEvents];
            data[index] = newData;
            setEvents([...data]);
          }),
        onRowDelete: (oldData) => {
          console.log('chegou no delete');
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                /* let data = this.state.data;
                    const index = data.indexOf(oldData);
                    data.splice(index, 1);
                    this.setState({ data }, () => resolve()); */
              }
              resolve();
            }, 1000);
          });
        },
      }}
      title="Participações em EJC"
    />
  );
};
