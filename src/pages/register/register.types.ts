export interface IRegisterData {
  readonly success: boolean;
  readonly accessToken: string;
  readonly refreshToken: string;
  user: {
    readonly email: string;
    readonly name: string;
  };
}
