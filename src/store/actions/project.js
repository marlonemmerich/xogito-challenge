const insertProject = (newProject) => {
    return {
        type: 'INSERT_PROJECT',
        payload: newProject
    }
}

const editProject = (newProject) => {
    return {
        type: 'EDIT_PROJECT',
        payload: newProject
    }
}

export { insertProject, editProject };