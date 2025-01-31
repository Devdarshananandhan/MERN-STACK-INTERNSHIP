const express = require("express");
const {createEmployee,getEmployees,editEmployee,delEmployee,findEmployee} = require("../controllers/employeeControllers");

const router = express.Router();
router.post("/", createEmployee);
router.get("/", getEmployees);
router.put("/:id",editEmployee);
router.delete("/:id",delEmployee);
router.get("/:id",findEmployee);

module.exports = router;