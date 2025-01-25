function Display(values) 
{
  
    const {n, roll,gender, obj}=values
    const {empName,city}=obj
    return (
        <>
        <h1>im coming from Datas.js {n} {roll} {gender} </h1>
        <h2>{empName}, {city}</h2>
        <h3>this is from display</h3>
        <h1>simply waste</h1>
        </>
    )
}
export default Display