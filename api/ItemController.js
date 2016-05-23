import items from '../data/items';

export class ItemController {

	constructor () {
		this.json = {
			data : null
		};
	}

	getItems () {
		this.json.data = items;

		return this.json;
	}

	getItemById ( id ) {

		let find = items.find( entry => entry.id === id );

		this.json.data = ( find !== undefined ) ? find : {};

		return this.json;
	}
}