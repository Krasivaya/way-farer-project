import UserModel from '../models/userModel';
import jwt from 'jsonwebtoken'

const Signin = {
  signin(req, res) {
    const { body } = req;

    const user = UserModel.getAllUsers().find(User => User.email === body.email);
    if (!user) {
        return res.status(404).json({
            status:404,
            error: 'Your email is not registered' 
        })
    }

    const correct = user.password === body.password;
    if (!correct){
        return res.status(401).json({
            status:401,
            error: 'Incorrect password'
        })
    }
    else {
        const token = jwt.sign({
            id: user.id,
            is_admin: user.is_admin,
            email: user.email
        },'catchMe')
        res.header('token',token)
        res.status(200).json({
            status: 200,
            success: token
        })
    }
  }
};

export default Signin;
