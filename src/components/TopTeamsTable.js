import React,  { useState, useEffect }  from 'react';
import {Table, TableRow, TableBody} from 'grommet';

import TeamRow from '../components/TeamRow';

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
        for (let i = 0; i < rankingData.length; i++) {
            const currentTeam = rankingData[i];

            console.dir(currentTeam);

            const teamProps = {
                name: currentTeam.competitor.name,
                logo: currentTeam.competitor.logo,
                placement: currentTeam.placement,
                matchWin: currentTeam.records[0].matchWin,
                matchLoss: currentTeam.records[0].matchLoss
            };

            teams.push(
                <TableRow>
                <TeamRow {...teamProps}
                />
              </TableRow>
            ); 
        }
    }

    return (
        <Table>
            <TableBody>
               {teams}
            </TableBody>
        </Table>
    );
};