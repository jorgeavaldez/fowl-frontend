import React from 'react';
import {Box, Heading} from 'grommet';

import RecentActivityTable from '../../components/RecentActivityTable';
import Carousel from "../../components/HistoryCarousel";

export default() => {
    return (
        <Box
            direction='row'
            flex
            overflow={{
            horizontal: 'hidden'
        }}>
            <Box flex align='center' justify='center'>
                <Carousel/>
                <Heading tag="H2">
                    Recent Matches
                </Heading>
                <RecentActivityTable/>
            </Box>

            <Box
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'>
                sidebar
            </Box>
        </Box>
    );
};
