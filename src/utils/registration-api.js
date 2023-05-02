import checkResponse from "./check-response";
import { getRegistrationTokenURL } from "../constants/constants";

function getRegistrationToken(email, password, name) {
  return fetch(getRegistrationTokenURL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
}

export default getRegistrationToken;
