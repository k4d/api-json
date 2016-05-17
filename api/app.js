import express from 'express';

const APP = express();

APP.get( '/', ( require, response ) => {
    response.send( 'Server is running on port 8080' );
});

APP.listen( 8080, () => {
    console.log( 'Server is running on port 8080' );
});