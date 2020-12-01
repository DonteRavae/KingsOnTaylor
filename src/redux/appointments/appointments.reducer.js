const INITIAL_STATE = {
  appointmentCards: [
    {
      client: "Donte",
      barber: "Tremaine",
      time: "1:30 PM", //Time may be stored in milliseconds
      status: "On Time", //Options are 'On Time', 'Delayed', 'Canceled'
      active: false, //If client is in the process of getting hair cut
    },
  ],
};

const appointmentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "appointments/addAppointment":
      return {
        ...state,
        appointmentCards: [...state.appointmentCards, action.payload],
      };
    default:
      return state;
  }
};

export default appointmentsReducer;
