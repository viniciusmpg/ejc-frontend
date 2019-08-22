const client = require('../api/apiClient');

export function loadPersonList(name) {
    return (dispatch) => {
        return (
            client.get(`persons${name ? `?name=${name}` : ''}`)
                .then(res => {
                    dispatch(updatePersonList(res.data));
                })
        );
    }
}

export function updatePersonList(persons) {
    return {
        type: "UPDATE-PERSON-LIST",
        persons: persons
    }
}