import {createSlice} from "@reduxjs/toolkit";

const studentSlice=createSlice({
    name:"Student",
    // initialState:{id:'abc',name:'Aman',coursesEnrolled:[]},
    initialState:{
        _id:'65b7f7003433fcdee7133de4',
        name:"Ajay",
        email:"ajay@gmail.com",        
        coursesEnrolled:[]
    },
    
    reducers:{
        applyCourse:(state,action)=>{
            state.coursesEnrolled=[...state.coursesEnrolled, action.payload];
        },
        markAsCompleted:(state,action)=>{
            state.coursesEnrolled=state.coursesEnrolled.map((course)=>{
                if(course.courseId===action.payload.courseId){
                    return {...course,completed:'Yes',progress:100}
                }else{
                    return course;
                }
            });
        }
    }
})

export const {applyCourse,markAsCompleted}=studentSlice.actions;
export default studentSlice.reducer;