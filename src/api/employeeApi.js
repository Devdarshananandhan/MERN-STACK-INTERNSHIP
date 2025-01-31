import axios from "axios";
const API_URI = "http://localhost:5500/api/dev/employees";
export const fetchEmployees = async()=>{
    try{
    const response = await axios.get(API_URI);
    return response;
    }
    catch(error){
        console.error("Error fetching employees:", error);
        throw error;
    }
};

export const createEmployee = async(employeeData) =>{
    try{
        const response = await axios.post(API_URI, employeeData);
        return response;
    }
    catch(error){
        console.error("Error creating employee:", error);
        throw error;
    }
};

export const editEmployee = async (id, employeeData) =>{
    try{
        const response = await axios.put(`${API_URI}/${id}`,employeeData);
        return response;
    }
    catch(error){
        console.error("Error editing employee:", error);
        throw error;
    }
};