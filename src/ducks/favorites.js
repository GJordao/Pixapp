const ADD_TO_FAVORITES = "favorites/ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "favorites/REMOVE_FROM_FAVORITES";

const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES: {
            const newTalks = state.slice();
            newTalks.push(action.payload);

            return newTalks;
        }
        case REMOVE_FROM_FAVORITES: {
            const newState = state.slice();
            const index = newState.indexOf(action.payload);
            if (index !== -1) {
                newState.splice(index, 1);
            }
            return newState;
        }
        default:
            return state;
    }
};

export const addFavorite = talk => {
    return {
        type: ADD_TO_FAVORITES,
        payload: talk
    };
};


export const removeFavorite = talk => {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: talk
    };
};
