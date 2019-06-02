import React from 'react';
import {Box, Heading} from 'grommet';

import UserIcon from './UserIcon';

export default() => {
    const userIcons = [];

    for (let i = 0; i < 10; i++) {
        userIcons.push(<UserIcon/>);
    }

    return (
        <Box>
            <Box flex direction="row" align="center" justify="center" margin={{horizontal:"small", top: "small"}}>
                <Heading level="5">
                    Draft Order
                </Heading>
                <Box flex direction="row">
                    {userIcons}
                </Box>
            </Box>
        </Box>
    );
};