import axios from 'axios';

export const APPOINTMENT_BEGIN_FETCH = 'APPOINTMENT_BEGIN_FETCH';
export const APPOINTMENT_DATA_FETCH_SUCCESS = 'APPOINTMENT_DATA_FETCH_SUCCESS';
export const APPOINTMENT_DATA_FETCH_ERROR = 'APPOINTMENT_DATA_FETCH_ERROR';

const BASE_URL = 'http://demo.hubnects.com/docdirect/index.php/';

export const getAppointmentList = (token, date) => {
  return async dispatch => {
    dispatch(beginFetchData());
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    };

    let data = {
      // date: date, // This is the body part
    };

    let url = 'api-doctorappointments';

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
        console.log('list', responseJson.data.allappointments);
        dispatch(fetchAppointmentSuccess(responseJson.data.allappointments));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

const beginFetchData = () => ({
  type: APPOINTMENT_BEGIN_FETCH,
  payload: {},
});

const fetchAppointmentSuccess = (data = []) => ({
  type: APPOINTMENT_DATA_FETCH_SUCCESS,
  payload: {
    data,
  },
});

const dataFetchError = error => ({
  type: APPOINTMENT_DATA_FETCH_ERROR,
  payload: {
    error,
  },
});
