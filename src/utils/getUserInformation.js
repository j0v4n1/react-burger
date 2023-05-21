import updateToken from "./updateToken";
import getUserData from "./getUserData";

const getUserInformation = (dispatch, accessToken, refreshToken) => {
  if (accessToken) {
    getUserData(accessToken, dispatch)
  } else {
    if (refreshToken) {
      updateToken(dispatch);
    }
  }
}

export default getUserInformation;
