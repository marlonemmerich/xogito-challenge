import initialUsers from '../../assets/users'

export default function(state = initialUsers, action) {
    switch (action.type) {
        case 'INSERT_USER':
            let id = 0;
            state.forEach(usr => {
                id = usr.id > id ? usr.id : id;
            });
            id++;
            action.payload.id = id;
            state.push(action.payload)
            console.log('users', state)
            return state
        default:
            return state;
    }
}