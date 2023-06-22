import { DEFAULT_HEADERS } from '../constants/constants';
import checkResponse from './check-response';

interface ServerResponse {
  success: boolean;
  user?: {
    email: string;
    name: string;
  };
  accessToken?: string;
  refreshToken?: string;
  message?: string;
}

type TAuthentication = (url: string, options: { method?: string; headers?: {}; body?: {} }) => Promise<ServerResponse>;

const authentication: TAuthentication = async (url, options = {}) => {
  const { method = 'POST', headers = {}, body } = options;

  const res = await fetch(url, {
    method,
    headers: { ...DEFAULT_HEADERS, ...headers },
    body: body && JSON.stringify(body),
  });
  return await checkResponse(res);
};
export default authentication;
