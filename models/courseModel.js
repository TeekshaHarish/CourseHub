const mongoose=require("mongoose");

const courseSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    enrollmentStatus:{
        type:String,
        enum:['Open','Closed','In Progress'],
        required:true,
        default:'Open'
    },
    thumbnail:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    schedule:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    prerequisites:[{
        type:String,
        required:true
    }],
    syllabus:[{
        week:Number,
        topic:String,
        content:String
    }],
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Student'
        }
    ]
})

const courseModel=mongoose.model("Course",courseSchema);
module.exports=courseModel;