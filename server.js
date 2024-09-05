const express=require("express");
const app=express();
const connectDB=require("./dbconfig");
const dotenv=require("dotenv");
const studentModel = require("./models/studentModel");
const courseModel=require("./models/courseModel");
const courses=require("./coursesSeed");
dotenv.config();
const cors=require("cors");


connectDB();

app.use(cors());
app.use(express.json());

// const addCourses=async()=>{
//     courses.map(async(course)=>{
//         const newCourse=new courseModel(course);
//         await newCourse.save();
//     })
// }
// addCourses();
// app.use(async()=>{
//     const student=new studentModel({name:'Ajay',email:"ajay@gmail.com",coursesEnrolled:[]});
//     await student.save();
//     console.log(student);
// })
app.get("/course/getAllCourses",async(req,res)=>{
    // console.log("REQUEST RECIEVED");
    const courseData=await courseModel.find({});
    res.status(200).send({
        data:courseData
    })
})
app.post("/course/filterCourses",async(req,res)=>{
    const {filter}=req.body;
    // console.log(req.body.filter);
    // const pattern = `^${filter.name}`; // Replace 'yourPattern' with your desired pattern
    let regexQuery={};
    if(filter.name){
        regexQuery={...regexQuery,name: { $regex: new RegExp(`${filter.name}`,'i') }};
    }
    if(filter.instructor){
        regexQuery={...regexQuery,instructor: { $regex: new RegExp(`${filter.instructor}`,'i') }};
    }
    // console.log(regexQuery);
    const courseData=await courseModel.find(regexQuery);
    res.status(200).send({
        data:courseData
    })
})
app.post("/course/getCourseDetails",async(req,res)=>{
    const course=await courseModel.findById(req.body.courseId);
    res.status(200).send({
        data:course
    })
})

app.post("/course/addStudent",async(req,res)=>{
    const course=await courseModel.findById(req.body.courseId);
    course.students.push(req.body.studentId);
    await course.save();
    res.status(200).send({
        data:course
    })
})
app.listen(8080,()=>{
    console.log("Server running on port 8080");
})