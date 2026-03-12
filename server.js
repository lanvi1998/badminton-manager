const express = require("express")
const mongoose = require("mongoose")
const path = require("path")

const authRoutes = require("./routes/auth")
const User = require("./models/User")

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

app.use("/auth", authRoutes)

app.get("/users", async (req,res)=>{
  try{
    const users = await User.find()
    res.json(users)
  }catch(err){
    res.status(500).json({error:err.message})
  }
})

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname,"public","login.html"))
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
  console.log("Server running on port " + PORT)
})