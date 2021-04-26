import { Button, Input } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./App.css";
import Item from "./Item";

function App() {
	const [item, setItem] = useState("");
  const [flag, setFlag] = useState(false);
  
  const fade = (e) => {
    e.target.classList.add("goaway");
    setTimeout(() => {
      setFlag(true);
    }, 1000)
  }

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
						<Button>ADD ITEM</Button>
					</div>
				</div>
			</div>
			<div className='app__body'>
				<div className='max__width fd-c'>
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
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
