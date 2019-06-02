import React from 'react';
import {Box, Heading, Button} from 'grommet';

import {Emoji} from 'grommet-icons';

export default() => {
    return (
        <Box direction="column" justify="center" align="center" margin={{
            horizontal: "medium"
        }}>
            <Button><Emoji color="brand" /></Button>
            <p>
                Username
            </p>
        </Box>
    );
};