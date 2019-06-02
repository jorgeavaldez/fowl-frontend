import React, { useState } from 'react';
import {Link, Redirect} from "react-router-dom";
import {Heading, Box, Form, FormField, Button} from 'grommet';
import axios from 'axios';

export default() => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [errors, setErrors] = useState(null);

    const onChange = (evt) => {
        if (errors) {
            setErrors(null);
        }
    };

    const onSubmit = (evt) => {
        evt.preventDefault();

        const myApi = axios.create({
            baseURL: 'http://localhost:4000/api',
            timeout: 10000,
            withCredentials: true,
            transformRequest: [(data) => JSON.stringify(data)],
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        });

        const { email, password } = evt.value;

        myApi
            .post('/users/register', {
                email,
                password,
            })
            .then((response) => {
                if (response.status !== 200) {
                    return setErrors(response.data);
                }

                return setLoggedIn(true);
            })
            .catch((err) => {
                if (!err || !err.response || !err.response.data || !err.response.status) {
                  return setErrors({
                    errors: {
                      detail: "Whoops looks like you are missing a field."
                    }
                  });
                }

                const { data, status } = err.response;
                if (status !== 200) {
                    return setErrors(data);
                }
            });
    };

    let errorMessage = null;
    if (loggedIn) {
        return <Redirect to="/Dashboard" />;
    }

    else if (errors) {
        errorMessage = <Heading level="6" color="overwatch">*{errors.errors.detail}</Heading>
    }
    return (
        <Box
            pad={{
            horizontal: "xlarge",
            top: "medium"
        }}>
         {errors && errorMessage}
            <Form onSubmit={onSubmit} onChange={onChange}>
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
                        <Button type="submit" primary label="Submit"/>
                    </Box>
                    <Box direction="row" align="center">
                        <p>
                            Already have an account?
                        </p>
                        <Box
                            margin={{
                            left: "small"
                        }}>
                            <Link to="/Login">
                                <Button type="submit" default label="Log in"></Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Form>
        </Box>
    );
};