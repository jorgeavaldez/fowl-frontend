import React from 'react';
import {Box, Button} from 'grommet';

import TeamTable from "../../components/TeamTable";

export default() => {
    return (
        <Box direction='row' flex margin={{ left: 'xlarge'}}>
            <Box>
                <Box flex align='center' justify='center'>
                    <TeamTable/>
                </Box>
            </Box>
            <Box flex>
                <Box direction="row" fill={false} margin={{ top: 'xlarge'}}>
                    <Button label="Add" onClick={() => {}}/>
                </Box>
            </Box>
        </Box>
    );
};