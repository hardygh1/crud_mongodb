const mongoose = require('mongoose')

//Conexión MongoDB
const url = 'mongodb://localhost/db_mongocrud'

mongoose.connect(url,{
})
.then(()=> console.log("CONEXIÓN A MONGODB EXITOSA - CRUD PROCESANDO"))
.catch((e)=>console.log('El error de conexión es: '+ e))

//Creacion de Esquema
const personaSchema = mongoose.Schema({
    nombre:String,
    edad:Number,
    pais:String
},{versionKey: false})

const PersonaModel = mongoose.model('personas', personaSchema)

//Mostrar
const mostrar = async ()=>{
    const personas = await PersonaModel.find()
    console.log(personas)
}

//Crear
const crear = async ()=>{
    const persona = new PersonaModel({
        nombre: 'Alberto',
        edad: 25,
        pais: 'España'
    })
    const resultado = await persona.save()
    console.log(resultado)
}

//Editar
const actualizar = async (id)=>{
    const persona = await PersonaModel.updateOne({_id:id},
        {
            $set:{
                nombre: 'Alberto Mod',
                pais: 'españa mod'
            }
        })
    
}

//Borrar
const eliminar = async (id)=>{
    const persona = await PersonaModel.deleteOne({_id:id})
    console.log(persona)
}

//Llamar a los procedimientos
mostrar()
//crear()
//actualizar('626af04ab244695c75f50080')
//eliminar('626aece368dbcbd761af2b8d')