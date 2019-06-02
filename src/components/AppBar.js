import React from 'react';
import { Box } from 'grommet';

export default (props) => (
  <Box
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{
      left: 'small',
      right: 'small',
      vertical: 'small'
    }}
    elevation='medium'
    style={{
      zIndex: '1'
    }}
    {...props}
  />
);
 