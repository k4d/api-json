import express from 'express';
import data    from '../data/items';

const APP  = express();
const DATA = data;

APP.get( '/', ( request, response ) => {
    response.json( DATA );
});

APP.listen( 8080, () => {
    console.log( 'Server is running on port 8080' );
});