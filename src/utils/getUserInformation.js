import updateToken from "./updateToken";
import getUserData from "./getUserData";
import { getProfileInformationRequest, updateTokenRequest } from "../services/slices/profile";

const getUserInformation = (dispatch, accessToken, refreshToken) => {
  if (accessToken) {
    dispatch(getProfileInformationRequest())
    getUserData(accessToken, dispatch)
  } else {
    if (refreshToken) {
      dispatch(updateTokenRequest())
      updateToken(dispatch);
    }
  }
}

export default getUserInformation;
