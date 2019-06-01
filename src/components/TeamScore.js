import React from 'react';
import {TableCell, Image, Box} from 'grommet';

import Logo from '../Dallas_Fuel_logo.png';

export default() => {
    return (
        <React.Fragment>
            <TableCell scope="row" background="light-2">
                <Box
                    height="xxsmall"
                    width="small"
                    pad={{
                    "top": "xsmall",
                    "bottom": "xsmall"
                }}>
                    <Image fit="contain" src={Logo}/>
                </Box>
            </TableCell>
            <TableCell scope="row">
                <strong>Team</strong>
            </TableCell>
            <TableCell scope="row">
                350
            </TableCell >
        </React.Fragment>
    );
}