import React from 'react';
import { Box, Heading} from 'grommet';

import MyScoreTable from '../components/MyScoreTable';
import OpponentTeamTable from "../components/OpponentTeamTable";

export default() => {

    return (
        <Box direction="column">
            <Box direction="row" margin="none">
                <Box
                    direction="row"
                    align="center"
                    justify="between"
                    width="100%"
                    pad={{
                    horizontal: "small"
                }}>
                    <Heading color="overwatch">
                        Team 1
                    </Heading>
                    <Heading>
                        58
                    </Heading>
                </Box>
                <Box
                    direction="row"
                    align="center"
                    justify="between"
                    width="100%"
                    pad={{
                    horizontal: "small"
                }}>
                    <Heading color="overwatch">
                        Team 2
                    </Heading>
                    <Heading>
                        60
                    </Heading>
                </Box>
            </Box>
            <Box
                direction="row"
                align="center"
                justify="between"
                width="100%"
                margin={{
                    top:"xlarge"
                }}
                pad={{
                horizontal: "small"
            }}>
                <MyScoreTable/>
                <OpponentTeamTable/>
            </Box>

        </Box>
    );
};