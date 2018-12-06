export const RECEIVE_DATA = "RECEIVE_DATA";

export const receiveData = data => ({
  type: RECEIVE_DATA,
  data
});

export const requestData = () => dispatch => {
  const ws = new WebSocket('ws://localhost:7770');
  ws.onopen = function open() {
      ws.send('init');
  };

  ws.onmessage = function incoming(event) {
      var message = null;
      try {
          message = JSON.parse(event.data);
      } catch(e) {
          console.log('malformed message');
      }
      if (message) {
        setTimeout(()=>{
          return dispatch(receiveData(message));
        },1000);
      }
  };
};
