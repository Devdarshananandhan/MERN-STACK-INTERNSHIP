const express = require("express")
const bodyparser = require("body-parser")
const dotenv = require("dotenv")
const connectDB = require("./backend/configs/db");
const core = require("cors")

const employeeRoutes = require("./backend/routes/employee")

dotenv.config()
connectDB();

const app=express();
app.use(core())
app.use(bodyparser.json());
app.use("/api/dev/employees",employeeRoutes);

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
