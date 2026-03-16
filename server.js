const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

// ===== MongoDB connect =====
mongoose.connect("mongodb+srv://lanvihuynh98:Lanvi1905@cluster0.tm10azb.mongodb.net/badminton")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

// ===== Schema =====
const UserSchema = new mongoose.Schema({
    email:String,
    password:String
})

const User = mongoose.model("User",UserSchema)


// ===== API register =====
app.post("/auth/register", async (req,res)=>{

    try{

        const {email,password} = req.body

        const user = new User({
            email,
            password
        })

        await user.save()

        res.json({
            message:"Register success"
        })

    }catch(err){

        res.status(500).json({
            message:"Server error"
        })

    }

})


// ===== API login =====
app.post("/auth/login", async (req,res)=>{

    try{

        const {email,password} = req.body

        const user = await User.findOne({email,password})

        if(!user){
            return res.status(400).json({
                message:"Wrong account"
            })
        }

        res.json({
            message:"Login success"
        })

    }catch(err){

        res.status(500).json({
            message:"Server error"
        })

    }

})


// ===== React build =====
app.use(express.static(path.join(__dirname,"build")))

app.use((req,res)=>{
  res.sendFile(path.join(__dirname,"build","index.html"))
})


// ===== start server =====
app.listen(5000,()=>{
    console.log("Server running port 5000")
})