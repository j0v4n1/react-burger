import checkResponse from "./check-response";

const authentication = (url, body) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({...body}),
    }).then((res) => {
        return checkResponse(res);
    });
}

export default authentication;
