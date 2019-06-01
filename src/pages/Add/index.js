import React from 'react';
import {Box, Button} from 'grommet';
import {Link} from "react-router-dom";

import TeamTable from "../../components/TeamTable";

export default() => {
    return (
        <Box>
            <Box
                direction="row"
                width="100vw"
                justify="end"
                pad={{
                top: 'medium'
            }}>
                <Box margin={{
                    right: "xlarge"
                }}>
                    <Link to="/Add">
                        <Button primary label="Add Player"/>
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
    );
};