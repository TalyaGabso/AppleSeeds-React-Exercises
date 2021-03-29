import React from "react";
import ToDoList from './ToDoList.component';

const itemsList = [
	{ name: "css", completed: true },
	{ name: "JavaScript", completed: true },
	{ name: "Learn React", completed: false },
	{ name: "Learn mongoDB", completed: false },
	{ name: "Learn Node JS", completed: false },
];
export default () => {
	return (
		<div>
			<ToDoList itemsList ={itemsList}/>
		</div>
	);
};
