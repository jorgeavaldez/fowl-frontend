import React, { useState }  from 'react';
import {Box, Button} from 'grommet';
import {Link, Redirect} from "react-router-dom";

import MyTeamTable from "../../components/MyTeamTable";

export default(props) => {
    const tableProps = {};

    const [playerToDelete] = useState(null);
    const [deletePlayerClicked, setDeletePlayerClicked] = useState(null);

    const onClickDeletePlayer = (evt) => {
        evt.preventDefault();
        setDeletePlayerClicked(true);
    };

    if (deletePlayerClicked) {
        tableProps.removePlayer = props.location.state.playerToDelete;
        return <Redirect to={{
            pathname: '/MyTeam',
            state: {playerToDelete}
        }} />
    }

    if (props.location.state && props.location.state.playerToAdd) {
        tableProps.newPlayer = props.location.state.playerToAdd;
    }

    // if (props.location.state && props.location.state.deletePlayerClicked) {
    //     tableProps.removePlayer = props.location.state.playerToDelete;
    // }

    return (
        <Box>
            <Box
                direction="row"
                width="100vw"
                justify="end"
                pad={{
                top: 'medium',
                right: "xlarge"
            }}>
                <Box margin={{
                    right: "medium"
                }}>
                    <Link to="/Add">
                        <Button primary label="Add New Player"/>
                    </Link>
                </Box>
                <Button label="Drop Player"  primary 
                            onClick={onClickDeletePlayer}/>
            </Box>
            <Box
                flex
                justify="center"
                align="center"
                pad={{
                bottom: 'medium'
            }}>
                <Box>
                    <MyTeamTable {...tableProps} />
                </Box>
            </Box>
        </Box>
    );
};