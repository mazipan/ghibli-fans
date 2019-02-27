import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "src/reducers";
import api from "src/middleware/api";

export default function configureStore(initialState) {
	return createStore(rootReducer, initialState, applyMiddleware(thunk, api));
}
