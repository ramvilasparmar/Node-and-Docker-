const express = require("express");
const app = express();
app.get("/",(req, res)=>{
    res.json([
        {
            id:1,
            name:"RamVilas Rajput",
            age:31
        },
        {
            id:2,
            name:"Vaidika Rajput",
            age:3
        },
        {
            id:3,
            name:"Siya Rajput",
            age:32
        },
        {
            id:4,
            name:"Sweety Rajput",
            age:30
        },
    ])
});
app.listen(5000,()=>{
    console.log("app is runing on 5000 port")
})