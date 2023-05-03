const mongoose=require('mongoose')

const ServicesSchema=new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  selectedServices: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  }

})

const ServData= mongoose.model('Services',ServicesSchema)

module.exports=ServData