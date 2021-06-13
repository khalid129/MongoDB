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

const react = new MernStack({
    name: "React js",
      ctype: "Front end",
      video: 80,
      active: true,
})

react.save();
