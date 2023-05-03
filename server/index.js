const express= require('express')
const app=express()
const cors=require('cors')
require('./db/config')

app.use(express.json())
app.use(cors())
app.use(require('./routes/routes'))


const Port=5000
app.listen(Port,()=>{
    console.log(`Server is running on Port ${Port}` );
})