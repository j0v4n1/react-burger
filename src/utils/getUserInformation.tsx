import updateToken from './updateToken';
import getUserData from './getUserData';
import { getProfileInformationRequest, updateTokenRequest } from '../services/slices/profile/profile';
import { TToken } from '../types';
import { AppDispatch } from '../services/store/store';

const getUserInformation = (dispatch: AppDispatch, accessToken: TToken, refreshToken: TToken): void => {
  if (accessToken) {
    dispatch(getProfileInformationRequest());
    getUserData(accessToken, dispatch);
  } else {
    if (refreshToken) {
      dispatch(updateTokenRequest());
      updateToken(dispatch);
    }
  }
};

export default getUserInformation;
