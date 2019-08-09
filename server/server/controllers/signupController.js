import UserModel from '../models/userModel'
import  validateSignup  from '../helpers/validation'
import Joi from '@hapi/joi'

const Signup = {
    signup(req, res) {
        const { body } = req;
        if (UserModel.getAllUsers().find(user => user.email === body.email)) {
            res.status(403).json({ status: 403, error: 'This email address is already in use!' });
        }
        const newUser = UserModel.createUser(body);
        return res.status(201).json({ status: 201, data: newUser });
    }
};

export default Signup;