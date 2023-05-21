import authentication from "./authentication-api";
import {PROFILE_URL, REFRESH_TOKEN_URL} from "../constants/constants";
import {setAccessToken, setIsLoggedIn, setProfileEmail, setProfileName} from "../services/slices/profile-slice";

const updateToken = (dispatch) => {
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

export default updateToken;
