const express = require("express")
const router = express.Router()

const Member = require("../models/Member")

router.get("/", async(req,res)=>{

const members = await Member.find()

res.json(members)

})

router.post("/", async(req,res)=>{

const member = new Member(req.body)

await member.save()

res.json(member)

})

router.delete("/:id", async(req,res)=>{

await Member.findByIdAndDelete(req.params.id)

res.json({message:"Deleted"})

})

module.exports = router