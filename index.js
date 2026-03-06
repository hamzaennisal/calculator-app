const express = require('express')
const app = express()

app.get('/add/:a/:b',(req,res)=>{
 const a = parseInt(req.params.a)
 const b = parseInt(req.params.b)

 res.json({result:a+b})
})

app.listen(3000,()=>{
 console.log("Server running on port 3000")
})