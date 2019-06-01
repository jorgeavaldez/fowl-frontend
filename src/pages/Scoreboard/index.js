import React from 'react';
import {Table, TableRow, Box, TableBody} from 'grommet';

import TeamScore from '../../components/TeamScore';

export default() => {
    const players = [];
    const rows = [];

    for (let i = 0; i < 10; i++) {
        players.push(<TeamScore/>);
    }

    for (let j = 0; j < players.length - 1; j += 2) {
        rows.push(
            <TableRow>
                {players[j]}
                <Box flex direction="row-reverse" align="center" justify="center">
                    {players[j + 1]}
                </Box>
            </TableRow>
        );
    }
    return (
        <Box margin="large" flex align="center" >
            <Table>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>
        </Box>
    );
};