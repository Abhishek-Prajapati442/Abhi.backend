const express= require('express');
require('dotenv').config();
const app= express();
const port = 5000;
const users = [
  {
    id: 1,
    name: "Abhishek",
    age: 21,
    city: "Ranchi"
  },
  {
    id: 2,
    name: "Rahul",
    age: 22,
    city: "Delhi"
  },
  {
    id: 3,
    name: "Priya",
    age: 20,
    city: "Mumbai"
  }
];
app.get('/',(req,res)=>{
  res.send("Hello  and World")
})

app.get('/twitter', (req, res) =>{
  res.send("Twitter Api")
})
app.get('/Abhishek',(req, res)=>{
  res.send("Abhishek Prajapati");
})
app.get('/users',(req,res)=>{
  res.json(users);
})
app.listen(process.env.PORT,()=>{
  console.log(`Server is running on port ${process.env.PORT}`);
});