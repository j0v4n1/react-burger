import authentication from './authentication-api';
import { PROFILE_URL, REFRESH_TOKEN_URL } from '../constants';
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
} from '../services/slices/profile/profile';
import { AppDispatch } from '../services/store/store';

const refreshTokenFromStorage = localStorage.getItem('refreshToken');

const updateToken = (dispatch: AppDispatch) => {
  if (refreshTokenFromStorage) {
    authentication(REFRESH_TOKEN_URL, {
      body: {
        token: JSON.parse(refreshTokenFromStorage),
      },
    })
      .then(({ accessToken, refreshToken }) => {
        if (accessToken) {
          dispatch(updateTokenSuccess());
          localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
          dispatch(setAccessToken(accessToken));
          dispatch(getProfileInformationRequest());
          authentication(PROFILE_URL, {
            method: 'GET',
            headers: {
              authorization: accessToken,
            },
          })
            .then(({ user }) => {
              if (user) {
                dispatch(getProfileInformationSuccess());
                dispatch(setProfileName(user.name));
                dispatch(setProfileEmail(user.email));
                dispatch(setIsLoggedIn(true));
              } else {
                throw new Error();
              }
            })
            .catch((error: string) => {
              dispatch(getProfileInformationFailed());
              console.log(error);
            });
        } else {
          throw new Error();
        }
      })
      .catch((error: string) => {
        dispatch(updateTokenFailed());
        console.log(error);
      });
  }
};

export default updateToken;
