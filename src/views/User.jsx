import React from 'react'
import User from '../models/User'
import { connect } from 'react-redux'
import { insertUser } from '../store/actions/user'
import { useNavigate } from "react-router-dom";
import SnackbarComponent from '../components/SnackBar'
import SnackbarHOC from '../hoc/SnackbarHOC'

import { TextField, Button, Container, Grid } from '@mui/material';

const UserView = props => {
    const [open, setOpen] = React.useState(false);

    const { users } = props
    const navigate = useNavigate();
    const SnackbarHOCComponent = SnackbarHOC(SnackbarComponent)
    const messageSnackBar = "User added succesfully! Redirecting...";

    let [name, setName] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [isUniqueEmail, setIsUniqueEmail] = React.useState(true);

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeEmail = (event) => {
        checkIsUniqueEmail(event.target.value)
        setEmail(event.target.value);
    };

    function isFormValid() {
        return !!isvalidEmail(email) && isUniqueEmail && !!name;
    }

    function isvalidEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function checkIsUniqueEmail(email) {
        let a = !props.users.some((user) => {
            return user.email == email
        })
        setIsUniqueEmail(a);
    }

    function sendForm() {
        let user = new User();
        user.name = name;
        user.email = email;

        props.callInsertUser(user)
        setOpen(true);

        window.setTimeout(() => {
            setOpen(false);
            navigate('/');
        }, 2000)
    }

    return (
        <Container>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <form>
                    <TextField
                        type="text"
                        label="Name"
                        variant="outlined"
                        sx={{ my: 2 }}
                        value={name}
                        onChange={handleChangeName}
                        />
                        <br />
                    <TextField
                        type="text"
                        label="E-mail"
                        variant="outlined"
                        sx={{ pb: 2 }}
                        value={email}
                        onChange={handleChangeEmail}
                        error={!isUniqueEmail}
                        helperText={isUniqueEmail ? '' : 'Needs to be unique'}
                    />
                    <br />
                    <Button disabled={!isFormValid()} variant="contained" color="primary" onClick={() => sendForm()}>
                        Save User
                    </Button>
                </form>
            </Grid>
            <SnackbarHOCComponent open={open} message={messageSnackBar}/>
        </Container>
    )
}

const mapStateToProps = state => {
    return  {
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        callInsertUser(newUser) {
            const action = insertUser(newUser)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView)
