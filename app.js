require("dotenv").config();

const express = require ('express')
const cors = require ('cors');
const jwt = require ("jsonwebtoken");
const { db } = require('./db/db')
const {readdirSync} = require('fs')
const app = express()
const jwtSecret = process.env.JWT_SECRET;

const PORT = process.env.PORT

//Router principal
const generalRouter = require('./routes');
 //middlewares   
app.use(generalRouter);

//routes
 readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
    console.log("Petición a TEST");
    res.json({
        success:true, 
        message: "¡API Respondiendo!",
    });
});

app.listen(process.env.PORT || '0.0.0.0:$PORT', () => {
    console.log("Servidor rulando");
})


const server = () => {
    db()
    app.listen(PORT, () =>{
        console.log('listening to port:', PORT)
    })
}

