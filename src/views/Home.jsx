import React from 'react'
import { TextField, Container, Grid, Button, Table, Paper, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@mui/material';
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import { connect } from 'react-redux'

const HomeComponent = (props) => (
    <Container>
        <Container>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Grid item xs={3}>
                    <TextField sx={{ pt: 2 }} id="outlined-search" label="Search projects" type="search" />
                </Grid>

                <Grid item xs={2}>
                    <Link to="/user">
                        <Button variant="contained">
                            Create new User
                        </Button>
                    </Link>
                </Grid>

                <Grid item xs={3}>
                    <Link to="/project">
                        <Button variant="contained">
                            Create new Project
                        </Button>
                    </Link>
                </Grid>

            </Grid>
        </Container>
        <Container sx={{ pt: 10 }}>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>Project name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.projects.map((project) => (
                    <TableRow
                        key={project.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {project.id}
                        </TableCell>
                        <TableCell>{project.name}</TableCell>
                        <TableCell>{project.description}</TableCell>
                        <TableCell>
                            <Link to={`/project/${project.id}`}>
                                <EditIcon />
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Container>
        
    </Container>

)

const mapStateToProps = state => {
    return  {
        users: state.users,
        projects: state.projects
    }
};

export default connect(mapStateToProps)(HomeComponent)
