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
                        <Heading tag="h2">
                            Current Match
                        </Heading>
                    </Box>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell scope="row">
                                    <strong>Dallas Fuel</strong>
                                </TableCell>
                                <TableCell>3</TableCell>
                                <TableCell>Houston Outlaws</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>7:00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Box margin={{
                        top: 'large'
                    }}>
                        <Button type="submit" primary label="View on Twitch"/>
                    </Box>
                </Box>
                <Box className="next">
                    <Box align="center" alignContent="center">
                        <Heading tag="h2">
                            Next Match
                        </Heading>
                    </Box>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Shanghai Dragons</TableCell>
                                <TableCell>9:00</TableCell>
                                <TableCell>London Spitfire</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Box margin={{
                        top: 'large'
                    }}>
                        <Button className="btn" type="submit" primary label="Tune in now"/>
                    </Box>
                </Box>
                <Box className="past">
                    <Box align="center" alignContent="center">
                        <Heading tag="h2">
                            Past Match
                        </Heading>
                    </Box>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell scope="row">
                                    <strong>New York Excelsior</strong>
                                </TableCell>
                                <TableCell>4</TableCell>
                                <TableCell>Hangshou Spark</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>5:00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Box margin={{
                        top: 'large',
                        bottom: 'large'
                    }}>
                        <Button type="submit" className="btn" primary label="Watch Highlights"/>
                    </Box>
                </Box>
            </Carousel>
        </Box>
    );
};