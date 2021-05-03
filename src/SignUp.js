import React, { useReducer } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const initialFormData = {
    fName: "",
    lName: "",
    email: "",
    password: ""
};


const reducer = (currentFormState, action) => {
    switch (action.type) {
        case "HANDLE_INPUT":
            return {
                ...currentFormState,
                [action.field]: action.payload,
            };
        default:
            return currentFormState;
    }
}


const SignUp = () => {

    const [formState, dispatch] = useReducer(reducer, initialFormData);
    // console.log(state);
    const handleSubmit = (e) => {
        dispatch({
            type: "HANDLE_INPUT",
            field: e.target.name,
            payload: e.target.value,
        });
        // e.target.value =""
        // console.log(e);
    };

    const clearForm = (e)=>{
        // console.log(e);
        e.target.form.reset();

    }

    const handleUserInfo = (e) => {
        let userInfo = [];
        console.log("fname: ", e.target.form[0].value);
        console.log("lname: ", e.target.form[1].value);
        console.log("email: ", e.target.form[2].value);
        console.log("password: ", e.target.form[3].value);
        if (localStorage.getItem(e.target.form[2].value) == null) {
            userInfo.push(e.target.form[0].value, e.target.form[1].value, e.target.form[3].value);
            localStorage.setItem(e.target.form[2].value, userInfo);
        }
        else {
            alert("There has been an error! There exists an account witht the email address ", e.target.form[2].value, "already..");
        }
        clearForm(e);

    }


    // console.log(formState);

    // const [userInfo, setUserInfo] = useState([]);
    // const [fName, setfName] = useState("");
    // const [lName, setlName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [userId, setUserId] = useState(1);

    // const addUser = (user) => {
    //     let users = [...userInfo, user];
    //     setUserInfo(users);
    //     console.log(users);
    // }


    // const handleSubmit = (event) => {
    //     // event.preventDefault();
    //     // console.log(event);
    //     addUser([fName, lName, email, password]);
    //     setfName("");
    //     setlName("");
    //     setEmail("");
    //     setPassword("");
    //     // alert([fName, lName, email, password]);
    //     // e.preventDefault();
    // }


    return (
        <div>
            <div className="ui raised very padded text container segment black inverted" id="cont">
                <Form inverted>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='First name'
                            required
                            placeholder='First name'
                            onChange={e => { handleSubmit(e) }}
                            name="fName"
                            value={formState.fName}
                        />
                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input}
                            label='Last name'
                            required
                            placeholder='Last name'
                            onChange={e => { handleSubmit(e) }}
                            name="lName"
                            value={formState.lName}
                        />

                    </Form.Group>

                    <Form.Group>
                        <Form.Field
                            width={11}
                            id='form-input-control-error-email'
                            control={Input}
                            label='Email'
                            type='email'
                            required
                            placeholder='Email Address'
                            onChange={e => { handleSubmit(e) }}
                            name="email"
                            value={formState.email}
                        />
                        <Form.Field
                            width={5}
                            id='form-input-control-password'
                            control={Input}
                            type='password'
                            label="Password"
                            placeholder="Password"
                            required
                            onChange={e => { handleSubmit(e) }}
                            name="password"
                            value={formState.password}

                        />
                    </Form.Group>

                    <Button color='youtube' id='form-button-control-public' onClick={(e) => { dispatch({ type: "HANDLE_INPUT" }); handleUserInfo(e) }}>
                        Sign Up
                    </Button>
                    <br />
                    <br />
                    <Link to='/login'>
                        <Button color='youtube' floated='right' >Log In instead</Button>
                    </Link>
                </Form>
            </div>

        </div>
    )
}

export default SignUp;