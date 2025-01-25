import Display from "./Display"

function Datas()
{
    const person={
        empName:'deva',
        city:'cbe'

    }
    let name='Devdarshan'
    let roll=32;
    const ans=`my name is ${name}`;
    return(
        <>
        <h1>my name is  {name}</h1>
        <h1>  {ans} </h1>
       <Display n={name} roll={roll} gender='male' obj={person}/>
        </>
    )
}
export default Datas