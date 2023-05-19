import updateRefreshToken from "./updateRefreshToken";
import getUserData from "./getUserData";

const getUserInformation = (dispatch, accessToken, refreshToken) => {
  if (accessToken) {
    getUserData(accessToken, dispatch)
  } else {
    if (refreshToken) {
      updateRefreshToken(dispatch);
    }
  }
}

export default getUserInformation;
