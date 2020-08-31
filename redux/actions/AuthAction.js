import axios from 'axios';
import {Toast} from 'native-base';
import {AsyncStorage} from 'react-native';

export const USER_ACCOUNT_LOGIN = 'USER_ACCOUNT_LOGIN';

export const USER_SESSION_MAINTAIN = 'USER_ACCOUNT_LOGIN';

export const USER_ACCOUNT_REGISTER = 'USER_ACCOUNT_REGISTER';
export const GET_ALL_DIST = 'GET_ALL_DIST';
export const FILTER_DIST = 'FILTER_DIST';
export const SELECT_DISTRICT = 'SELECT_DISTRICT';

export const ACCOUNT_FETCH_BEGIN = 'ACCOUNT_FETCH_BEGIN';
export const ACCOUNT_RESPONSE_SUCCESS = 'ACCOUNT_RESPONSE_SUCCESS';
export const ACCOUNT_RESPONSE_ERROR = 'ACCOUNT_RESPONSE_ERROR';
export const ACCOUNT_OTP_VERIFY = 'ACCOUNT_OTP_VERIFY';
export const ACCOUNT_FORGOT_PASSWORD = 'ACCOUNT_FORGOT_PASSWORD';

const BASE_URL = 'http://ec2-13-229-120-202.ap-southeast-1.compute.amazonaws.com:5000/api/v1.0/users/';

export const validateLogin = () => {
  return async dispatch => {
    let AccessToken = await AsyncStorage.getItem('AccessToken');
    dispatch(storeUserToken(AccessToken));
    console.log(AccessToken);
  };
};

const storeUserToken = AccessToken => ({
  type: USER_SESSION_MAINTAIN,
  payload: {
    AccessToken,
  },
});

export const auth_login = (name,password )=> {
  return dispatch => {
    dispatch(beginFetchData());
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    let url = 'number_validation';

    var data = new FormData();
    data.append('email', name);
    data.append('password', password);

    const config = {
      method: 'POST',
      data: data,
      url,
      headers,
    };
    return axios
      .create({
        baseURL: BASE_URL,
        timeout: 45000,
      })(config)
      .then(response => {
        dispatch(userAccountInputs(response.data, name,password));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

export const userRegister = (
  username,
  email,
  password,
  
) => {
  return dispatch => {
    dispatch(beginFetchData());
    let headers = {
      // Accept: 'application/json',
           'Content-Type': 'multipart/form-data',
    };


    let url = 'signup';
    

    var userData = new FormData();
    // console.log('fhkjgjkdsh')
    userData.append("username", username);
    userData.append("email", email);
    userData.append("password", password);
    userData.append("5",roleId);
    

    const config = {
      method: 'POST',
      // data: data,
      data:userData,
      url,
      headers,
    };
    return axios
      .create({
        baseURL: BASE_URL,
        timeout: 45000,
      })(config)
      .then(response => {
        
        // dispatch(
        //   userAccountRegister(response.data.api_status, response.data, data),
        // );
        return response.FormData;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

export const resentOTP = mobile => {
  return dispatch => {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    let url = 'create-account';

    var data = new FormData();
    data.append('mobile_number', mobile);

    const config = {
      method: 'POST',
      data: data,
      url,
      headers,
    };
    return axios
      .create({
        baseURL: BASE_URL,
        timeout: 45000,
      })(config)
      .then(response => {
        console.log('otp response', response);
        return response.data.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

export const accountOTPVerify = (otpValue, mobile) => {
  return dispatch => {
    dispatch(beginFetchData());
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    let url = 'create-account';

    var data = new FormData();

    data.append('otp', otpValue);
    data.append('mobile_number', mobile);

    const config = {
      method: 'POST',
      data: data,
      url,
      headers,
    };
    return axios
      .create({
        baseURL: BASE_URL,
        timeout: 45000,
      })(config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

export const userLogin = (auth_user, auth_pass) => {
  return async dispatch => {
    dispatch(beginFetchData());
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    let url = 'auth';

    var data = new FormData();
    data.append('server_key', SERVER_KEY);
    data.append('auth_user', auth_user);
    data.append('auth_pass', auth_pass);

    const config = {
      method: 'POST',
      data: data,
      url,
      headers,
    };
    return axios
      .create({
        baseURL: BASE_URL,
        timeout: 45000,
      })(config)
      .then(response => {
        dispatch(userAccountLogin(response.data.api_status, response.data));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

export const forgotPasswordR = user_identity => {
  return async dispatch => {
    dispatch(beginFetchData());
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    let url = 'forgot-password';

    var data = new FormData();
    data.append('user_identity', user_identity);

    const config = {
      method: 'POST',
      data: data,
      url,
      headers,
    };
    return axios
      .create({
        baseURL: BASE_URL,
        timeout: 45000,
      })(config)
      .then(response => {
        console.log('data otp response', response.data);
        //dispatch(forgotPass(response.data.api_status, response.data));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

export const savePassword = (user_identity, otp, password) => {
  return async dispatch => {
    dispatch(beginFetchData());
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    let url = 'forgot-password';

    var data = new FormData();
    data.append('user_identity', user_identity);
    data.append('otp', otp);
    data.append('password', password);

    const config = {
      method: 'POST',
      data: data,
      url,
      headers,
    };
    return axios
      .create({
        baseURL: BASE_URL,
        timeout: 45000,
      })(config)
      .then(response => {
        console.log('data otp response', response.data);
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

export const getDistrict = () => {
  console.log('called get District');
  return async dispatch => {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    let url = 'get-district';

    const config = {
      method: 'POST',
      url,
      headers,
    };
    return axios
      .create({
        baseURL: 'https://www.mybuddys.in/api/',
        timeout: 45000,
      })(config)
      .then(response => {
        let responseJson = response.data.stories;
        dispatch(registerDist(responseJson));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

export const filDistrict = value => {
  return dispatch => {
    dispatch(filterDistrict(value));
  };
};

export const pickDistrict = value => {
  return dispatch => {
    dispatch(
      clickDistrict(value, value.district_name + ',' + value.state_name),
    );
  };
};

export const initialStage = () => {
  return dispatch => {
    dispatch({type: INITIAL_STAGE});
  };
};

const beginFetchData = () => ({
  type: ACCOUNT_FETCH_BEGIN,
  payload: {},
});

const dataFetchError = error => ({
  type: ACCOUNT_RESPONSE_ERROR,
  payload: {
    error,
  },
});

const userAccountInputs = (userData = [], userName,userPassword) => ({
  type: USER_ACCOUNT_LOGIN,
  payload: {
    userData,
    userName,
    userPassword
  },
});

const userAccountRegister = (responseCode, userData = [], registerData) => ({
  type: USER_ACCOUNT_REGISTER,
  payload: {
    responseCode,
    userData,
    registerData,
  },
});

const userAccountLogin = (responseCode, userData = []) => ({
  type: USER_ACCOUNT_LOGIN,
  payload: {
    responseCode,
    userData,
  },
});

const accountOTPVerifyResponse = (response = []) => ({
  type: ACCOUNT_OTP_VERIFY,
  payload: {
    response,
  },
});

const accountForgotOTP = user_id => ({
  type: ACCOUNT_FORGOT_PASSWORD,
  payload: {
    user_id,
  },
});

const registerDist = (dist = []) => ({
  type: GET_ALL_DIST,
  payload: {
    dist,
  },
});

const filterDistrict = value => ({
  type: FILTER_DIST,
  payload: {value},
});

const clickDistrict = (value, distName) => ({
  type: SELECT_DISTRICT,
  payload: {value, distName},
});
