const client = require('../api/apiClient');

export function loadPersonList(name) {
  return dispatch => {
    return client
      .get(`persons${name ? `?name=${name}` : ''}`)
      .then(res => {
        dispatch(updatePersonListAction(res.data));
      })
      .catch(error => {
          // TODO: error status
        console.error('erro logado', error);
      });
  };
}

function updatePersonListAction(persons) {
  return {
    type: 'UPDATE-PERSON-LIST',
    persons: persons
  };
}
