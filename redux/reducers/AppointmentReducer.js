import {
    APPOINTMENT_TIME_DURATION,
    APPOINTMENT_AVAILABLE_DAY,
    SELECT_AVAILABLE_DAY,
    APPOINTMENT_AVAILABLE_TIME,
    APPOINTMENT_UPDATE_SUCCESS,
    GET_DATA_FETCH_ERROR,
    FETCH_APPOINTMENT_DATA,
    FETCH_BEGIN,
  } from '../actions/AppointmentAction';
  
  const initialState = {
    appointmentData: '',
    durationData: [],
    daysData: [],
    timeData: [],
    selectedDaysData: [],
    error: null,
  };
  
  export default (appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BEGIN:
        return {
          ...state,
          appointmentData: '',
          specializationData: [],
          selectedSpecializationData: [],
          error: null,
        };
  
      case FETCH_APPOINTMENT_DATA:
        return {
          ...state,
          appointmentData: action.payload.data,
          error: null,
        };
  
      case APPOINTMENT_TIME_DURATION:
        return {
          ...state,
          durationData: action.payload.duration,
          error: null,
        };
  
      case APPOINTMENT_AVAILABLE_DAY:
        return {
          ...state,
          daysData: action.payload.days,
          error: null,
        };
  
      case SELECT_AVAILABLE_DAY:
        const selected = state.daysData.map(item =>
          item.id !== action.payload.value
            ? item
            : {...item, isSelected: !item.isSelected},
        );
        return {
          ...state,
          daysData: selected,
          selectedDaysData: selected.filter(data => data.isSelected),
          error: null,
        };
  
      case APPOINTMENT_AVAILABLE_TIME:
        return {
          ...state,
          timeData: action.payload.time,
          error: null,
        };
  
      case GET_DATA_FETCH_ERROR:
        return {
          ...state,
          error: action.payload.error,
        };
  
      default:
        return state;
    }
  });
  