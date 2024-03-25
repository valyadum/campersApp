import React from 'react';
import { Text } from './Description.styled';
import { Typography } from '@mui/material';

function Description({ text }) {
  return (
    <Text>
      <Typography noWrap style={{width:520}}>
       {text}
      </Typography>
    </Text>
  );
}

export default Description;
