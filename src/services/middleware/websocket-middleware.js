const websocketMiddleware = (wsUrl, wsActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const {
        connectionStart,
        connectionSuccess,
        getMessages,
        connectionError,
        connectionClose,
      } = wsActions;

      if (type === connectionStart) {
        socket = new WebSocket(wsUrl);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch(connectionSuccess(event.type));
        };

        socket.onerror = (event) => {
          dispatch(connectionError(event));
        };

        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);

          dispatch(getMessages(data));
        };

        socket.onclose = (event) => {
          dispatch(connectionClose(event.type));
        };
      }

      next(action);
    };
  };
};

export default websocketMiddleware;
