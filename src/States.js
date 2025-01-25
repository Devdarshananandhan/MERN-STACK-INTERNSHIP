const { useState } = require("react")
export default function Form1()
{
    function formSubmit(formdata)
    {    
        formdata.preventDefault()
       
        console.log('success............,',input.name,input.roll,input.city)
    }
    function updateData(d)
    {
        var variable =d.target.name;
        var value = d.target.value;
        console.log("the vari: ",variable,"the val: ",value)
    }
    const [input,setInput]=useState(
        {
            roll:'',
            name:'',
            city:''
        }
    )
    return(
        <>
        <form onSubmit={formSubmit}>
        Name: <input type="text" name='txtName' onChange={updateData}></input><br/>
Roll: <input type="text" name='txtRoll'  onChange={updateData}></input><br/>
City: <input type="text" name='txtCity'   onChange={updateData}></input><br/>
{/* Name: <input type="text" name='txtName' onChange={(data)=>{setInput({...input,name:data.target.value})}}></input><br/>
Roll: <input type="text" name='txtRoll' onChange={(data)=>{setInput({...input,roll:data.target.value})}}></input><br/>
City: <input type="text" name='txtCity' onChange={(data)=>{setInput({...input,city:data.target.value})}}></input><br/> */}
        <input type="submit" value="signup"></input>
        </form>
        
        </>
    )
}

// const { useState } = require("react");
// 
// export default function Form1() {
//   const [input, setInput] = useState({
    // roll: "",
    // name: "",
    // city: "",
//   });
// 
//   function formSubmit(event) {
    // event.preventDefault(); // Prevent form reload
    // console.log("Success............", input.name, input.roll, input.city);
//   }
// 
//   return (
    // <>
      {/* <form onSubmit={formSubmit}> */}
        {/* Name:{" "} */}
        {/* <input */}
        //   type="text"
        //   onChange={(event) =>
            // setInput({ ...input, name: event.target.value })
        //   }
        // />
        {/* <br /> */}
        {/* Roll:{" "} */}
        {/* <input */}
        //   type="text"
        //   onChange={(event) =>
            // setInput({ ...input, roll: event.target.value })
        //   }
        // />
        {/* <br /> */}
        {/* City:{" "} */}
        {/* <input */}
        //   type="text"
        //   onChange={(event) =>
            // setInput({ ...input, city: event.target.value })
        //   }
        // />
        {/* <br /> */}
        {/* <input type="submit" value="signup" /> */}
      {/* </form> */}
    {/* </> */}
//   );
// }


// import { useState } from "react";
// 
// export default function Parent() {
//   const [tempData, setTempData] = useState({
    // name: "",
    // roll: "",
    // gender: "",
    // city: "",
    // phone: "",
//   });
// 
//   const [data, setData] = useState({
    // name: "",
    // roll: "",
    // gender: "",
    // city: "",
    // phone: "",
//   });
// 
//   const handleChange = (e) => {
    // const { name, value } = e.target;
    // setTempData((prevTempData) => ({
    //   ...prevTempData,
    //   [name]: value, 
    // }));
//   };
// 
//   const handleSubmit = (formSubmit) => {
    // formSubmit.preventDefault();
    // setData(tempData); 
    // console.log("Form submitted successfully:", tempData);
//   };
// 
//   return (
    // <div>
      {/* <form onSubmit={handleSubmit}> */}
        {/* <label>Enter your name: </label> */}
        {/* <input */}
        //   type="text"
        //   name="name"
        //   value={tempData.name}
        //   onChange={handleChange}
        // />
        {/* <br /> */}
{/*  */}
        {/* <label>Enter your Roll No: </label> */}
        {/* <input */}
        //   type="text"
        //   name="roll"
        //   value={tempData.roll}
        //   onChange={handleChange}
        // />
        {/* <br /> */}
{/*  */}
        {/* <label>Enter your Gender: </label> */}
        {/* <input */}
        //   type="text"
        //   name="gender"
        //   value={tempData.gender}
        //   onChange={handleChange}
        // />
        {/* <br /> */}
{/*  */}
        {/* <label>Enter your City: </label> */}
        {/* <input */}
        //   type="text"
        //   name="city"
        //   value={tempData.city}
        //   onChange={handleChange}
        // />
        {/* <br /> */}
{/*  */}
        {/* <label>Enter your Phone No: </label> */}
        {/* <input */}
        //   type="text"
        //   name="phone"
        //   value={tempData.phone}
        //   onChange={handleChange}
        // />
        {/* <br /> */}
{/*  */}
        {/* <input type="submit" value="Submit" /> */}
      {/* </form> */}
{/*  */}
      {/* <h1>Name is {data.name}</h1> */}
      {/* <h1>Roll No is {data.roll}</h1> */}
      {/* <h1>Gender is {data.gender}</h1> */}
      {/* <h1>City is {data.city}</h1> */}
      {/* <h1>Phone No is {data.phone}</h1> */}
    {/* </div> */}
//   );
// }


// // import { useState } from "react"

// // export default function States(){
// //     const updateClr=()=>{
// //         setData( {...data,
// //                clr:'grey'
// //         })
// //     }
     
