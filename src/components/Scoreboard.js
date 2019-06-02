import React,  { useState, useEffect }  from 'react';
import {Table, TableRow, Box, TableBody, Heading} from 'grommet';

import ScoreboardRow from "../components/ScoreboardRow"

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
    const rows = [];
    const [rankingData, setRankingData] = useState(null);

    useEffect(() => {
        myApi.get('/ranking').then((response) => {
            console.dir(response);
            if (response.status === 200) {
                return setRankingData(response.data.content);
            }
        });
    }, []);


    const teams = [];

    if (rankingData) {
        for (let i = 0; i < 5; i++) {
            const currentTeam = rankingData[i];

            console.dir(currentTeam);

            const teamProps = {
                key: i,
                name: currentTeam.competitor.name,
                logo: currentTeam.competitor.logo,
                placement: currentTeam.placement,
                matchWin: currentTeam.records[0].matchWin,
                matchLoss: currentTeam.records[0].matchLoss
            };

            teams.push(    
                <ScoreboardRow {...teamProps}
                />
            ); 
        }
    }

    for (let j = 0; j < teams.length-1; j++) {
        rows.push(
            <TableRow>
                {teams[j]}
            </TableRow>
        );
    }
    return (
        <Box>
            <Box width="100%" align="center" justify="center">
                <Heading level="3">
                    Scoreboard
                </Heading>
            </Box>
            <Box margin={{bottom:"large"}} flex align="center">
                <Table>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
};