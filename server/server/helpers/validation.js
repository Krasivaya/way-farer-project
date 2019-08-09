const Joi = require('@hapi/joi');

const validateSignup=(req,res,next)=>{

const schema={
    email: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    password: Joi.string().required()
}
const {error} = Joi.validate(req.body,schema);
if(error){
    return res.status(400).json({
        status:"error",
        error:error.details[0].message,

    })
}
next();
}

export default validateSignup;