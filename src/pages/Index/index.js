import React from 'react';
import {Button, Box, Image, Heading} from 'grommet';
import {Link} from "react-router-dom";

import Image1 from '../../pic1.png';
import Image2 from '../../Vector_Game.png';
import Image3 from '../../pic3.png';
import Logo from "../../overwatchlogo.png"

export default() => {
    return (
        <Box>
            <Box width="100vw" direction="row" margin={{bottom:"large"}} pad={{vertical:"xxlarge"}} align="center" justify="center" style={{background:"rgba(60, 60, 60, 0.4)", minHeight: "30rem"}}>
               
            <Box
                     align='center' justify='center'
                     height="medium"
                     width="medium"
                     pad={{
                     "top": "medium",
                     "bottom": "xlarge"
                }}>
                    <Image fit="contain"  pad={{top:"medium"}} src={Logo} style={{zIndex: "-100", opacity: "0.5"}}/>
                    </Box>
                <Box align="center" justify="center" style={{zIndex:"100", color:"white"}}>
                    <Heading>
                        Fantasy Overwatch League
                    </Heading>
                    <Heading level="4">
                        Participate in the World's Best Fantasy Overwatch League 
                    </Heading>
                    <Link to="/Register" margin={{bottom:"large"}} >
                        <Button type="submit" primary label="Register"></Button>
                    </Link>
                </Box>
            </Box>
            <Box width="100vw" align="center" justify="center" margin={{vertical:"xlarge"}}>
                <Heading color="overwatch">
                    Assemble the Greatest Overwatch eSports Team
                </Heading>
            </Box>
            <Box flex width="100vw" direction="row" align='center' justify='center' margin={{vertical:"xlarge"}}>
                <Box
                    align='center' justify='center'
                    height="medium"
                    width="medium"
                    pad={{
                    "top": "medium",
                    "bottom": "xlarge"
                }}>
                    <Image fit="contain" src={Image1}/>
                    <Heading level="4" color="dark-2">
                        Compete to Win Prizes
                    </Heading>
                </Box>
                <Box
                     align='center' justify='center'
                     height="medium"
                     width="medium"
                     pad={{
                     "top": "medium",
                     "bottom": "xlarge"
                }}>
                    <Image fit="contain" src={Image2}/>
                    <Heading level="4" color="dark-2">
                        Real-Time Scoring Updates
                    </Heading>
                </Box>
                <Box
                     align='center' justify='center'
                     height="medium"
                     width="medium"
                     pad={{
                     "top": "medium",
                     "bottom": "xlarge"
                }}>
                    <Image fit="contain" src={Image3}/>
                    <Heading level="4" color="dark-2">
                        Pick your favorite Players
                    </Heading>
                </Box>
            </Box>
        </Box>
    );
};
