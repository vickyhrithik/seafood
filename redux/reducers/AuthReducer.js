import {
    ACCOUNT_FETCH_BEGIN,
    ACCOUNT_RESPONSE_SUCCESS,
    ACCOUNT_RESPONSE_ERROR,
    USER_ACCOUNT_REGISTER,
    USER_ACCOUNT_LOGIN,
    ACCOUNT_OTP_VERIFY,
    ACCOUNT_FORGOT_PASSWORD,
    GET_ALL_DIST,
    FILTER_DIST,
    SELECT_DISTRICT,
    INITIAL_STAGE,
    USER_SESSION_MAINTAIN,
  } from '../actions/AuthAction';
  
  const initialState = {
    loading: false,
    mobile: '',
    name:'',
    email:'',
    username:'',
    password:'',
    auth_res_code: '',
    auth_user_data: [],
    otp_verify: [],
    registerUserData: '',
    forgotPassword: [],
    DistrictList: [],
    filterDistrict: [],
    selectedDistValue: '',
    selectedDistrict: '',
    error: null,
    aToken: null,
  };
  
  export default (authReducer = (state = initialState, action) => {
    switch (action.type) {
      case INITIAL_STAGE:
        return {
          ...state,
          auth_res_code: '',
          auth_user_data: [],
          selectedDistValue: '',
          selectedDistrict: '',
        };
  
      case USER_SESSION_MAINTAIN:
        return {
          ...state,
          aToken: action.payload.AccessToken,
          loading: false,
        };
  
      case ACCOUNT_FETCH_BEGIN:
        return {
          ...state,
          loading: true,
        };
  
      case ACCOUNT_RESPONSE_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
  
      case USER_ACCOUNT_REGISTER:
        return {
          ...state,
          loading: false,
          auth_res_code: action.payload.responseCode,
          auth_user_data: action.payload.userData,
          registerUserData: action.payload.registerData,
        };
  
      case USER_ACCOUNT_LOGIN:
        return {
          ...state,
          loading: false,
          name: action.payload.name,
          password: action.payload.password,
          auth_user_data: action.payload.userData,
        };
  
      case GET_ALL_DIST:
        let districtList = action.payload.dist.sort(function(a, b) {
          return a.district_name - b.district_name;
        });
  
        return {
          ...state,
          DistrictList: districtList,
          filterDistrict: districtList,
        };
  
      case FILTER_DIST:
        const filterDistrictList = state.DistrictList.filter(item => {
          const itemData = `${item.district_name.toUpperCase()}   
               ${item.state_name.toUpperCase()}`;
  
          const textData = action.payload.value.toUpperCase();
  
          return itemData.indexOf(textData) > -1;
        });
  
        return {
          ...state,
          DistrictList: state.DistrictList,
          filterDistrict: filterDistrictList,
        };
  
      case SELECT_DISTRICT:
        return {
          ...state,
          selectedDistValue: action.payload.value,
          selectedDistrict: action.payload.distName,
        };
  
      default:
        return state;
    }
  });
  