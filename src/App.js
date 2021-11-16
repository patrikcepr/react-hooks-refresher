import React, { Fragment, useReducer } from 'react';

import { Button } from '@mui/material';
import logo from './logo.svg';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        visible: state.visible,
        text: state.text,
      };
    case 'VISIBLE':
      return {
        counter: state.counter,
        visible: !state.visible,
        text: state.text === 'SHOW' ? 'HIDE' : 'SHOW',
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    visible: true,
    text: 'HIDE',
    counter: 0,
  });

  // const [isVisible, setIsVisible] = useState({
  //   visible: true,
  //   text: 'HIDE',
  //   counter: 0,
  // });

  const clickHandler = () => {
    dispatch({ type: 'INCREMENT' });
    dispatch({ type: 'VISIBLE' });
    // setIsVisible((prevState) => {
    //   return {
    //     visible: !prevState.visible,
    //     text: prevState.text === 'SHOW' ? 'HIDE' : 'SHOW',
    //     counter: prevState.counter + 1,
    //   };
    // });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        {state.visible === true ? (
          <Fragment>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>
          </Fragment>
        ) : (
          ''
        )}
        <Button
          style={{ marginTop: '45px' }}
          variant='outlined'
          onClick={clickHandler}
        >
          {`${state.text}   ${state.counter}`}
        </Button>
      </header>
    </div>
  );
}

export default App;
