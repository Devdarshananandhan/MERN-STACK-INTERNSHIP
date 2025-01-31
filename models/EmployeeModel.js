const mongoose = require('mongoose');
const employeeScheema = new mongoose.Schema({
    empid: Number,
    empname: String
});

module.exports = mongoose.model("Emplooyee", employeeScheema);