// //     const updateName=()=>{
// //         setData( {...data,
// //                name:'irfan'
// //         })
// //     }

     

// //      var [data,setData]=useState(
// //         {
// //             clr:'black',
// //             name:'khan'
// //         }
// //      )


     
// //     return(
// //         <>
// //         <h1> my name is {data.name}<br></br> i love {data.clr} color</h1>
// //         <button onClick={()=>{ setData(
// //             {
                
// //                     clr:'purple',
// //                     name:'malik'
                 
// //             }
// //         )}
// //             }>click here!! </button> <br/><br/>

// // <button onClick={()=>{ updateClr() }
// //             }>update the clr!! </button> <br/><br/>


// // <button onClick={()=>{ updateName() }
// //             }>update the name!! </button>
// //         </>
// //     )
// // }


// // import { useEffect, useState } from "react"
// // export default function Demo(){
//     // const[count1,setCount1]=useState(0)
//     // const[count2,setCount2]=useState(0)
//     // useEffect(()=>{
//         // console.log('rendering......')
//     // })
//     // return(
//         // <>
//         {/* <h1>the state val is {count1}</h1> */}
//         {/* <h1>the state val is {count2}</h1> */}
//         {/* <button onClick={()=>{setCount1(count1+1)}}>count1</button> */}
// {/*  */}
// {/*        */}
//         {/* <button onClick={()=>{setCount2(count2+1)}}>count2</button> */}
//         {/* </> */}
// // 
// // 
//     // )
// // }
// // 

// import {useReducer} from "react";

// export default function Demo(){
//     const transactionReducer=(balance,action)=>{
//         switch(action.type)
//         {
//             case'WITHDRAW':
//                 return balance-action.payload
//             case'DEPOSIT':
//                 return balance+action.payload    
             
//         }
//     }
//     const withdraw=(amount)=>{
//         dispatch({type:'WITHDRAW',payload:amount})
//     }
//     const deposit=(amount)=>{
//         dispatch({type:'DEPOSIT',payload:amount})
//     }
//     const[balance,dispatch]=useReducer(transactionReducer,1000)
//     return(
//         <>
//         <h1>the balance val is {balance}</h1>
//         <button onClick={()=>{withdraw(500)}}>withdraw
//         </button>
//         <button onClick={()=>{deposit(1000)}}>deposit
//          </button>
//         </>
//     )
// }



// import { useState } from "react"
// 
// export default function Status(){
    // let [arr,setArr]=useState([1,2,3]);
    // return (<>
    {/* Initial Array is {arr.join(", ")}<br></br> */}
    {/* <button onClick={()=>{ */}
        // setArr(arr.map((d) => d + 10));
    // }}>10 Added to Array </button>
    {/* </>) */}
// }


// const { useState } = require("react")
// export default function Form1()
// {
    // function formSubmit(formdata)
    // {    formdata.preventDefault()
        // console.log('success............')
    // }
    // const[name,setName]=useState("")
    // return(
        // <>
        {/* <form> */}
{/* Name: <input type="text" onChange={(data)=>{setName(data.target.value)}}></input> */}
        {/* <button onClick={formSubmit}>signup</button> */}
        {/* </form> */}
        {/* <h1>the name is: {name}</h1> */}
        {/* </> */}
    // )
// }
// 


// import { useState } from "react";
// 
// export default function C2({ user, sendDataToParent }) {
//   const [stu] = useState("I'm your student");
//   const sendData = () => {
    // sendDataToParent(stu);
//   };
// 
//   return (
    // <>
      {/* <p>This is C2</p> */}
      {/* <p> */}
        {/* C2: The data coming from C1 is <b>{user}</b> */}
      {/* </p> */}
      {/* <button onClick={sendData}>Send Data to Parent</button> */}
{/*     </> */}
//   );
// }



// import {useReducer} from "react";

// export default function Demo(){
//     const transactionReducer=(balance,action)=>{
//         switch(action.type)
//         {
//             case'WITHDRAW':
//                 return balance-action.payload
//             case'DEPOSIT':
//                 return balance+action.payload                
//         }
//     }
//     const withdraw=(amount)=>{
//         dispatch({type:'WITHDRAW',payload:amount})
//     }
//     const deposit=(amount)=>{
//         dispatch({type:'DEPOSIT',payload:amount})
//     }
//     const[balance,dispatch]=useReducer(transactionReducer,1000)
//     return(
//         <>
//         <h1>the balance val is {balance}</h1>
//         <button onClick={()=>{withdraw(500)}}>withdraw
//         </button>
//         <button onClick={()=>{deposit(1000)}}>deposit
//          </button>
//         </>
//     )
// }
//  
// import { useState } from "react";
// 
// export default function C3(){
    // const items=[1,232,4,34];
    // return(
        // <>
        {/* <u1> */}
            {/* { */}
                // items.map((item,i)=>(<li key={i}>{item}</li>))
            // }
        {/* </u1> */}
        {/* </> */}
    // )
// }
// 



 
 
 
 

 
 
 
 
 
 
 
 
 



























































