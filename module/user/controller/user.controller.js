 const userModel = require('../../../DB/Model/userModel');
 
 const signUp = async(req,res)=>{
    try {
        let {name,username,email,password,cpassword,picurl}= req.body
        if(password == cpassword){
            let adduser = await userModel.insertMany({name,username,email,password,picurl})
            res.json({massage:"done",adduser})
        }else{
            res.json({massage:"password not match"})
        }
        
    } catch (error) {
        res.json({massage:"email already register",error})

    }
 }

 const signIn = async(req,res)=>{
    let {email,password}= req.body
    let userFounded = await userModel.findOne({email})
    if(userFounded){
        if(userFounded.password == password){
            res.json({massage:"welcome"})
        }else{
            res.json({massage:"password wrong"})
        }
    }else{
        res.json({massage:"email is not register"})
    }

 }

 const getUsers = async (req,res)=>{
    let getUsers = await userModel.find({})
    res.json({massage:"done",getUsers})
 }

 module.exports = {signUp,signIn,getUsers}