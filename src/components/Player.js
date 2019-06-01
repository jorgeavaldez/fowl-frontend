import React from 'react';
import {TableCell, Image, Box} from 'grommet';

import Logo from '../Dallas_Fuel_logo.png';

export default() => {
    return (
        <React.Fragment>
            <TableCell scope="row" background = "light-2" >
                <Box
                    height="xxsmall"
                    width="small">
                    <Image fit="contain" src={Logo}/>
                </Box>
            </TableCell>
            <TableCell scope="row">
                <strong>Gi Hyeon Chon</strong>
            </TableCell>
            <TableCell>Ado</TableCell>
            <TableCell>Damage</TableCell>
            <TableCell>1</TableCell>
            <TableCell>78</TableCell>
        </React.Fragment>
    );
};