// const mongodb = require("mongodb");
// const mongoClient = mongodb.MongoClient;

let database;
//let objectId = mongodb.ObjectId;
const mongse = require("mongoose");
async function getDatabase(){
    mongse.connect("mongodb://127.0.0.1:27017/t1")
    .then(()=>{
        console.log("db connected.....");
    })
    .catch(()=>{
        console.log("db errrr...");
    });
    //Correct Mongodb connection string
    // const client = await mongoClient.connect('mongodb://127.0.0.1:27017');
    // database = client.db("t1");
    // if(database){
    //     console.log("Database Connected Successfully");
    // }
    // else{
    //     console.log("Database Connection Failed");
    // }
    // return database;
}
 
module.exports = {getDatabase};