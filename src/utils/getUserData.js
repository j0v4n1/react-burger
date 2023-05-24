import authentication from "./authentication-api";
import {PROFILE_URL} from "../constants/constants";
import {setIsLoggedIn, setProfileEmail, setProfileName} from "../services/slices/profile";
import updateToken from "./updateToken";

const getUserData = (accessToken, dispatch) => {
  authentication(PROFILE_URL, {
    method: 'GET',
    headers: {
      authorization: accessToken
    }
  })
    .then(({user}) => {
      dispatch(setProfileName(user.name))
      dispatch(setProfileEmail(user.email))
      dispatch(setIsLoggedIn(true))
    })
    .catch(() => {
      updateToken(dispatch);
    })
}

export default getUserData;
