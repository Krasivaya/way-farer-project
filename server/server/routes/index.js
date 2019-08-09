import express from 'express';
import Signup from '../controllers/signupController';
import Signin from '../controllers/signinController';
import validate from '../helpers/signup_validation';
import validateSignin from '../helpers/signin_validation'

const router = express.Router();


router.post('/auth/signup', validate, Signup.signup);

router.post('/auth/signin', validateSignin, Signin.signin);

export default router;
   