import axios from 'axios';

export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const GET_SPECIALIZATION_DATA = 'GET_SPECIALIZATION_DATA';
export const SELECT_SPECIALIZATION_DATA = 'SELECT_SPECIALIZATION_DATA';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_BEGIN = 'FETCH_BEGIN';
export const USER_DATA_FETCH_ERROR = 'USER_DATA_FETCH_ERROR';

const BASE_URL = 'http://demo.hubnects.com/docdirect/index.php/';

export const getSpecialization = () => {
  return async dispatch => {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    let url = 'api-getspecialization';

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
        let responseJson = response.data.data;

        const days = responseJson;
        for (let i = 0; i < days.length; i++) {
          days[i].id = i;
          days[i].isSelected = false;
        }
        dispatch(getSpecializationSuccess(responseJson));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

const getSpecializationSuccess = (specialist = []) => ({
  type: GET_SPECIALIZATION_DATA,
  payload: {
    specialist,
  },
});

export const getUserData = token => {
  return async dispatch => {
    dispatch(beginFetch());
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    };

    let url = 'api-getdocprofile';

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
        dispatch(getUserDataSuccess(responseJson));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

const getUserDataSuccess = userData => ({
  type: FETCH_USER_DATA,
  payload: {
    userData,
  },
});

export const updateUserData = (
  token,
  first_name,
  last_name,
  dob,
  gender,
  specialization,
  license_number,
  licenseexpirydate,
  hospital_name,
  address,
  city,
  stateV,
  country,
  pincode,
  about,
  photo,
) => {
  return async dispatch => {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    };

    let url = 'api-updatedocprofile';

    let data = {
      first_name: first_name, // This is the body part
      last_name: last_name,
      dob: dob,
      gender: gender,
      specialization: specialization,
      license_number: license_number,
      licenseexpirydate: licenseexpirydate, // This is the body part
      hospital_name: hospital_name,
      address: address,
      city: city,
      stateV: stateV,
      country: country,
      pincode: pincode, // This is the body part
      about: about,
      photo: photo,
    };

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
        // dispatch(updateUserDataSuccess(responseJson));
        return response.data;
      })
      .catch(error => {
        dispatch(dataFetchError(error));
        return error;
      });
  };
};

const updateUserDataSuccess = (userData = []) => ({
  type: UPDATE_USER_PROFILE,
  payload: {
    userData,
  },
});

export const selectSpecialization = value => {
  return dispatch => {
    dispatch(selectSpecializationValue(value.specialization_id));
  };
};

const selectSpecializationValue = specialization_id => ({
  type: SELECT_SPECIALIZATION_DATA,
  payload: {specialization_id},
});

const dataFetchError = error => ({
  type: USER_DATA_FETCH_ERROR,
  payload: {
    error,
  },
});

const beginFetch = () => ({
  type: FETCH_BEGIN,
  payload: {},
});
