import React from 'react'
import { TextField, Button, Container, Grid, Select, MenuItem, InputLabel } from '@mui/material';



const Project = () => {

    const [user, setUser] = React.useState('');

    const handleChange = (event) => {
        setUser(event.target.value);
    };

    return (
        <Container>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <form>
                    <TextField
                        type="text"
                        label="ID"
                        variant="outlined"
                        sx={{ my: 2 }}
                        disabled
                    />
                    <br />
                    <TextField
                        type="text"
                        label="Name"
                        variant="outlined"
                        sx={{ pb: 1 }}
                    />
                    <br />
                    <TextField
                        type="text"
                        label="Description"
                        variant="outlined"
                        sx={{ my: 1 }}
                    />
                    <br />
                    <InputLabel id="user-name">User</InputLabel>
                    <Select
                        labelId="user-name"
                        id="demo-simple-select"
                        value={user}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>User 1</MenuItem>
                        <MenuItem value={2}>User 2</MenuItem>
                        <MenuItem value={3}>User 3</MenuItem>
                    </Select>
                    <br />
                    <br />
                    <Button variant="contained" color="primary">
                        Save Project
                    </Button>
                </form>
            </Grid>
        </Container>
    )
}

export default Project
