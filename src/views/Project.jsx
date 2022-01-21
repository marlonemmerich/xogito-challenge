import React from 'react'
import { TextField, Button, Container, Grid, Select, MenuItem, InputLabel } from '@mui/material';
import { connect } from 'react-redux'
import Project from './../models/Project'
import { insertProject, editProject } from '../store/actions/project'
import { useParams } from "react-router-dom";

const ProjectView = (props) => {

    let [name, setName] = React.useState('');
    let [description, setDescription] = React.useState('');
    let [userId, setUserId] = React.useState(0);

    const { users, projects } = props

    let { id } = useParams();

    if(id && !userId) {
        let project = props.projects.filter((proj) => (
            proj.id == id
        ))
        console.log('project', project);

        if(project.length) {
            setName(project[0].name)
            setDescription(project[0].description)
            setUserId(project[0].id)
        }
    }

    function formIsValid() {
        return !!name && !!description && !!userId;
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleChangeUser = (event) => {
        console.log('handle', event.target.value)
        setUserId(event.target.value);
    };

    function submitForm() {
        let project = new Project({
            name: name,
            description: description,
            user: {
                id: userId
            },
        })
        if(id) {
            project.id = id;
            props.callEditProject(project)
            return;
        }

        props.callInsertProject(project)
    };

    return (
        <Container>
            {id}
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <form>
                    {
                        !id ?
                        <h1>Creating Project</h1>
                        :
                        <span>
                            <h1>Editing Project</h1>
                            <TextField
                                type="text"
                                label={id}
                                variant="outlined"
                                sx={{ my: 2 }}
                                disabled
                            />
                        </span>
                    }

                    <br />
                    <TextField
                        type="text"
                        label="Name"
                        variant="outlined"
                        value={name}
                        sx={{ pb: 1 }}
                        onChange={handleChangeName}
                    />
                    <br />
                    <TextField
                        type="text"
                        value={description}
                        label="Description"
                        variant="outlined"
                        sx={{ my: 1 }}
                        onChange={handleChangeDescription}
                    />
                    <br />
                    <InputLabel id="user-name">User</InputLabel>
                    <Select
                        labelId="user-name"
                        id="demo-simple-select"
                        value={userId}
                        label="Age"
                        onChange={handleChangeUser}
                    >
                        <MenuItem value='0'>Please, select owner</MenuItem>
                        {users.map( (user) => (
                            <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                        ))}

                    </Select>
                    <br />
                    <br />
                    <Button variant="contained" disabled={!formIsValid()} color="primary" onClick={() => submitForm()}>
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
