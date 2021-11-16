import React, { Fragment, useEffect, useReducer } from 'react';

import { Button, ButtonGroup } from '@mui/material';

import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'MORE':
      return {
        count: state.count + 1,
        data: state.data,
      };
    case 'LESS':
      return {
        count: state.count > 1 ? state.count - 1 : state.count,
        data: state.data,
      };
    case 'ADD_DATA':
      return {
        count: state.count,
        data: action.value,
      };
    default:
      return state;
  }
};

const UseEffect = () => {
  const [state, dispatch] = useReducer(reducer, { data: [], count: 5 });

  const moreHandler = () => {
    dispatch({ type: 'MORE' });
  };
  const lessHandler = () => {
    dispatch({ type: 'LESS' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((response) =>
          dispatch({ type: 'ADD_DATA', value: response.data })
        );
      console.log('API was called');
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [state.count]);

  return (
    <Fragment>
      <ButtonGroup variant='contained'>
        <Button onClick={moreHandler}>+ More</Button>
        <Button onClick={lessHandler}>- Less</Button>
      </ButtonGroup>
      {state.data
        .filter((i, index) => index < state.count)
        .map((item) => {
          return (
            <ul key={item.id}>
              <li>{item.id}</li>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.body}</li>
            </ul>
          );
        })}
    </Fragment>
  );
};

export default UseEffect;
