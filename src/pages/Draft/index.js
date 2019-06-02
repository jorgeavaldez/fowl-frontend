import React from 'react';
import {Box, Button} from 'grommet';
import {Link} from "react-router-dom";

import TeamTable from "../../components/TeamTable";
import DraftOrder from "../../components/DraftOrder";
import DraftTeam from "../../components/MyDraftTeam";

export default() => {
    return (
        <Box
            direction='row'
            flex
            overflow={{
            horizontal: 'hidden'
        }}>
            <Box flex align='center' justify='center'>
                <Box direction="row" width="100%" margin={{veritcal:"medium"}}>
                    <DraftOrder/>
                </Box>
                <Box
                    direction="row"
                    width="100%"
                    justify="end"
                    pad={{
                    top: 'medium'
                }}>
                    <Box margin={{
                        right: "xsmall", 
                        bottom: "medium"
                    }}>
                        <Link to="/Add">
                            <Button primary label="Draft"/>
                        </Link>
                    </Box>
                </Box>
                <Box
                    flex
                    justify="center"
                    align="center"
                    pad={{
                    bottom: 'medium'
                }}>
                    <Box>
                        <TeamTable/>
                    </Box>
                </Box>
            </Box>

            <Box
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'>
                <DraftTeam/>
            </Box>
        </Box>

    );
};