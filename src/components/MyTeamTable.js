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

export default(props) => {
    const { newPlayer } = props;
    const { removePlayer } = props;


    const [playerData, setPlayerData] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        myApi.get('/players?expand=stats').then((response) => {
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
                role: currentPlayer.attributes.role.toUpperCase(),
                rank:'-',
                totalPoints: '-',
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

            const rowStyles = {};
            if (selectedRow === i) {
                rowStyles.backgroundColor = "#5BAFFF";
            }

            players.push(
              <TableRow key={i} onClick={onClick} style={rowStyles}>
                <PlayerRow {...playerProps}
                />
              </TableRow>
            );
        }
    }

    if (newPlayer || removePlayer) {
      var currentPlayer = {};
      if(newPlayer){
        currentPlayer = newPlayer;
      }else{
        currentPlayer = removePlayer;
      }

      console.dir(currentPlayer);
      const onClick = (evt) => {
          evt.preventDefault();
          setSelectedRow(players.length);
      }

      const playerProps = {
          key: players.length,
          name: `${currentPlayer.givenName} ${currentPlayer.familyName}`,
          playerName: currentPlayer.name,
          role: currentPlayer.attributes.role.toUpperCase(),
          rank:'-',
          totalPoints: '-',
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
      
      if(newPlayer){
      players.push(
        <TableRow key={players.length} onClick={onClick}>
          <PlayerRow {...playerProps}
          />
        </TableRow>
      );
    } else {
      players.delete(
        <TableRow key={players.length} onClick={onClick}>
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