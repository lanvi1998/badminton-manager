const express = require("express")
const mongoose = require("mongoose")
const path = require("path")

const authRoutes = require("./routes/auth")

const app = express()

app.use(express.json())

// API
app.use("/auth", authRoutes)

// React build
app.use(express.static(path.join(__dirname,"client","build")))

app.get("*",(req,res)=>{
res.sendFile(path.join(__dirname,"client","build","index.html"))
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
console.log("Server running on port " + PORT)
})