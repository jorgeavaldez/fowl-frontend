import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {DropButton, Box, Button, Heading, Grommet} from 'grommet';
import {Home, Login, Group} from 'grommet-icons';
import AppBar from './components/AppBar';

import IndexPage from './pages/Index';
import DraftPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';
import MyTeamPage from './pages/Team';
import ScoreboardPage from './pages/Scoreboard';
import MatchPage from './pages/Match';
import AddPage from './pages/Add';


const theme = {
    global: {
        colors: {
            brand: '#228BE6'
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px'
        }
    }
};

const Routes = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={IndexPage}/>
            <Route path="/Login" exact component={DraftPage}/>
            <Route path="/Register" exact component={RegisterPage}/>
            <Route path="/Dashboard" exact component={DashboardPage}/>
            <Route path="/MyTeam" exact component={MyTeamPage}/>
            <Route path="/Scoreboard" exact component={ScoreboardPage}/>
            <Route path="/Match" exact component={MatchPage}/>
            <Route path="/Add" exact component={AddPage}/>
        </React.Fragment>
    );
};

const Nav = () => {
    return (
        <Box direction="row" pad="none">
            <Link pad="small" to="/">
                <Button icon={< Home />}></Button>
            </Link>
            <Link pad="small" to="/login">
                <Button icon={< Login />}></Button>
            </Link>
            <DropButton
                icon={< Group />}
                dropAlign={{
                top: 'bottom',
                right: 'right'
                }}
                dropContent={<Box pad='small' background = "light-2" > 
                  <Link pad={{
                        top: 'small'
                    }}  to = "/MyTeam" > My Team </Link> 
                  <Link pad={{
                        top: 'small'
                    }} to="/Scoreboard"> Scoreboard </Link> 
                     <Link pad={{
                        top: 'small'
                    }} to="/Match"> My Current Match </Link> 
                  </Box>}
            />
        </Box>
    );
};

function App() {
    return (
        <Grommet theme={theme} full>
            <Box fill>
                <Router>
                    <AppBar>
                        <Heading level='3' margin='none'>My App</Heading>
                        <Nav/>
                    </AppBar>
                    <Routes/>
                </Router>
            </Box>
        </Grommet>
    );
}

export default App;
