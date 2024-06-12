const mongoose = require("mongoose")

const schema = mongoose.Schema(
    {
        "courseTitle":String,
        "courseDescription":String,
        "courseDate":String,
        "courseDuration":String,
        "courseVenue":String,
        "trainerName":String
    }
)

let  courseModel = mongoose.model("courses",schema)

module.exports = {courseModel}