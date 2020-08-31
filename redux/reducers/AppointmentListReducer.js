import {
    APPOINTMENT_BEGIN_FETCH,
    APPOINTMENT_DATA_FETCH_ERROR,
    APPOINTMENT_DATA_FETCH_SUCCESS,
  } from '../actions/AppointmentListAction';
  
  const initialState = {
    loading: false,
    error: null,
    data: [],
  };
  
  export default (appointmentListReducer = (state = initialState, action) => {
    switch (action.type) {
      case APPOINTMENT_BEGIN_FETCH:
        return {
          ...state,
          loading: true,
        };
  
      case APPOINTMENT_DATA_FETCH_SUCCESS:
        return {
          ...state,
          data: action.payload.data,
          loading: false,
        };
  
      case APPOINTMENT_DATA_FETCH_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
  
      default:
        return state;
    }
  });
  