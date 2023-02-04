const route = require("express").Router()
const {signUp,signIn,getUsers} = require('./controller/user.controller');

route.get("/getAllUser",getUsers)

route.post("/signUp",signUp)
route.post("/signIn",signIn)

module.exports= route