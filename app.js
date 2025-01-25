const express=require('express');
const bodyparser = require('body-parser')
const hand=require('express-handlebars');
const datab = require('./db');
const app=express();
const obj = datab.object
const empmod = require('./models/empmodel')

app.engine('hbs',hand.engine({layoutsDir: 'viewsfold/',defaultLayout: 'maincopy',extname: 'hbs'}));

app.set('view engine','hbs')
app.set('views','viewsfold')
app.use(bodyparser.urlencoded({extended: true}))

app.get('/', async (req,res) =>{
    let editid,edit_emp,editid1,datas;
    let database = await datab.getdbconnection();
  //  const collection = database.collection('collcreatenew')
    // await collection.insertOne({name:'Devdarshan'}) --insert and create
    // const cursor = collection.find({})
    // let datas = await cursor.toArray();
    // const msg = req.query.status==1 ? "Data inserted successfully" : "";
    let msg="";
    if (req.query.edit_id){
        editid=req.query.edit_id;
        edit_emp = await collection.findOne({_id: new obj(editid)})
    }

    if (req.query.delete_id){
        editid1=req.query.delete_id;
        await collection.deleteOne({_id: new obj(editid1)})
    }
    if (req.query.status==1){
        msg='Data Inserted Successfully!'
    }
    else if (req.query.status==2){
        msg='Data Updated Successfully!'
    }
    else if (req.query.status==3){
        msg='Data Deleted Successfully!'
    }
    console.log("Data is ",datas)
    res.render("maincopy",{msg,datas,editid,edit_emp});
});

app.post('/empinfo', async(req,res) =>{
    // const database=await datab.getdbconnection();
    // const collection = database.collection('collcreatenew');
    const employee={empid: req.body.eid, empname: req.body.ename};
    // await collection.insertOne(employee);
    const newmodel = new empmod(employee);
    await newmodel.save();
    res.redirect('/?status=1');
})

app.post('/updateinfo/:e_id', async(req,res)=>{
    const database=await datab.getdbconnection();
    const collection = database.collection('collcreatenew');
    const employee={empid: req.body.eid, empname: req.body.ename};
    let ed_idd=req.params.e_id;
    await collection.updateOne({_id: new obj(ed_idd)},{$set: employee})
    res.redirect('/?status=2');
})



app.listen(4000, ()=>{
    console.log("Listening in port 4000...");
})