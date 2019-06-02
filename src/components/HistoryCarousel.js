import React from 'react';
import {
    Box,
    Carousel,
    Button,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Heading
} from 'grommet';

export default() => {
    return (
        <Box height="medium" width="medium">
            <Carousel fill>
                <Box className="present">
                    <Box align="center" alignContent="center">
                        <Heading level="3">
                            Current Match
                        </Heading>
                    </Box>
                    <Box align="center" alignContent="center">
                        <Heading level="6">
                            There is no current matches.
                        </Heading>
                    </Box>
                </Box>
                <Box className="next">
                    <Box align="center" alignContent="center">
                        <Heading level="3">
                            Next Match
                        </Heading>
                    </Box>
                    <Box align="center" alignContent="center">
                        <Heading level="6">
                            There are no upcoming matches.
                        </Heading>
                    </Box>
                </Box>
                <Box className="past">
                    <Box align="center" alignContent="center">
                        <Heading level="3">
                            Past Match
                        </Heading>
                    </Box>
                    <Box align="center" alignContent="center">
                        <Heading level="6">
                            Get caught up with your favorite teams!
                        </Heading>
                    </Box>
                    <Box
                        margin={{
                        top: 'large',
                        bottom: 'large'
                    }}>
                        <Button type="submit" primary label="Watch Highlights"/>
                    </Box>
                </Box>
            </Carousel>
        </Box>
    );
};