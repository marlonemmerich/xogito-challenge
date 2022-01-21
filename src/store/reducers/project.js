import initialProjects from '../../assets/projects'

export default function(state = initialProjects, action) {
    switch (action.type) {
        case 'INSERT_PROJECT':
            let id = 0;
            state.forEach(proj => {
                id = proj.id > id ? proj.id : id;
            });
            id++;
            action.payload.id = id;
            state.push(action.payload)
            console.log('projects', state)
            return state
        case 'EDIT_PROJECT':
            console.log('action.payload.id', action.payload.id)
            let index = state.findIndex((proj) => (
                proj.id == action.payload.id
            ))

            if(index != -1) {
                state[index] = action.payload
            }
            console.log(state)
            return state
        default:
            return state;
    }
}