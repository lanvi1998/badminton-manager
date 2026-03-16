const express = require("express")
const router = express.Router()

const User = require("../models/User")

// REGISTER
router.post("/register", async (req,res)=>{

const {name,email,password} = req.body

const newUser = new User({
name,
email,
password
})

await newUser.save()

res.json({
message:"Register success",
user:newUser
})

})

// LOGIN
router.post("/login", async (req,res)=>{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user){
return res.status(400).json({
message:"Email không tồn tại"
})
}

if(user.password !== password){
return res.status(400).json({
message:"Sai mật khẩu"
})
}

res.json({
message:"Login success",
user
})

})

module.exports = router