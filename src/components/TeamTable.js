import React, { useState, useEffect } from 'react';
import {Table, TableRow, TableCell, TableBody, TableHeader} from 'grommet';

import PlayerRow from '../components/PlayerRow';

import axios from 'axios';

const myApi = axios.create({
    baseURL: 'https://api.overwatchleague.com',
    timeout: 10000,
    transformRequest: [(data) => JSON.stringify(data)],
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    }
});

export default() => {
    const [playerData, setPlayerData] = useState(null);

    useEffect(() => {
        myApi.get('/players?expand=stats').then((response) => {
            console.dir(response);
            if (response.status === 200) {
                return setPlayerData(response.data);
            }
        });
    }, []);


    const players = [];

    if (playerData) {
        for (let i = 0; i < playerData.length; i++) {
            const currentPlayer = playerData[i];

            console.dir(currentPlayer);

            const playerProps = {
                name: `${currentPlayer.givenName} ${currentPlayer.familyName}`,
                playerName: currentPlayer.name,
                role: currentPlayer.attributes.role.toUpperCase(),
                rank:'-',
                totalPoints: '-'
            };

            if(currentPlayer.headshot){
                playerProps.pic = currentPlayer.headshot;
            }
            else{
                playerProps.pic = "";
            }

            if (currentPlayer.stats) {
                playerProps.damage = currentPlayer.stats.stats[2].value.toFixed(2);;
                playerProps.healing = currentPlayer.stats.stats[3].value.toFixed(2);;
                playerProps.finalBlows= currentPlayer.stats.stats[5].value.toFixed(2);;
                playerProps.eliminations= currentPlayer.stats.stats[0].value.toFixed(2);;
                playerProps.deaths= currentPlayer.stats.stats[1].value.toFixed(2);;
            }

            else {  
                playerProps.damage = '-';
                playerProps.healing = '-';
                playerProps.finalBlows= '-';
                playerProps.eliminations= '-';
                playerProps.deaths= '-';
            }

            players.push(
              <TableRow>
                <PlayerRow {...playerProps}
                />
              </TableRow>
            );
        }
    }
    return (
        <Table>
            <TableHeader>
                <TableRow >
                    <TableCell scope="col" border="bottom">
                        Headshot
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