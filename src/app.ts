import React , { useEffect, useState } from 'react';
import TopMenu from './components/TopMenu';
import Board from './components/Board';
import SideBar from './components/SideBar';
const { jobs_shape } = require('./mock_data/mock_data');
import axios from 'axios';

const App = (props) => {
  return (
    <React.Fragment>
      <div id="body">
        Quack World!
      </div>
    </React.Fragment>
  );
};

export default App;
