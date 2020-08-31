import axios from 'axios';

export const APPOINTMENT_TIME_DURATION = 'APPOINTMENT_TIME_DURATION';
export const APPOINTMENT_AVAILABLE_DAY = 'APPOINTMENT_AVAILABLE_DAY';
export const SELECT_AVAILABLE_DAY = 'SELECT_AVAILABLE_DAY';
export const APPOINTMENT_AVAILABLE_TIME = 'APPOINTMENT_AVAILABLE_TIME';
export const GET_DATA_FETCH_ERROR = 'GET_DATA_FETCH_ERROR';
export const APPOINTMENT_UPDATE_SUCCESS = 'FETCH_APPOINTMENT_DATA';
export const FETCH_APPOINTMENT_DATA = 'FETCH_USER_DATA';
export const FETCH_BEGIN = 'FETCH_BEGIN';

const BASE_URL = 'http://demo.hubnects.com/docdirect/index.php/';

export const getAppointmentSettingsData = token => {
  return async dispatch => {
    dispatch(beginFetch());
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    };

    let url = 'api-getslotinformation';

    const config = {
      method: 'POST',
      url,
      headers,
    };
    return axios
      .create({
        baseURL: BASE_URL,
        timeout: 45000,
      })(config)
      .then(response => {
        let responseJson = response.data;
        dispatch(getUserDataSuccess(responseJson.data));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

const getUserDataSuccess = data => ({
  type: FETCH_APPOINTMENT_DATA,
  payload: {
    data,
  },
});

const beginFetch = () => ({
  type: FETCH_BEGIN,
  payload: {},
});

export const getAppointmentDuration = () => {
  return async dispatch => {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    let url = 'api-getduration';

    const config = {
      method: 'POST',
      url,
      headers,
    };
    return axios
      .create({
        baseURL: BASE_URL,
        timeout: 45000,
      })(config)
      .then(response => {
        let responseJson = response.data;
        dispatch(getDurationSuccess(responseJson.data));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

const getDurationSuccess = (duration = []) => ({
  type: APPOINTMENT_TIME_DURATION,
  payload: {
    duration,
  },
});

export const getAvailableDays = () => {
  return async dispatch => {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    let url = 'api-getweekly';

    const config = {
      method: 'POST',
      url,
      headers,
    };
    return axios
      .create({
        baseURL: BASE_URL,
        timeout: 45000,
      })(config)
      .then(response => {
        let responseJson = response.data;

        const days = responseJson;
        for (let i = 0; i < days.length; i++) {
          days[i].id = i;
          days[i].isSelected = false;
        }
        dispatch(getDaysSuccess(responseJson.data));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

const getDaysSuccess = (days = []) => ({
  type: APPOINTMENT_AVAILABLE_DAY,
  payload: {
    days,
  },
});

export const getAppointmentTime = () => {
  return async dispatch => {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    let url = 'api-gettimes';

    const config = {
      method: 'POST',
      url,
      headers,
    };
    return axios
      .create({
        baseURL: BASE_URL,
        timeout: 45000,
      })(config)
      .then(response => {
        let responseJson = response.data;
        dispatch(getTimeSuccess(responseJson.data));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

const getTimeSuccess = (time = []) => ({
  type: APPOINTMENT_AVAILABLE_TIME,
  payload: {
    time,
  },
});

export const selectAvailableDay = value => {
  console.log(value.id);
  return dispatch => {
    dispatch(selectDay(value.id));
  };
};

const selectDay = value => ({
  type: SELECT_AVAILABLE_DAY,
  payload: {value},
});

const dataFetchError = error => ({
  type: GET_DATA_FETCH_ERROR,
  payload: {
    error,
  },
});

export const updateAppointment = (
  consultationfee,
  slot_duration,
  starttime_id,
  endtime_id,
  weekly,
  breakV,
  token,
) => {
  return async dispatch => {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer' + token,
    };

    let data = {
      consultationfee: consultationfee, // This is the body part
      slot_duration: slot_duration,
      starttime_id: starttime_id,
      endtime_id: endtime_id,
      weekly: weekly,
      break: breakV,
    };

    let url = 'api-updatedoctorappointment';

    const config = {
      method: 'POST',
      url,
      headers,
      data,
    };
    return axios
      .create({
        baseURL: BASE_URL,
        timeout: 45000,
      })(config)
      .then(response => {
        let responseJson = response.data;
        // dispatch(updateAppointmentSuccess(responseJson.data));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

const updateAppointmentSuccess = (duration = []) => ({
  type: APPOINTMENT_UPDATE_SUCCESS,
  payload: {
    duration,
  },
});
