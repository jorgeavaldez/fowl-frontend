import React from 'react';
import {Link} from "react-router-dom";
import {Form, FormField, Button} from 'grommet';

export default() => {
    return (
        <Form>
            <FormField name="firstName" label="First Name"/>
            <FormField name="lastName" label="Last Name"/>
            <FormField name="username" label="User Name"/>
            <FormField name="password" label="Password"/>
            <i Maybe add favorite team icon and chose a color for some customization/>
            <div className="row">
              <Link to="/Dashboard"><Button type="submit" primary label="Submit"/></Link>
              <p>Already have an account?</p>
              <Link to="/Login"><Button type="submit" primary label="Login"></Button></Link>
            </div>
        </Form>
    );
};