const express = require("express")
const mongoose = require("mongoose")
const path = require("path")

const authRoutes = require("./routes/auth")
const User = require("./models/User")

const app = express()

app.use(express.json())

// MongoDB connection
mongoose.connect("mongodb+srv://lanvihuynh98:Lanvi1905@cluster0.tm10azb.mongodb.net/badminton?retryWrites=true&w=majority")
.then(() => {
  console.log("MongoDB connected")
})
.catch((err) => {
  console.log("MongoDB error:", err)
})

// serve React build
app.use(express.static(path.join(__dirname, "build")))

// API routes
app.use("/auth", authRoutes)

// test users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// React router fix
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})