const express = require('express')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const userModel = require('./models')
require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const port = process.env.PORT || 3000

const bcryptSalt = bcrypt.genSaltSync(12)

app.use(express.json())

app.use(cors({
    credential:true,
    origin:"http://localhost:5173"
})); 

const Option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

mongoose.connect(process.env.DATABASE,Option)
.then(()=>console.log('connected'))
.catch(e=>console.log(e));

//const db = mongoose.connection;
//db.on("error",console.log.bind(console,"connection error: "));
//db.once("open",() => {
//    console.log("Connected successfully")
//});

const jwtSecret = "vchxfxnxxfxtffh"


app.post('/register', async (req,res) => {
   const {name , email , password} = req.body
   
   try {
    const user = await userModel.create({
    name,
    email,
    password:bcrypt.hashSync(password,bcryptSalt)
   });
   res.json(user)
    
   } catch (error) {
    res.status(422).json(error)
   }
});

app.post('/login',async (req,res) => {
    const {email, password} = req.body

    const user = await userModel.findOne({email});

    if(user){
        const passOk = bcrypt.compareSync(password,user.password);
        if(passOk){
            jwt.sign({email:user.email,id:user._id},jwtSecret,{}, (err,token) => {
                if(err) throw err;

                res.cookie('token',token).json('pass ok')
            });
        }
        else{
            res.status(422).json("pass not ok")
        }
    }
    else{
        res.json('not found')
    }
})


app.listen(port,() => {
    console.log(`server is running at port ${process.env.PORT}`)
})