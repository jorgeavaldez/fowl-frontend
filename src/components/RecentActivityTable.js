import React from 'react';
import {Table, TableRow, TableCell, TableBody} from 'grommet';

export default() => {
    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell scope="row">
                        <strong>Dallas Fuel</strong>
                    </TableCell>
                    <TableCell>7:00</TableCell>
                    <TableCell>Houston Outlaws</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                <TableCell scope="row">
                    <strong>New York Excelsior</strong>
                </TableCell>
                <TableCell>9:00</TableCell>
                <TableCell>Hangshou Spark</TableCell>
                <TableCell>4</TableCell>
                <TableCell>1</TableCell>
            </TableRow>
            </TableBody>
        </Table>
    );
};