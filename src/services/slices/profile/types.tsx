import { TToken } from '../../../types';

export interface ProfileState {
  profileInformationRequest: boolean;
  profileInformationSuccess: boolean;
  profileInformationFailed: boolean;

  updateTokenRequest: boolean;
  updateTokenSuccess: boolean;
  updateTokenFailed: boolean;

  registerRequest: boolean;
  registerSuccess: boolean;
  registerFailed: boolean;

  logOutRequest: boolean;
  logOutSuccess: boolean;
  logOutFailed: boolean;

  logInRequest: boolean;
  logInSuccess: boolean;
  logInFailed: boolean;

  updateProfileInformationRequest: boolean;
  updateProfileInformationSuccess: boolean;
  updateProfileInformationFailed: boolean;

  profileName: null | string;
  profileEmail: null | string;

  isLoggedIn: boolean;

  accessToken: TToken;
}
