import React from 'react';
import {Table, TableRow, TableCell, TableBody, TableHeader} from 'grommet';

import PlayerRow from '../components/PlayerRow';

export default() => {
    const players = [];

    for (let i = 0; i < 10; i++) {
        players.push(
          <TableRow>
            <PlayerRow/>
          </TableRow>
        );
    }
    return (
        <Table>
            <TableHeader>
                <TableRow >
                    <TableCell scope="col" border="bottom">
                        Team
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        Name
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        Player
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        Role
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        Damage
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        Healing
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        Final Blows
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        Eliminations
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        Deaths
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        Rank
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                        Total Points
                    </TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {players}
            </TableBody>
        </Table>
    );
};