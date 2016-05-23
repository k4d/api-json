import config		from './config';
import express		from 'express';
import * as routes	from './routes';

const APP  = express();

APP.get( '/', routes.getItems );

APP.get( '/items', routes.getItems );

APP.get( '/items/:id', routes.getItemById );

APP.listen( config.serverPort, () => {
	console.log( `Server is running on port ${config.serverPort}` );
});