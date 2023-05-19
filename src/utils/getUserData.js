import authentication from "./authentication-api";
import {PROFILE_URL} from "../constants/constants";
import {setIsLoggedIn, setProfileEmail, setProfileName} from "../services/slices/profile-slice";
import updateRefreshToken from "./updateRefreshToken";

const getUserData = (accessToken, dispatch) => {
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
        updateRefreshToken(dispatch);
      } else {
        console.error(err);
      }
    })
}

export default getUserData;
