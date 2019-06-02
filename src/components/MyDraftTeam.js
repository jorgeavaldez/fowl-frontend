import React, {useState, useEffect} from 'react';
import {Table, TableRow, TableBody, Box, Heading} from 'grommet';

import DraftPlayer from '../components/DraftPlayer';

import axios from 'axios';

const myApi = axios.create({
    baseURL: 'https://api.overwatchleague.com',
    timeout: 10000,
    transformRequest: [(data) => JSON.stringify(data)],
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
});

export default(props) => {
    const [playerData,
        setPlayerData] = useState(null);
    const [selectedRow,
        setSelectedRow] = useState(null);

    useEffect(() => {
        myApi
            .get('/players?expand=stats')
            .then((response) => {
                if (response.status === 200) {
                    return setPlayerData(response.data);
                }
            });
    }, []);

    const players = [];

    if (playerData) {
        for (let i = 101; i < 111; i++) {
            const currentPlayer = playerData[i];

            console.dir(currentPlayer);
            const onClick = (evt) => {
                evt.preventDefault();
                console.log('here');
                setSelectedRow(i);
            }

            const playerProps = {
                key: i,
                name: `${currentPlayer.givenName} ${currentPlayer.familyName}`,
                playerName: currentPlayer.name,
                role: currentPlayer
                    .attributes
                    .role
                    .toUpperCase(),
                rank: '-'
            };

            const rowStyles = {};
            if (selectedRow === i) {
                rowStyles.backgroundColor = "#5BAFFF";
            }

            players.push(
                <TableRow key={i} onClick={onClick} style={rowStyles}>
                    <DraftPlayer {...playerProps}/>
                </TableRow>
            );
        }
    }

    return (
        <Box>
            <Box width="100%" justify="center" align="center">
                <Heading level="6" color="dark-2">
                    My Draft Picks
                </Heading>
            </Box>
            <Table>
                <TableBody>
                    {players}
                </TableBody>
            </Table>
        </Box>
    );
};