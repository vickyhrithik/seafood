import {combineReducers} from 'redux';
import authReducer from './AuthReducer';
import appointmentReducer from './AppointmentReducer';
import profileReducer from './Profilereducer';
import appointmentListReducer from './AppointmentListReducer';

export default (rootReducers = combineReducers({
  authUserData: authReducer,
  appointmentData: appointmentReducer,
  profileData: profileReducer,
  appointmentList: appointmentListReducer,
}));
