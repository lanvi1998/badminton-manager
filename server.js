const express = require("express")
const mongoose = require("mongoose")
const path = require("path")

const authRoutes = require("./routes/auth")
const User = require("./models/User")

const app = express()

app.use(express.json())

// CONNECT MONGODB
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.use("/auth", authRoutes)

// React build
app.use(express.static(path.join(__dirname,"build")))

app.get("*",(req,res)=>{
res.sendFile(path.join(__dirname,"build","index.html"))
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
console.log("Server running on port "+PORT)
})