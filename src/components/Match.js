import React from 'react';
import {Table, TableRow, TableBody, Box, Heading} from 'grommet';

import Player from '../components/Player';

export default() => {
    const players = [];
    const rows = [];

    for (let i = 0; i < 10; i++) {
        players.push(<Player/>);
    }

    for (let j = 0; j < players.length - 1; j += 2) {
        rows.push(
            <TableRow>
                {players[j]}
                {players[j + 1]}
            </TableRow>
        );
    }

    return (
        <Box>
            <Box direction="row" margin="none">
                <Box direction="row" align="center" justify="between" width="100%" pad={{horizontal:"small"}}>
                    <Heading>
                        Team 1
                    </Heading>
                    <Heading>
                        58
                    </Heading>
                </Box>
                <Box direction="row" align="center" justify="between" width="100%" pad={{horizontal:"small"}}>
                    <Heading>
                        Team 2
                    </Heading>
                    <Heading>
                        60
                    </Heading>
                </Box>
            </Box>
            <Box flex>
                <Table>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
};