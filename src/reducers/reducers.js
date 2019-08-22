let defaultState = [];

const reducers = (state = defaultState, action) => {
    if (action.type === "UPDATE-PERSON-LIST") {
        return {
            ...state,
            persons: action.persons
        }
    } else {
        return { ...state };
    }
};

export default reducers;