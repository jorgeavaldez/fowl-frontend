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
                    <Heading tag="h2">
                        Current Match
                    </Heading>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell scope="row">
                                    <strong>Dallas Fuel</strong>
                                </TableCell>
                                <TableCell>7:00</TableCell>
                                <TableCell>Houston Outlaws</TableCell>
                                <TableCell>3</TableCell>
                                <TableCell>2</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Button type="submit" class="btn" primary label="View on Twitch"/>
                </Box>
                <Box className="next">
                    <Heading tag="h2">
                        Next Match
                    </Heading>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Shanghai Dragons</TableCell>
                                <TableCell>9:00</TableCell>
                                <TableCell>London Spitfire</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Button className="btn" type="submit" primary label="Tune in now"/>
                </Box>
                <Box className="past">
                    <Heading tag="h2">
                        Past Match
                    </Heading>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell scope="row">
                                    <strong>New York Excelsior</strong>
                                </TableCell>
                                <TableCell>5:00</TableCell>
                                <TableCell>Hangshou Spark</TableCell>
                                <TableCell>4</TableCell>
                                <TableCell>1</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Button type="submit" className="btn" primary label="Watch Highlights"/>
                </Box>
            </Carousel>
        </Box>
    );
};