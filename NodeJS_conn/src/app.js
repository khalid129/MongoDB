// Creating connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/MERN", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

const mernSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  video: Number,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Collection creation
const MernStack = new mongoose.model("MernStack",mernSchema);

// create document or insert

// const react = new MernStack({
//     name: "React js",
//       ctype: "Front end",
//       video: 80,
//       active: true,
// })

// react.save(); 
// the above save method use promises so it is better to use async await rather than promise

// create a document using asyn await

// const creatingDocument = async()=>{
//   try{
//     const react = new MernStack({
//       name: "Node js",
//       ctype : "Back end",
//       video: 50,
//       active : true,
//     })
    
//     const result = await react.save();
//     console.log(result);
//   }catch(err){
//     console.log(err);
//   }
// }

// creatingDocument();

// Insert Many documents through Mongoose

const creatingDocument = async()=>{
  try{
    const htmlWeb = new MernStack({
      name: "HTML5",
      ctype : "Front end",
      video: 50,
      active : true,
    })
    const cssDesign = new MernStack({
      name: "CSS3",
      ctype : "Front end",
      video: 100,
      active : true,
    })
    const javascript = new MernStack({
      name: "JavaScript",
      ctype : "Front end",
      video: 70,
      active : true,
    })
    const angular = new MernStack({
      name: "Angular js",
      ctype : "Front end",
      video: 30,
      active : true,
    })
    
    const result = await MernStack.insertMany([htmlWeb,cssDesign,javascript,angular]);
    console.log(result);
  }catch(err){
    console.log(err);
  }
}

creatingDocument();
