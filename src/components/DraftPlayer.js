import React from 'react';
import {TableCell} from 'grommet';

export default (props) => {
    return (
        <React.Fragment>
            <TableCell scope="row">
                <strong>{props.name}</strong>
            </TableCell>
            <TableCell>{props.playerName}</TableCell>
            <TableCell>{props.role}</TableCell>
            <TableCell>{props.rank}</TableCell>
        </React.Fragment>
    );
};