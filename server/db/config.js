const mongoose=require('mongoose')

const URI='mongodb://localhost:27017/barbershop'

mongoose.connect(URI)
                .then(()=>{
                     console.log('Connection established')
                })
                .catch((e)=>{
                     console.log(`Something wrong in Connection`,e);
                })


