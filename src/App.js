import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import Table from './components/Table';

function App() {

	const data = [
		{ title: 'Membuat component form', status: false },
		{ title: 'Membuat component table', status: false },
		{ title: 'Membuat tutorial to do menggunakan react hooks', status: false },
	]
	
	const [todos, setTodos] = useState(data)

	const handleForm = val => {
		const newTodos = [...todos, { title: val, status: false }]
		setTodos(newTodos)
	}

	const handleDelete = index => {
		const newTodos = [...todos]
		if (index > -1) {
			newTodos.splice(index, 1);
		}
		setTodos(newTodos);
	}

	const handleCheck = (index, stat) => {
		const newTodos = [...todos]
		newTodos[index].status = stat
		setTodos(newTodos);
		console.log(newTodos);
	}

	return (
		<div className="App">
			<img className="mb-3" src={process.env.PUBLIC_URL + '/logo192.png'} height="100px" alt="react todo"/>
			<h1>React Hooks ToDo</h1>
			<Table data={todos} onDeleteTodos={handleDelete} onCheckedTodos={handleCheck}/>
			<Form onSubmitTodos={handleForm}/>
		</div>
	);
}

export default App;
