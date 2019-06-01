import React from 'react';
import {Box, Heading} from 'grommet';

import RecentActivityTable from '../../components/RecentActivityTable';
import Carousel from "../../components/HistoryCarousel";
import Scoreboard from "../../components/Scoreboard.js";

export default() => {
    return (
        <Box
            direction='row'
            flex
            overflow={{
            horizontal: 'hidden'
        }}>
            <Box flex align='center' justify='center'>
                <Box>
                    <Carousel/>
                </Box>
                <Box>
                    <Heading tag="H2">
                        Recent Matches
                    </Heading>
                </Box>
                <Box>
                    <RecentActivityTable/>
                </Box>
            </Box>

            <Box
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'>
                <Scoreboard/>
            </Box>
        </Box>
    );
};
