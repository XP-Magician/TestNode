const http=require('http') //Especifico utilizacion de API para trabajar con HTTP

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


const app = http.createServer((request,response)=>{  //Cada vez que reciba una peticion, callback a response:
    response.writeHead(200,{'Content-Type':'application/json'}) /*Response = estado de peticion 200 (exitoso),cabecera
    que especifica el tipo de dato devuelto (!importante) */
    response.end(JSON.stringify(datos)) // Termina la respuesta y devuelve el parametro entregado
    //parsea el json para que sea legible
})

const PORT=3001 // especifica el puerto en que se ejecutara el server, usualmente es el 80 que por ser tan comun
//no se especifica 

app.listen(PORT) //le decimos al server que escuche en el puerto especifico que creamos anteriormente
console.log('Server running on port $(PORT)') //Enviamos un mensaje al ejecutar el servidor