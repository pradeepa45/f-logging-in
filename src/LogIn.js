import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { Form, Input, Button, Icon, Segment, Message } from 'semantic-ui-react'
import $ from 'jquery';

const InvalidLogin = () =>{
        $('#myForm').addClass("error")
}



function LogIn() {

    const handleSubmit = (e) => {
        if (localStorage.getItem(e.target[0].value)) {
            let userDats = localStorage.getItem(e.target[0].value)
            let user = userDats.split(",");
            // console.log(user);
            let pass = user[2];
            // let fName = user[0];
            // console.log("pass ",pass , "user ",fName);

            if (pass === e.target[1].value) {
                console.log("login successful");
            }
            else {
              InvalidLogin();
            }
        }
        else{
            InvalidLogin();
        }
    }
    return (
        <div className="ui very raised padded text container segment inverted" id="cont">
            <Form inverted onSubmit={(e) => { handleSubmit(e); }} id="myForm">
                <Form.Group widths='equal'>
                    <Form.Field
                        label="Enter Email Id"
                        required
                        type='email'
                        placeholder='User Email'
                        control={Input}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        label="Enter Password"
                        required
                        type='password'
                        placeholder='User Password'
                        control={Input}
                    />
                </Form.Group>
                <Button color='youtube' animated='fade'>
                    <Button.Content visible>
                        <Icon name='arrow right'>
                        </Icon>
                    </Button.Content>
                    <Button.Content hidden>
                        Log In
                    </Button.Content>
                </Button>
                <Message 
                error
                header='Action Forbidden'
                content='Invalid Login'
                />


            </Form>
            <Segment inverted>
                <Link to='/signup'>
                    <Button color='youtube' floated='right' type='submit'>
                        New User? SignUp!
                </Button>
                </Link>
            </Segment>
        </div>
    )
}

export default LogIn;

// https://spread.epub.pub/epub/606018ea118a7848009f45c0