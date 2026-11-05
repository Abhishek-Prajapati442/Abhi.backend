const express= require('express');
require('dotenv').config();
const app= express();
const port = 5000;
app.get('/',(req,res)=>{
  res.send("Hello  and World")
})

app.get('/twitter', (req, res) =>{
  res.send("Twitter Api")
})
app.get('/Abhishek',(req, res)=>{
  res.send("Abhishek Prajapati");
})
app.listen(process.env.PORT,()=>{
  console.log(`Server is running on port ${process.env.PORT}`);
});