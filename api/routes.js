import {ItemController} from './ItemController';

let controller = new ItemController();

export function getItems ( request, response ) {
	return response.json( controller.getItems() );
}

export function getItemById ( request, response ) {

	let id = parseInt( request.params.id );

	return response.json( controller.getItemById( id ) );
}