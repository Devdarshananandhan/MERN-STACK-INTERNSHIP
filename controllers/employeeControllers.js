const Employee = require("../models/EmployeeModel")
exports.createEmployee = async(req,res) => {
    try{
        const {empid,empname} = req.body;
        const newEmployee = new Employee({empid,empname});
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    }
    catch(err){
        res.status(500).json({error :err.message});
    }
};

exports.getEmployees = async (req,res) => {
    try{
        const employees = await Employee.find();
        res.status(200).json(employees);
    }catch(err){
        res.status(500).json({error :err.message});
    }
};

exports.editEmployee = async (req,res) => {
    try{
        const e_id = req.params.id;
        const {empid,empname} = req.body;
        const updateEmployee = await Employee.findByIdAndUpdate(e_id,{empid,empname});
        if (updateEmployee){
            res.status(200).json(updateEmployee);
        }
        else{
            res.status(404).json({message : "Employee not found"});
        }
    }catch(err){
        res.status(500).json({error :err.message});
    }
};


exports.delEmployee = async (req,res) =>{
    try{
        const e_id = req.params.id;
        const deleteEmployee = await Employee.findByIdAndDelete(e_id);
        res.status(200).json({message: "Employee deleted successfully"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.findEmployee = async (req,res) =>{
    try{
        const e_id =req.params.id;
        const findEmployee = await Employee.findById(e_id);
        if(findEmployee){
            res.status(200).json(findEmployee);
        }
        else{
            res.status(404).json({message : "Employee not found"});
        }
    }catch(err){
        res.status(500).json({error :err.message});
    }
};