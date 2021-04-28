import { IconButton } from "@material-ui/core";
import { CancelOutlined, Check } from "@material-ui/icons";
import React from "react";
import "./Item.css";

function Item({ task, deleteItem, id }) {
	function check(e) {
		e.preventDefault();
		e.target.parentElement.classList.toggle("checked");
		e.target.classList.toggle("checked");
	}

	return (
		<div className='item' onClick={(e) => check(e)}>
			<div className='item__name'>
				<p>{task}</p>
			</div>
			<IconButton title='Remove Task' onClick={() => deleteItem(id)}>
				<CancelOutlined />
			</IconButton>
		</div>
	);
}

export default Item;
