import React from 'react';
import {TableCell, Image, Box} from 'grommet';


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
                    <Image fit="contain" src={props.logo}/>
                </Box>
            </TableCell>
            <TableCell scope="row">
                <strong>{props.name}</strong>
            </TableCell>
            <TableCell>{props.placement}</TableCell>
            <TableCell>{props.matchWin}</TableCell>
            <TableCell>{props.matchLoss}</TableCell>
        </React.Fragment>
    );
};