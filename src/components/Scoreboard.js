import React from 'react';
import {
    Box,
    Table,
    TableRow,
    TableCell,
    TableBody,
    Heading
} from 'grommet';

export default(props) => (
    <Box>
        <Box align="center" alignContent="center">
            <Heading>
                Scoreboard
            </Heading>
        </Box>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Team 1</strong>
                    </TableCell>
                    <TableCell>345</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Team 2</strong>
                    </TableCell>
                    <TableCell>450</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Team 3</strong>
                    </TableCell>
                    <TableCell>400</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Box>
);