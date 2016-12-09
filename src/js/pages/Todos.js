import React from "react";
import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component{

	constructor() {
		super();
		this.state = {
			todos: TodoStore.getAll(),
		};		
	}


	//fires only first time. eventlistener
	componentWillMount() {
		TodoStore.on("change", () => {
			this.setState({
				todos: TodoStore.getAll()
			});	
		});
	}


	createTodo(){
	    //input
	    const todoTitle = this.state.mytodo;
		TodoActions.createTodo(todoTitle);
	}


	handleChange(e){
		// const todo = e.target.value;
		// console.log(todo);
		this.setState({ mytodo: e.target.value });
	}


	render(){
		const { todos } = this.state;
		const TodoComponents = todos.map((todo) => {
			return <Todo key={todo.id} {...todo}/>;
		});

		return(
		    <div>
		      <button onClick={this.createTodo.bind(this)}>Create Todo</button>
		      <input onChange={this.handleChange.bind(this)}/>
		       <h4>List Of Todos</h4>
			   <ul>{TodoComponents}</ul>
			</div>
			);
	}
}