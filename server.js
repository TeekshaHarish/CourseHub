const express=require("express");
const app=express();
const connectDB=require("./dbconfig");
const dotenv=require("dotenv");
const studentModel = require("./models/studentModel");
const courseModel=require("./models/courseModel");
dotenv.config();
const cors=require("cors");


connectDB();

app.use(cors());
app.use(express.json());
const courses = [
    {
    id: 1, // Unique identifier for the course
    name: 'Introduction to React Native',
    instructor: 'John Doe', // Name of the course instructor
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld-XreuEVL3w8SfTXgoC3Iyz9QF2KI2WSoA&usqp=CAU', //Link to the course thumbnail
duration: '8 weeks', // Duration of the course
schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
location: 'Online',
prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
syllabus: [
{
week: 1,
topic: 'Introduction to React Native',
content: 'Overview of React Native, setting up your development environment.'
},
{
week: 2,
topic: 'Building Your First App',
content: 'Creating a simple mobile app using React Native components.'
},
// Additional weeks and topics...
],
students: [
],
},
    {
    id: 2, // Unique identifier for the course
    name: 'Introduction to NodeJs',
    instructor: 'John Doe', // Name of the course instructor
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld-XreuEVL3w8SfTXgoC3Iyz9QF2KI2WSoA&usqp=CAU', //Link to the course thumbnail
duration: '8 weeks', // Duration of the course
schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
location: 'Online',
prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
syllabus: [
{
week: 1,
topic: 'Introduction to React Native',
content: 'Overview of React Native, setting up your development environment.'
},
{
week: 2,
topic: 'Building Your First App',
content: 'Creating a simple mobile app using React Native components.'
},
// Additional weeks and topics...
],
students: [
],
}
];

const addCourses=async()=>{
    courses.map(async(course)=>{
        const newCourse=new courseModel(course);
        await newCourse.save();
    })
}
// addCourses();
// app.use(async()=>{
//     const student=new studentModel({name:'Ajay',email:"ajay@gmail.com",coursesEnrolled:[]});
//     await student.save();
//     console.log(student);
// })
app.get("/course/getAllCourses",async(req,res)=>{
    console.log("REQUEST RECIEVED");
    const courseData=await courseModel.find({});
    res.status(200).send({
        data:courseData
    })
})
app.post("/course/filterCourses",async(req,res)=>{
    console.log("REQUEST RECIEVED");
    const {filter}=req.body;
    console.log(req.body.filter);
    // const pattern = `^${filter.name}`; // Replace 'yourPattern' with your desired pattern
    let regexQuery={};
    if(filter.name){
        regexQuery={...regexQuery,name: { $regex: new RegExp(`^${filter.name}`,'i') }};
    }
    if(filter.instructor){
        regexQuery={...regexQuery,instructor: { $regex: new RegExp(`^${filter.instructor}`,'i') }};
    }
    console.log(regexQuery);
    const courseData=await courseModel.find(regexQuery);
    res.status(200).send({
        data:courseData
    })
})
app.post("/course/getCourseDetails",async(req,res)=>{
    const course=await courseModel.findById(req.body.courseId);
    // console.log(course);
    res.status(200).send({
        data:course
    })
})

app.post("/course/addStudent",async(req,res)=>{
    // const {id,name,email}=req.body;
    // console.log("BODY",req.body);
    // console.log(req.body.courseId);
    const course=await courseModel.findById(req.body.courseId);
    // console.log(course);
    course.students.push(req.body.studentId);
    await course.save();
    // console.log(course);
    res.status(200).send({
        data:course
    })
})
app.listen(8080,()=>{
    console.log("Server running on port 8080");
})