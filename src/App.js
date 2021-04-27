import { Button, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import Item from "./Item";
import firebase from "firebase";

function App() {
	const [item, setItem] = useState("");
	const [flag, setFlag] = useState(false);
	const [task, setTask] = useState([]);

	const fade = (e) => {
		e.preventDefault();
		e.target.classList.add("goaway");
		setTimeout(() => {
			setFlag(true);
		}, 1000);
	};

	const addItem = (e) => {
		e.preventDefault();
		db.collection("tasks").add({
			task: item,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setItem("");
	};

	const deleteItem = (id) => {
		db.collection("tasks")
			.doc(id)
			.delete()
			.then(() => {
				alert("Task Removed!");
			})
			.catch((err) => {
				alert(err.message);
			});
		console.log(id);
	};

	useEffect(() => {
		db.collection("tasks")
			.orderBy("timestamp", "asc")
			.onSnapshot((snapshot) => {
				setTask(snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data()
				})));
			});
	}, []);

	return flag ? (
		<div className='app'>
			<div className='app__header'>
				<div className='max__width'>
					<div className='fx'>
						<Input
							type='text'
							value={item}
							onChange={(e) => setItem(e.target.value)}
							style={{ flex: "1" }}
						/>
						<Button onClick={(e) => addItem(e)}>ADD ITEM</Button>
					</div>
				</div>
			</div>
			<div className='app__body'>
				<div className='max__width fd-c'>
					{task.map((t) => (
						<Item task={t.data.task} deleteItem={deleteItem} id={t.id} />
					))}
				</div>
			</div>
		</div>
	) : (
		<div className='startup' id='start' onClick={(e) => fade(e)}>
			<h1>TODO WEB APP</h1>
			<p>TAP TO START</p>
		</div>
	);
}

export default App;
