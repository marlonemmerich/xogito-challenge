import User from './User'

class Project {
    constructor(project={}) {
        this.id = '';
        this.name = '';
        this.description = '';
        this.owner = new User();

        Object.assign(this, project);
    }
}

export default Project
