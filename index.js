const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

mongoose.connect("mongodb://127.0.0.1:27017/sample").then(()=>{
    console.log("connected to mongoDB successfuly");
}).catch((err)=>{
    console.log(err);
})

const student = new mongoose.Schema({
    name : String,
    workout: Boolean,
    height: Number
}) ;

const Student = new mongoose.model("Student", student);

const addData = async ()=>{
    // bad practice

    // const ss = new Student({
    //     name:"khalid",
    //     workout:true,
    //     height:20
    // })

    // await ss.save();

    // const create = await Student.create({
    //     name:"uzair",
    //     workout:true,
    //     height:20
    // })

    // const find = await Student.find({height:{$gt:20}})
    // console.log(find);

    const update = await Student.update({height:20},{$set:{height:10}})
    // console.log(update)

    console.log(await Student.find())
}

// Anothe changes for MongoDB

// addData();
