//Redux
import { combineReducers } from "redux";
//Reducers
import userReducer from "./user/user.reducer";
import appointmentsReducer from "./appointments/appointments.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  appointments: appointmentsReducer,
});
