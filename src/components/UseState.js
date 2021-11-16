import React, { Fragment, useState } from 'react';

import { Button } from '@mui/material';
import logo from '../logo.svg';
import '../App.css';

function UseStateComponent() {
  const [isVisible, setIsVisible] = useState({
    visible: true,
    text: 'HIDE',
    counter: 0,
  });

  const clickHandler = () => {
    setIsVisible((prevState) => {
      return {
        visible: !prevState.visible,
        text: prevState.text === 'SHOW' ? 'HIDE' : 'SHOW',
        counter: prevState.counter + 1,
      };
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        {isVisible.visible === true ? (
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
          {`${isVisible.text}   ${isVisible.counter}`}
        </Button>
      </header>
    </div>
  );
}

export default UseStateComponent;
