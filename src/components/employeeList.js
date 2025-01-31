import React,{useEffect, useState} from 'react';
import {fetchEmployees} from '../api/employeeApi';
import {createEmployee} from '../api/employeeApi';
// import {editEmployee} from '../api/employeeApi';

const EmployeeList = ()=> {
    const[employees, setEmployees] = useState([]);
    const[empid, setEmpid] = useState("");
    const[empname, setEmpname] = useState("");
    const[editingEmployee, setEditingEmployee] = useState("");

    useEffect(() => {
        console.log("Inside use effect employee....")
        const loadEmployees = async () => {
            console.log("Inside load employee....")
             const {data} = await fetchEmployees();
             console.log("The data is:",data);
             setEmployees(data);
             console.log("The datas is:",data);
        };
        loadEmployees();
    },[]);
    const insertEmployee = async () => {
        const newEmployee = {empid,empname};
        const {data} = await createEmployee(newEmployee);
        setEmployees([...employees,data]);
        setEmpid("");
        setEmpname("");
    };
    const editEmployee =(emp)=>{
        setEditingEmployee(emp);
        setEmpid(emp.empid);
        setEmpname(emp.empname);
    };

    // const updateEmployee = async () =>{
    //     const updatedEmployee = { empid, empname};
    //     const { data } = await editEmployee(editingEmployee._id,updatedEmployee);
    //     setEmployees(employees.map((emp) => (emp._id === editingEmployee._id ? data : emp)));
    //     setEmpid("");
    //     setEmpname("");
    //     setEditingEmployee(null);
    // };
   
    return (
        <div>
            <h1>Employee List</h1>
            {
                editingEmployee ?(
            <div>
                <h2>Edit Employee</h2>
                <input 
                    type="text"
                    placeholder = "Employee ID"
                    value={empid}
                    onChange = {(e)=>setEmpid(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder = "Employee Name"
                    value={empname}
                    onChange = {(e)=>setEmpname(e.target.value)}
                />
                <button onClick={editEmployee}>Edit Employee</button>
            </div>
                ):(
            <div>
                <input 
                    type="text"
                    placeholder = "Employee ID"

                    onChange = {(e)=>setEmpid(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder = "Employee Name"

                    onChange = {(e)=>setEmpname(e.target.value)}
                />
                <button onClick={insertEmployee}>Insert Employee</button>
            </div>)
            }
            <ul>
                {
                    employees.map((emp) =>(
                        <li key={emp._id}>
                            {emp.empid} - {emp.empname}{" "}
                            <button onClick={() => editEmployee(emp)}>Edit</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default EmployeeList;