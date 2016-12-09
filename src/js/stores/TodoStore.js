/*
* exports an object
* components will listen to the store
* react when store is changed
*
*/
import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

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


	createTodo(text) {
		const id = Date.now();
		this.todos.push({
			id,
			text,
			complete: false,
		});

		this.emit("change");
	}

	getAll(){
		return this.todos;
	}


	handleActions(action) {
		//console.log("TodoStore received an action", action);
		switch(action.type){
			case "CREATE_TODO":{
				this.createTodo(action.text);
			}

			case "RECEIVE_TODOS":{
				//this.receiveTodos(todos);
				this.todos = action.todos;
				this.emit("change");
			}
		}
	}


}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore))
//window.dispatcher = dispatcher;

export default todoStore;