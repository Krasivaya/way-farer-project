class User { 
    constructor() {
        this.users = []
    };
    createUser(data) {
        const newUser = {
            id: this.users.length + 1,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            password: data.password,
            is_admin: data.is_admin || false,
        };
        this.users.push(newUser);
        return newUser;
    }
    getAllUsers() {
        return this.users;
    }
    getOneUser() {
        return this.users.find(user => user.id === id);
    }
};

export default new User();