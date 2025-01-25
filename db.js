// const mongo = require('mongodb')
// const mongoclient = mongo.MongoClient
// let object = mongo.ObjectId;

const mongose = require('mongoose')

async function getdbconnection(){
    // const client = await mongoclient.connect('mongodb://127.0.0.1:27017');
    // const database = client.db("deva")
    // if (database){
    //     console.log('Database Connected successfully')
    //     return database
    // }
    // else{
    //     console.log('Database connection failed!')
    //     // return database
    // }
    mongose.connect('mongodb://127.0.0.1:27017/deva')
    .then(() => {
        console.log('Database Connected successfully')
    })
    .catch(()=>{
        console.log('Database connection failed!')
    })
}

module.exports = {getdbconnection}