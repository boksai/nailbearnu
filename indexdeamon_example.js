const {add,name,add2}  = require("../datasource/data.js")

console.log("tong",add2(19,1))
console.log("tong",add(19,1))
console.log(name)
console.log("Welcome Back")

const http=require("http")

const server=http.createServer((req,res)=>{
  /*   console.log("Server is started...") */
  /*   console.log("Request:",req) */
  /*   res.write("<h1>Welcome</h1>") */
  /*   res.end() */
  const {url} = req
  res.write("<h1>Hello"+ url +"</h1>")
  if(req.url==="/hocnodejs")
    res.write("<h1>Server is started...</h1>")
  else
    res.write("<h1>Hello</h1>")

   res.end()
})

server.listen(3000)
