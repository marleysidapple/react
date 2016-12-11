import dispatcher from "../dispatcher";
import axios from "axios";

export function createTodo(text) {
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text,
	});
}


export function deleteTodo(id) {
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id,
	});
}

export function reloadTodos() {
	// axios.get("https://jsonplaceholder.typicode.com/todos/1").then((todo) => {
	// 	console.log(todo.data);
	// });

	dispatcher.dispatch({type: "FETCH_TODOS"});
	setTimeout(() => {
		dispatcher.dispatch({type: "RECEIVE_TODOS", todos:[
		{
			id: 12312,
			title: "play football",
			completed:false
		},
		{
			id: 2312,
			title: "walk the dog",
			completed: true
		},	

			]});

		/*if (false){
			dispatcher.dispatch({type: "FETCH_TODOS_ERROR"})
		}*/
	}, 2000);
}