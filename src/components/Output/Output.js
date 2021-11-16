import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import UserContext from '../../store/user-context';

const Output = () => {
  const { user } = useContext(UserContext);

  return (
    <Typography style={{ marginTop: 30, color: 'white' }} variant='h3'>
      User: {user}
    </Typography>
  );
};

export default Output;
