const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user'); // Correct import

const app = express();
const port = 3000;
var cors= require('cors')

app.use(cors())
app.use(express.json());

async function connectDb() {
  await mongoose.connect('mongodb://localhost:27017/UserDb');
}
connectDb()
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));


app.get('/',(req,res)=>{
  res.send('runnnnn')
})

app.use("/user", userRoute); // This is fine if userRoute is a valid router



app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
