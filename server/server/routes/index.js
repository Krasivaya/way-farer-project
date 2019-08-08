import express from 'express';
import Signup from '../controllers/signupController';
import validate from '../helpers/validation'

const router = express.Router();


router.post('/auth/signup', validate, Signup.signup);

export default router;
   