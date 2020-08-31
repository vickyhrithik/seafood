import {
    UPDATE_USER_PROFILE,
    GET_SPECIALIZATION_DATA,
    SELECT_SPECIALIZATION_DATA,
    FETCH_USER_DATA,
    USER_DATA_FETCH_ERROR,
    FETCH_BEGIN,
  } from '../actions/ProfileAction';
  
  const initialState = {
    userData: [],
    specializationData: [],
    selectedSpecializationData: [],
    error: null,
  };
  
  export default (profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BEGIN:
        return {
          ...state,
          userData: [],
          specializationData: [],
          selectedSpecializationData: [],
          error: null,
        };
  
      case FETCH_USER_DATA:
        return {
          ...state,
          userData: action.payload.userData,
          error: null,
        };
  
      case UPDATE_USER_PROFILE:
        return {
          ...state,
          userData: action.payload.userData,
          error: null,
        };
  
      case GET_SPECIALIZATION_DATA:
        return {
          ...state,
          specializationData: action.payload.specialist,
          error: null,
        };
  
      case SELECT_SPECIALIZATION_DATA:
        const selected = state.specializationData.map(item =>
          item.specialization_id !== action.payload.specialization_id
            ? item
            : {...item, isSelected: !item.isSelected},
        );
        return {
          ...state,
          specializationData: selected,
          selectedSpecializationData: selected.filter(data => data.isSelected),
          error: null,
        };
  
      case USER_DATA_FETCH_ERROR:
        return {
          ...state,
          error: action.payload.error,
        };
  
      default:
        return state;
    }
  });
  