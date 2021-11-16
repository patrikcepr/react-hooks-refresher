import React from 'react';

// import logo from './logo.svg';
// import { Button } from '@mui/material';
// import UseStateComponent from './components/UseState';
// import UseReducerComponent from './components/UseReducer';
import UseEffect from './components/UseEffect';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* useEffect case */}
      <UseEffect />
      {/* useState case
      <UseStateComponent /> */}
      {/* useReducerCase
      <UseReducerComponent /> */}
    </div>
  );
}

export default App;
