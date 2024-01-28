import { fileURLToPath } from 'url';
import { dirname } from 'path';

import hbs from "hbs";
import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const port = process.env.PORT;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



app.set( 'view engine', 'hbs' );
hbs.registerPartials( __dirname + '/views/partials', function (err) {} );

app.use( express.static( 'public' ) );

app.get('/', function (req, res) {
    res.render( 'home', {
        nombre: 'Marcelo',
        titulo: 'Curso de NODEJS'
    } );
});

app.get('/generic', function (req, res) {
    res.render( 'generic', {
        nombre: 'Marcelo',
        titulo: 'Curso de NODEJS'
    } );
});

app.get('/elements', function (req, res) {
    res.render( 'elements', {
        nombre: 'Marcelo',
        titulo: 'Curso de NODEJS'
    } );
});


app.get('*', function (req, res) {
    console.log(__filename, __dirname);
    res.sendFile( __dirname + '/public/404.html' )
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})