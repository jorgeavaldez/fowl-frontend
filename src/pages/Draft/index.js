import React from 'react';
import {Box, Button, Heading} from 'grommet';
import {Link} from "react-router-dom";

import DraftTable from "../../components/DraftTable";
import DraftOrder from "../../components/DraftOrder";
import DraftTeam from "../../components/MyDraftTeam";

const DraftCountdown = (props) => {
    return (
      <Box align='center' justify='center' margin={{ vertical: 'medium', bottom: '2rem'}}>
        <Heading pad="none" margin="none">
          00:00:00
        </Heading>
  
        <Heading level="6" pad="none" margin="none">
          Draft has Ended!
        </Heading>
  
        <Link to="/MyTeam">
            <Button
              type="submit"
              margin={{
                "top": "small"
              }}
              primary
              label="Check out your team!"
            />
        </Link>
      </Box>
    );
  };

export default () => {
    return (
        <Box
            direction='row'
            flex
            overflow={{
            horizontal: 'hidden'
        }}>
            <Box flex align='center' justify='center'>
                <Box direction="row" width="100%" margin={{veritcal:"medium"}}>
                    <DraftOrder/>
                </Box>
                <Box
                    direction="row"
                    width="100%"
                    justify="end"
                    pad={{
                    top: 'medium'
                }}>
                    <Box margin={{
                        right: "xsmall", 
                        bottom: "medium"
                    }}>
                        <Link to="/Add">
                            <Button primary label="Draft"/>
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
                        <DraftTable/>
                    </Box>
                </Box>
            </Box>

            <Box
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'>
                <DraftCountdown />
                <DraftTeam/>
            </Box>
        </Box>

    );
};