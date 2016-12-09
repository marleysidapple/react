/*
* exports an object
* components will listen to the store
* react when store is changed
*
*/
import { EventEmitter } from "events";

class TodoStore extends EventEmitter{
	constructor() {
		super();
		this.todos = [
		{
			id: 123,
			text: "Go Shopping",
			complete: false
		},
		{
			id: 456,
			text: "Pay Bills",
			complete: false
		},
		{
			id: 458,
			text: "Ask Rabin Bro",
			complete: false
		}		
		];

	}

		getAll(){
			return this.todos;
		}
}

const todoStore = new TodoStore;

export default todoStore;