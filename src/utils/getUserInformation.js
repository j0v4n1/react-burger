import { REFRESH_TOKEN_URL, PROFILE_URL } from "../constants/constants";
import { setAccessToken, setIsLoggedIn, setProfileEmail, setProfileName } from "../services/slices/profile-slice";
import authentication from "./authentication-api";

const getUserInformation = (dispatch, accessToken, refreshToken = localStorage.getItem('refreshToken')) => {
  if (accessToken) {
    authentication(PROFILE_URL, {
      method: 'GET',
      headers: {
        authorization: accessToken
      }
    })
      .then(data => {
        dispatch(setProfileName(data.user.name))
        dispatch(setProfileEmail(data.user.email))
        dispatch(setIsLoggedIn(true))
      })
      .catch(err => {
        if (err.message === 'jwt expired') {
          authentication(REFRESH_TOKEN_URL, {
            body: {
              token: JSON.parse(localStorage.getItem('refreshToken'))
            }
          })
            .then(data => {
              localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
              dispatch(setAccessToken(data.accessToken))
              authentication(PROFILE_URL, {
                method: 'GET',
                headers: {
                  authorization: data.accessToken
                }
              })
                .then(data => {
                  dispatch(setProfileName(data.user.name))
                  dispatch(setProfileEmail(data.user.email))
                  dispatch(setIsLoggedIn(true))
                })
            })
        } else {
          console.error(err);
        }
      })
  } else {
    if (refreshToken) {
      authentication(REFRESH_TOKEN_URL, {
        body: {
          token: JSON.parse(localStorage.getItem('refreshToken'))
        }
      })
        .then(data => {
          localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
          dispatch(setAccessToken(data.accessToken))
          authentication(PROFILE_URL, {
            method: 'GET',
            headers: {
              authorization: data.accessToken
            }
          })
            .then(data => {
              dispatch(setProfileName(data.user.name))
              dispatch(setProfileEmail(data.user.email))
              dispatch(setIsLoggedIn(true))
            })
        })
    }
    else {
      return
    }
  }
}

export default getUserInformation;
