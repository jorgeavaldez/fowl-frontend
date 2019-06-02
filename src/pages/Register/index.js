import React from 'react';
import {Link} from "react-router-dom";
import {Box, Form, FormField, Button} from 'grommet';

export default() => {
    return (
        <Box
            pad={{
            horizontal: "xlarge",
            top: "medium"
        }}>
            <Form>
                <FormField name="username" label="Username/ Display Name"/>
                <FormField name="email" label="Email Address"/>
                <FormField name="password" label="Password"/>
                <FormField name="confirmPassword" label="Confirm Password"/>
                <Box
                    direction="row"
                    align="center"
                    pad={{
                    top: "small"
                }}>
                    <Box margin={{
                        right: "medium"
                    }}>
                        <Link to="/Dashboard"><Button type="submit" primary label="Submit"/></Link>
                    </Box>
                    <Box direction="row" align="center">
                        <p>
                            Already have an account?
                        </p>
                        <Box
                            margin={{
                            left: "small"
                        }}>
                            <Link to="/Register">
                                <Button type="submit" default label="Log in"></Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Form>
        </Box>
    );
};