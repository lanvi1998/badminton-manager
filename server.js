const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")

const authRoutes = require("./routes/auth")
const User = require("./models/User")

const app = express()

app.use(cors())
app.use(express.json())

// mở folder public
app.use(express.static(path.join(__dirname, "public")))

console.log("Connecting to MongoDB...")

// kết nối MongoDB Atlas
mongoose.connect(
"mongodb+srv://lanvihuynh98:Lanvi1905@cluster0.e5o1wx8.mongodb.net/badminton?retryWrites=true&w=majority"
)
.then(()=>{
    console.log("MongoDB connected")
})
.catch(err=>{
    console.log("MongoDB error:", err)
})

// routes đăng ký đăng nhập
app.use("/auth", authRoutes)

// API lấy danh sách user
app.get("/users", async (req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

// TRANG CHỦ
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"public","login.html"))
})

// chạy server
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("Server running on port " + PORT)
})