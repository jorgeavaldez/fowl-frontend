import React from 'react';
import {Box, Button} from 'grommet';
import {Link} from "react-router-dom";

import TeamTable from "../../components/TeamTable";

export default() => {

    return (
        <Box direction='row' flex margin={{
            left: 'xlarge'
        }}>
            <Box>
                <Box flex align='center' justify='center'>
                    <TeamTable/>
                </Box>
            </Box>
            <Box flex>
                <Box
                    direction="row"
                    fill={false}
                    margin={{
                    top: 'xlarge'
                }}>
                    <Link pad="small" to="/Add">
                        <Button label="Add New Player"/>
                    </Link>
                    <Button label="Drop Player" onClick={() => {}}/>
                </Box>
            </Box>
        </Box>
    );
};