const mongoose = require("mongoose");
//Write missing code 
mongoose.connect('mongodb+srv://avinvmavolil:avinvmavolil@cluster0.jsi71d7.mongodb.net/finaldb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
  console.log('DB is connected')
}).catch((res)=>{
  console.log('DB not connected')
})
