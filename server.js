const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")

const authRoutes = require("./routes/auth")
const User = require("./models/User")

const app = express()

app.use(cors())
app.use(express.json())

// React build
app.use(express.static(path.join(__dirname, "client/build")))

console.log("Connecting to MongoDB...")

mongoose.connect(
"mongodb+srv://lanvihuynh98:Lanvi1905@cluster0.e5o1wx8.mongodb.net/badminton?retryWrites=true&w=majority"
)
.then(()=>{
    console.log("MongoDB connected")
})
.catch(err=>{
    console.log("MongoDB error:", err)
})

app.use("/auth", authRoutes)

app.get("/users", async (req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

// React routes
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","build","index.html"))
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("Server running on port " + PORT)
})