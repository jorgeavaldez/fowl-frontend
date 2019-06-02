import React from 'react';
import {Box, Table, TableRow, TableBody, Heading} from 'grommet';

import DraftPlayer from '../components/DraftPlayer';

export default() => {
    const players = [];

    for (let i = 0; i < 5; i++) {
        players.push(
            <TableRow>
                <DraftPlayer/>
            </TableRow>
        );
    }
    return (
        <Box>
            <Box direction="row" margin="none">
                <Box
                    direction="row"
                    align="center"
                    justify="between"
                    width="100%"
                    pad={{
                    horizontal: "small"
                }}>
                    <Heading>
                        My Draft Team
                    </Heading>
                </Box>
            </Box>
            <Box flex>
                <Table>
                    <TableBody>
                        {players}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
};