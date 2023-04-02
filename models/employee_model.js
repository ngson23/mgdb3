const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        default:1000
    }
},{
    collection:'employees',
    versionKey:false
})

const EmployeeModel = mongoose.model('employee',EmployeeSchema);

exports.EmployeeModel = EmployeeModel;