import initialProjects from '../../assets/projects'

export default function(state = initialProjects, action) {
    switch (action.type) {
        case 'INSERT_PROJECT':
            state.push(action.payload)
            console.log('projects', state)
            return state
        case 'EDIT_PROJECT':
            return state
        default:
            return state;
    }
}