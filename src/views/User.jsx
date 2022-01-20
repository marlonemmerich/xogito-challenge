import React from 'react'

import { TextField, Button, Container, Grid } from '@mui/material';

const User = () => (
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
                <Button variant="contained" color="primary">
                    Save User
                </Button>
            </form>
        </Grid>
    </Container>
)

export default User
