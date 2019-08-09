import Joi from '@hapi/joi';

const validateSignup = (req,res,next)=>{

const schema={
    email: Joi.string().required(),
    password: Joi.string().required()
}
const {error} = Joi.validate(req.body,schema);
if(error){
    return res.status(400).json({
        status:400,
        error:error.details[0].message

    })

}
next();
}
export default validateSignup;