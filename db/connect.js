const mangoose = require('mongoose')

const connectDB = (url) =>{
    return mangoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB;
