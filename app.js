const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const course = require("./models/course")

const app = express()
app.use(cors())

app.use(express.json())

mongoose.connect("mongodb+srv://justin:nitsuj21@cluster0.3jf2qw3.mongodb.net/course?retryWrites=true&w=majority&appName=Cluster0")

const {courseModel} = require("./models/course")

app.post("/add",(req,res)=>
{
    // res.send("add page")
    
    let input = req.body

    let course = new courseModel(input)
    // console.log(course)
    course.save()             //save to mongoatlas
    // console.log(input)
    res.json({"status":"success"})
}
)

app.post("/search",(req,res)=>
{
    let input = req.body
    courseModel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    // res.send("Search page")
    
})

app.post("/view",(req,res)=>
{
    courseModel.find().then((data)=>{
        res.json(data)
    }).catch((error)=>{
        res.json(error)
    })
    // res.send("view page")
})

app.listen(8080,()=>{
    console.log("Server")
})