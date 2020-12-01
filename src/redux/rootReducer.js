//Redux
import { combineReducers } from "redux";
//Reducers
import appointmentsReducer from "./appointments/appointments.reducer";

export const rootReducer = combineReducers({
  appointments: appointmentsReducer,
});
