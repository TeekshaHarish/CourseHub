const mongoose=require("mongoose");

const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    coursesEnrolled:[
        {
            courseId:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'Course'
            },
            progress:{
                type:Number,
                default:0
            },
            completed:{
                type:Boolean,
                default:false
            }
            // dueDate:{
            //     type:Date
            // }
        }
    ]
})

const studentModel=mongoose.model("Student",studentSchema);
module.exports=studentModel;