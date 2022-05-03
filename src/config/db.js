const mongoose = require ('mongoose')
const DB_URI= `mongodb:localhost:27017/dbfondos`

module.exports =()=>{
    const connect = () =>{
        DB_URI,
        {
            KeepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (error)=>{
            if (err){
                console.log('DB: ERROR')
            }
            else{
                console.log('conexion correcta')
            }
        }

    }
    connect();
}
