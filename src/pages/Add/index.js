import React, { useState } from 'react';
import {Box, Button} from 'grommet';
import {Link, Redirect} from "react-router-dom";

import TeamTable from "../../components/TeamTable";

export default() => {
    const [playerToAdd, setPlayerToAdd] = useState(null);
    const [addPlayerClicked, setAddPlayerClicked] = useState(null);

    const onClickAddPlayer = (evt) => {
        evt.preventDefault();
        setAddPlayerClicked(true);
    };

    if (addPlayerClicked) {
        return <Redirect to={{
            pathname: '/MyTeam',
            state: {playerToAdd}
        }} />
    }

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
                        <Button 
                            primary 
                            onClick={onClickAddPlayer} 
                            label="Add Player"
                        />
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
                    <TeamTable setPlayerToAdd={setPlayerToAdd}/>
                </Box>
            </Box>
        </Box>
    );
};