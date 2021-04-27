import { IconButton } from "@material-ui/core";
import { CancelOutlined } from "@material-ui/icons";
import React from "react";
import "./Item.css";

function Item({ task, deleteItem, id}) {
	// console.log(task);
	return (
		<div className='item'>
			<div className='item__name'>
				<p>{task}</p>
			</div>
			<IconButton title="Remove Task" onClick={() => deleteItem(id)}>
				<CancelOutlined />
			</IconButton>
		</div>
	);
}

export default Item;
