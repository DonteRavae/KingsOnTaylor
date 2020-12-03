//Redux
import { createStore } from "redux";
//Reducers
import { rootReducer } from "./rootReducer";

const store = createStore(rootReducer);

export default store;
