import authentication from './authentication-api';
import { PROFILE_URL, REFRESH_TOKEN_URL } from '../constants/constants';
import {
  getProfileInformationRequest,
  getProfileInformationSuccess,
  getProfileInformationFailed,
  setAccessToken,
  setIsLoggedIn,
  setProfileEmail,
  setProfileName,
  updateTokenSuccess,
  updateTokenFailed,
} from '../services/slices/profile';

const updateToken = (dispatch) => {
  authentication(REFRESH_TOKEN_URL, {
    body: {
      token: JSON.parse(localStorage.getItem('refreshToken')),
    },
  })
    .then((data) => {
      dispatch(updateTokenSuccess());
      localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
      dispatch(setAccessToken(data.accessToken));
      dispatch(getProfileInformationRequest());
      authentication(PROFILE_URL, {
        method: 'GET',
        headers: {
          authorization: data.accessToken,
        },
      })
        .then((data) => {
          dispatch(getProfileInformationSuccess());
          dispatch(setProfileName(data.user.name));
          dispatch(setProfileEmail(data.user.email));
          dispatch(setIsLoggedIn(true));
        })
        .catch((error) => {
          dispatch(getProfileInformationFailed());
          console.log(error);
        });
    })
    .catch((error) => {
      dispatch(updateTokenFailed());
      console.log(error);
    });
};

export default updateToken;
