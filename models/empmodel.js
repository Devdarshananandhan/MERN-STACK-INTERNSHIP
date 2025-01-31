const mongose = require("mongoose");
const empSchema = mongose.Schema({
    empid: Number,
    empname: String
});
const empmd1 = mongose.model("empdata", empSchema);
module.exports = empmd1;