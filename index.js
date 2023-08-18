//mongodb+srv://rajatdhull37:mern-blog@0037@cluster0.a7mmzsf.mongodb.net/?retryWrites=true&w=majority
//mern-blog@0037
const express =require('express');
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const user=require('./models/user');
const blog=require('./models/blog')
const cookieParser = require('cookie-parser');
app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://rajatdhull37:mern-blog@cluster0.5z8fiqu.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{ 
        app.listen(4000,()=>{
            console.log("Server started at port "+4000);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
    
app.use("/user",userRouter);
app.use("/blog",blogRouter);
// app.post('/test',(req,res)=>{
//     const {email,username,password}=req.body;
//     // console.log(email,username,password);
//     // const userDoc=User.create({email,username,password});
//     res.json(req);
// })
// app.listen(4000);