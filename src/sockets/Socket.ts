import io from "socket.io-client";
const ENDPOINT = 'http://localhost:3000';

const connectionOptions = {
  "transports": ["websocket"],
};
const socketConnection = io(ENDPOINT, connectionOptions);
export default socketConnection;