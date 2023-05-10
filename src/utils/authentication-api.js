import checkResponse from "./check-response";

const authentication = (url, options = {}) => {
    const {method = "POST", headers = {"Content-type": "application/json"}, body} = options;

    return fetch(url, {
        method,
        headers,
        body: body && JSON.stringify(body),
    }).then((res) => {
        return checkResponse(res);
    });
};

export default authentication;
