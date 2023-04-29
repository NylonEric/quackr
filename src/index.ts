import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import socket from './sockets/Socket';

ReactDOM.render(
  <App socket={ socket } />,
  document.getElementById('app')
);