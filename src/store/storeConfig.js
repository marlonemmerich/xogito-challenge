import { createStore, combineReducers } from 'redux'

import userReducer from './reducers/user'
import projectReducer from './reducers/project'

const reducers = combineReducers({
    users: userReducer,
    projects: projectReducer
});

function storeConfig() {
    return createStore(
        reducers
    )
}

export default storeConfig