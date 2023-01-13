// modulo de http eliminado porque se comienza a utilizar express

const { response, request } = require('express')
const express= require ('express') // Se importa el modulo de express
const app = express() // la instancia o app del modulo express

let datos = [     //Pseudo base de datos
    {
        'id':1,
        'name':'Diego',
         'age':21
    },
    {
        'id':2,
        'name':'Jose',
         'age':20
    },
    {
        'id':3,
        'name':'Maria',
         'age':25
    },
    {
        'id':4,
        'name':'Javiera',
         'age':24
    }
]

app.get('/saludo',(request,response)=>{   //con una peticion tipo get , en el path '/saludo' la respuesta es...
    response.send('<h1>Hola</h1>')
})

app.get('/datos',(request,response)=>{  // en una peticion tipo get en el path ('/datos) devuelve un json formateado
   response.json(datos)
})

app.get('/datos/:id',(request,response)=>{
    const id=Number(request.params.id) //recupero el id de los parametros enviados en el request, lo parseo
    const note= datos.find(notes=>notes.id===id) // encuentro solo la nota correspondiente al id solicitado
    note!=undefined?response.json(note):response.status(404).end() // si existe devuelvo la nota y sino 404
})

app.delete('/datos/:id',(request,response)=>{
    const id=Number(request.params.id) //recupero el id de los parametros enviados en el request, lo parseo
    datos=datos.filter(notes=>notes.id!==id)
    response.status(202).end();
})



const PORT=3001 // especifica el puerto en que se ejecutara el server, usualmente es el 80 que por ser tan comun
//no se especifica 

app.listen(PORT,()=>{

    console.log("server running on port ".PORT)
}) 

/*al igual que el server anterior, se utiliza el metodo listen y el puerto personalizado
con la diferencia de que el server de express se inicializa de forma asincrona, por lo que
si queremos notificar de su inicializacion se realiza mediante un callback */