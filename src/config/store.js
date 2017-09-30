// Redux
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
// Reducers
import reducers from "./../ducks";

const middleware = () => {
    return applyMiddleware(thunkMiddleware);
};

export default createStore(reducers, middleware());
