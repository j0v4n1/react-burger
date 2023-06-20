import { DEFAULT_HEADERS } from '../constants/constants';
import checkResponse from './check-response';

const authentication = (url, options = {}) => {
  const { method = 'POST', headers = {}, body } = options;

  return fetch(url, {
    method,
    headers: { ...DEFAULT_HEADERS, ...headers },
    body: body && JSON.stringify(body),
  }).then((res) => {
    return checkResponse(res);
  });
};
export default authentication;
