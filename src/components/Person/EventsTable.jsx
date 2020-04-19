import React, { useEffect } from "react";
import MaterialTable from "material-table";
import CustomAutoComplete from "../common/CustomAutoComplete";
const client = require("../../api/apiClient");

const fetchColumns = (events, teams, roles) => {
  return [
    {
      title: "EJC",
      field: "eventName",
      editComponent: props => (
        <CustomAutoComplete {...props} data={events} label="EJC" />
      )
    },
    {
      title: "Equipe",
      field: "team",
      editComponent: props => (
        <CustomAutoComplete {...props} data={teams} label="Equipe" />
      )
    },
    { title: "Ano", field: "year", type: "numeric" },
    {
      title: "Função",
      field: "role",
      editComponent: props => (
        <CustomAutoComplete {...props} data={roles} label="Função" />
      )
    }
  ];
};

export default function EventsTable({ events, onRowUpdated }) {
  const [state, setState] = React.useState({
    columns: fetchColumns(),
    data: events ? events : []
  });

  useEffect(() => {
    async function fetchAutoComplete() {
      const [events, teams, roles] = await Promise.all([
        client.get("tags?fieldName=EventParticipations.EventName"),
        client.get("tags?fieldName=EventParticipations.Team"),
        client.get("tags?fieldName=EventParticipations.Role")
      ]);

      setState(prevState => {
        return {
          ...prevState,
          columns: fetchColumns(events.data, teams.data, roles.data)
        };
      });
    }

    fetchAutoComplete();
  }, []);

  return (
    <MaterialTable
      title="Participações em EJC"
      columns={state.columns}
      data={state.data}
      options={{
        search: true
      }}
      localization={{
        pagination: {
          labelDisplayedRows: "{from}-{to} de {count}",
          labelRowsSelect: "registros"
        },
        toolbar: {
          nRowsSelected: "{0} participações(s) selecionadas"
        },
        header: {
          actions: "Ações"
        },
        body: {
          emptyDataSourceMessage: "Nenhuma participação a ser exibida",
          filterRow: {
            filterTooltip: "Filtrar"
          }
        },
        toolbar:{
          searchPlaceholder: "Pesquisar"
        }
      }}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                onRowUpdated(data);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  onRowUpdated(data);
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                onRowUpdated(data);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
