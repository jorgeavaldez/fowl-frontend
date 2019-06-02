import React from 'react';
import {TableCell, Image, Box} from 'grommet';

import Logo from '../Dallas_Fuel_logo.png';

export default (props) => {
    return (
        <React.Fragment>
            <TableCell scope="row" background = "light-2" >
                <Box
                    height="xxsmall"
                    width="small"
                    pad={{
                    "top": "xsmall",
                    "bottom": "xsmall"
                }}>
                    <Image fit="contain" src={props.pic}/>
                </Box>
            </TableCell>
            <TableCell scope="row">
                <strong>{props.name}</strong>
            </TableCell>
            <TableCell>{props.playerName}</TableCell>
            <TableCell>{props.role}</TableCell>
            <TableCell>{props.damage}</TableCell>
            <TableCell>{props.healing}</TableCell>
            <TableCell>{props.finalBlows}</TableCell>
            <TableCell>{props.eliminations}</TableCell>
            <TableCell>{props.deaths}</TableCell>
            <TableCell>{props.rank}</TableCell>
        </React.Fragment>
    );
};