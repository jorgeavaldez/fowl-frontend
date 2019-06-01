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
            <Box flex direction="row">
                <Box flex direction="row" alignContent="around">
                    <Heading tag="h5">
                        Team 1
                    </Heading>
                    <Heading tag="h6" align="end">
                        58
                    </Heading>
                </Box>
                <Box flex direction="row" alignContent="around">
                    <Heading tag="h5">
                        Team 2
                    </Heading>
                    <Heading tag="h6" align="end">
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