const express=require('express')

const router=express.Router()
require('../db/config')
const{
    loginData,
    registerData,
    services
}= require('../controllers/cont')

router.post('/login', loginData);
router.post('/register', registerData);
router.post('/services', services);



module.exports=router