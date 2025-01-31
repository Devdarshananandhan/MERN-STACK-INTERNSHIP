const express = require("express");
const app = express();
const exhbs = require("express-handlebars");
const bodyParser = require("body-parser");
const dbo = require("./db");
// const objid = dbo.objectId;
const empmodel = require("./models/empModel");
dbo.getDatabase();
app.engine("hbs",
    exhbs.engine({
        layoutsDir:'viewsfold/',
        defaultLayout:'maincopy',
        extname:'hbs',

        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
          }
    })
);

app.set("view engine", "hbs");
app.set("views", "viewsfold");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",  async(req, res) => {
    let edit_id,edit_emp,delete_id;
 //   let database = await dbo.getDatabase();
    // const collection = database.collection("emp");
    // const cursur = collection.find({});
    // let datas = await cursur.toArray();
    let datas = await empmodel.find({});
    let message = "";
    if(req.query.edit_idd){
        edit_id = req.query.edit_idd;
       // edit_emp = await collection.findOne({_id: new objid(edit_id)});
       edit_emp = await empmodel.findById({_id:edit_id});
    }
    // if(req.query.delete_idd){
    //     delete_id = req.query.delete_idd
    //     console.log('Delete request for _id:', delete_id);
    //     await collection.deleteOne({ _id: new objid(delete_id) });
    //     res.redirect("/?status=3");
    // }
    if(req.query.delete_idd){
        delete_id = req.query.delete_idd
        await empmodel.findByIdAndDelete(delete_id);
        res.redirect("/?status=3");
    }
    if(req.query.status === '1'){
        message="Inserted Successfully";
    }
    else if(req.query.status === '2'){
        message="Updated Successfully";
    }
    else if(req.query.status === '3'){
        message="Deleted Successfully";
    }

   // console.log("The data " ,datas)
    res.render("maincopy", { message,datas,edit_id,edit_emp}); 
});    


app.post("/empinfo",async(req,res)=>{
   // const database = await dbo.getDatabase();
    //const collection = database.collection("emp");
    const employee = {empid:req.body.empid,empname:req.body.empname};
    const newEmpDoc = new empmodel(employee);
    newEmpDoc.save()
    //await collection.insertOne(employee);
    res.redirect("/?status=1");     
});

app.post("/updateinfo/:e_id",async(req,res)=>{
    //const database = await dbo.getDatabase();
    //const collection = database.collection("emp");
    const employee = {empid:req.body.empid,empname:req.body.empname};
    let ed_id = req.params.e_id;
    //await collection.updateOne({_id:new objid(ed_id)},{$set:employee});
    await empmodel.findOneAndUpdate({_id:ed_id},{$set:employee});
    res.redirect("/?status=2");
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});