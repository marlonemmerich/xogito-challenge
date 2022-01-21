const insertUser = (newUser) => {
    return {
        type: 'INSERT_USER',
        payload: newUser
    }
}

export { insertUser };