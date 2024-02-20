import mongoose from 'mongoose'


const studentSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true
    },
    courses: {
        type: [String]
    },

});



// model
const Student = mongoose.model('Student', studentSchema);
export {Student};


