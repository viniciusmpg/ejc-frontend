const client = require('../api/apiClient');
const userAuth = require('../api/userAuthentication');

export function loadPersonList(name) {
  return dispatch => {
    return client
      .get(`persons${name ? `?name=${name}` : ''}`)
      .then(res => {
        dispatch(updatePersonListAction(res.data));
      })
      .catch(error => {
        // TODO: error status
        console.error('logged error', error);
      });
  };
}

function updatePersonListAction(persons) {
  return {
    type: 'UPDATE-PERSON-LIST',
    persons: persons
  };
}
