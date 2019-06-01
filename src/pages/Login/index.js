import React from 'react';
import {Link} from "react-router-dom";
import {Form, FormField, Button} from 'grommet';

export default() => {
    return (
        <Form>
            <FormField name="username" label="User Name"/>
            <FormField name="password" label="Password"/>
            <div class="row">
              <Link to="/Dashboard"><Button type="submit" primary label="Submit"/></Link>
              <Link to="/Register"><Button type="submit" primary label="Register"></Button></Link>
            </div>
        </Form>
    );
};