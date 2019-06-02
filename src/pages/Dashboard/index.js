import React from 'react';
import { Box, Heading, Button } from 'grommet';
import { Link } from "react-router-dom";

import TopTeamsTable from '../../components/TopTeamsTable';
import Carousel from "../../components/HistoryCarousel";
import Scoreboard from "../../components/Scoreboard.js";

import axios from 'axios';

const myApi = axios.create({
  baseURL: 'https://api.overwatchleague.com',
  timeout: 10000,
  transformRequest: [(data) => JSON.stringify(data)],
  headers: {
      'Content-Type': 'application/json; charset=UTF-8',
  }
});

myApi.get('/')

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
    <Box flex height='100vh' direction='row' overflow='auto'>
      <Box flex align='center' justify='center' overflow='auto' pad={{ vertical: 'medium'}}>
        <DraftCountdown />

        <Carousel />

        <Box
          flex
          align='center'
          justify='center'
          margin={{ vertical: '6rem', bottom: '8rem'}}
        >
          <Heading level="3">
            Top Teams
          </Heading>

          <Box
            margin={{ bottom: 'medium'}}
          >
            <TopTeamsTable />
          </Box>
          
        </Box>
      </Box>

      <Box width='medium' background='light-2' align='center' justify='center'>
        <Scoreboard />
      </Box>
    </Box>
  );
};
