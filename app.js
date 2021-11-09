require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static( 'public' ) ); // Esta ruta tiene mas prioridad que las de abajo, si tienen el mismo nombre se queda con esta

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Guillermo Godoy',
        titulo: 'Curso de Node'
    });
})
 
app.get('/pindonga', (req, res) => {
    res.send('Hola mundo desde la ruta pindonga'); // send manda la informacion
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Guillermo Godoy',
        titulo: 'Curso de Node'
    });
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Guillermo Godoy',
        titulo: 'Curso de Node'
    });
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html'); // sendFile manda el archivo Y ADEMAS hay que agregar __dirname y / al principio de la URL 
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})