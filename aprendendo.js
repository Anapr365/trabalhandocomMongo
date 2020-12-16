const mongoose =require("mongoose")

//configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
       useMongoclient: true
    }).then(() =>{
    console.log("MongoDB conectado...")
    }).catch((err) => {
        console.log("Houver um erro ao se conectar ao mongoDB:"+err)
    })
//model -usuarios
//definindo o model
const usuariosSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require:true
    },
    idade: {
        type: Number,
        require:true
    },
    pais:{
        type: String
    }
})


//collection
mongoose.model('usuarios', usuariosSchema)

const Ana = mongoose.model('usuarios')

new Ana ({
    nome: "Ana Paula",
    sobrenome: "Rosa",
    idade:40,
    email:"aprosa69@gmail.com",
    pais:"Brasil"
}).save().then(() =>{
    console.log("usuario criado com sucesso!")
}).catch((err) => {
    console.log("Houve um erro ao registrar o usuario:"+err)
})
