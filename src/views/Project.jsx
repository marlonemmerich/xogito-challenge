import React from 'react'
import { TextField, Button, Container, Grid, Select, MenuItem, InputLabel } from '@mui/material';
import { connect } from 'react-redux'
import Project from './../models/Project'
import { insertProject, editProject } from '../store/actions/project'

const ProjectView = (props) => {

    const { users, projects } = props

    function insertProject() {
        console.log('users and project', users, projects)
        const project = new Project({
            id: 20,
            name: 'Project 20',
            description: 'description',
            user: {
                id: 1
            }
        })
        props.callInsertProject(project)
    };

    const project = new Project();

    return (
        <Container>
            {project.owner.id}
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
                        value={project.owner.id}
                        label="Age"
                    >
                        <MenuItem value='0'>Please, select owner</MenuItem>
                        <MenuItem value='1'>User 1</MenuItem>
                        <MenuItem value='2'>User 2</MenuItem>
                        <MenuItem value='3'>User 3</MenuItem>
                    </Select>
                    <br />
                    <br />
                    <Button variant="contained" color="primary" onClick={() => insertProject()}>
                        Save Project
                    </Button>
                </form>
            </Grid>
        </Container>
    )
}

const mapStateToProps = state => {
    return  {
        users: state.users,
        projects: state.projects
    }
};

const mapDispatchToProps = dispatch => {
    return {
        callInsertProject(newProject) {
            const action = insertProject(newProject)
            dispatch(action)
        },
        callEditProject(project) {
            const action = editProject(project)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView)
