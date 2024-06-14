const {PORT} = require("./config/index.js")
const  express = require("express")
const path = require('path')
const app = express()
const {connection} = require("./model/connect.js")

app.use('/',express.static(path.join(__dirname+'/public')))


app.get("/",(req,res)=>{
    res.send(`Welcome back`)
})
app.use('/user/:id',express.static(path.join(__dirname+'/public')))
app.get("/user/:id",(req,res)=>{
    const {id}=req.params
    res.send(`Hi user ${id}`)
})


app.get("/user/:id/:action",(req,res)=>{
    const{id,action} =req.params
    res.send(`${action} user ${id}`)
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is started at port ${PORT}`)
    
})