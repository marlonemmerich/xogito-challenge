class User {
    constructor(user={}) {
        this.id = 0;
        this.name = '';
        this.email = '';

        Object.assign(this, user);
    }
}

export default User
