// modulo de http eliminado porque se comienza a utilizar express

const { response, request } = require('express')
const express= require ('express') // Se importa el modulo de express
const app = express() // la instancia o app del modulo express

let datos = [     //Pseudo base de datos
    {
        'name':'Diego',
         'age':21
    },
    {
        'name':'Jose',
         'age':20
    },
    {
        'name':'Maria',
         'age':25
    },
    {
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



const PORT=3001 // especifica el puerto en que se ejecutara el server, usualmente es el 80 que por ser tan comun
//no se especifica 

app.listen(PORT,()=>{
    console.log("server running on port ".request.PORT)
}) 

/*al igual que el server anterior, se utiliza el metodo listen y el puerto personalizado
con la diferencia de que el server de express se inicializa de forma asincrona, por lo que
si queremos notificar de su inicializacion se realiza mediante un callback */