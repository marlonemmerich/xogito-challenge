import React from 'react'
import User from '../models/User'
import { connect } from 'react-redux'
import { insertUser } from '../store/actions/user'

import { TextField, Button, Container, Grid } from '@mui/material';

const UserView = props => {
    const { users } = props

    function insertUser() {
        let user = new User({
            id: 6,
            name: 'User 6',
            email: 'email@email.com'
        });
        props.callInsertUser(user);
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
                        />
                        <br />
                    <TextField
                        type="text"
                        label="E-mail"
                        variant="outlined"
                        sx={{ pb: 2 }}
                    />
                    <br />
                    <Button variant="contained" color="primary" onClick={() => insertUser()}>
                        Save User
                    </Button>
                </form>
            </Grid>
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
