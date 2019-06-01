import React from 'react';
import {TableCell, Image, Box} from 'grommet';

import Logo from '../Dallas_Fuel_logo.png';

export default() => {
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
                    <Image fit="contain" src={Logo}/>
                </Box>
            </TableCell>
            <TableCell scope="row">
                <strong>Gi Hyeon Chon</strong>
            </TableCell>
            <TableCell>Ado</TableCell>
            <TableCell>Damage</TableCell>
            <TableCell>5,160.24</TableCell>
            <TableCell>7,428.12</TableCell>
            <TableCell>3.50</TableCell>
            <TableCell>12.67</TableCell>
            <TableCell>5.40</TableCell>
            <TableCell>1</TableCell>
            <TableCell>78</TableCell>
        </React.Fragment>
    );
};