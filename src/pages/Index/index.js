import React from 'react';
import { Box } from 'grommet';

export default() => {
    return (
        <Box
            direction='row'
            flex
            overflow={{
            horizontal: 'hidden'
        }}>
            <Box flex align='center' justify='center'>
                app body
            </Box>

            <Box
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'>
                sidebar
            </Box>
        </Box>
    );
};
