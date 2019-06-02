import React from 'react';
import {Link} from "react-router-dom";
import {Box, Form, FormField, Button} from 'grommet';

export default() => {
    return (
        <Box pad={{
            horizontal: "xlarge",
            top: "medium"
        }}>
            <Form>
                <FormField name="email" label="Email Address"/>
                <FormField name="password" label="Password"/>
                <Box direction="row" pad={{top: "small"}}>
                    <Box margin={{
                        right: "small"
                    }}>
                        <Link to="/Dashboard"><Button type="submit" primary label="Submit"/></Link>
                    </Box>
                    <Link to="/Register">
                        <Button type="submit" primary label="Register"></Button>
                    </Link>
                </Box>
            </Form>
        </Box>
    );
};