import initialUsers from '../../assets/users'

export default function(state = initialUsers, action) {
    switch (action.type) {
        case 'INSERT_USER':
            console.log('action', action)
            state.push(action.payload)
            console.log('INSERTING', state)
            return state
        default:
            return state;
    }
}