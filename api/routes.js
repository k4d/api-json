import data from '../data/items';

const DATA = data;

let json = {
	data : null
};

export function getAll ( request, response ) {

	json.data = DATA;

	return response.json( json );
}

export function getItemById ( request, response ) {

	let id = parseInt( request.params.id ),
		find = DATA.find( entry => entry.id === id )

	json.data = ( find !== undefined ) ? find : {};

	return response.json( json );
}