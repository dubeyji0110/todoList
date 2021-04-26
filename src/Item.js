import { IconButton } from "@material-ui/core";
import { CancelOutlined } from "@material-ui/icons";
import React from "react";
import "./Item.css";

function Item() {
	return (
		<div className='item'>
                <div className='item__name'>
                    <p>Aaloo</p>
                </div>
				<IconButton>
					<CancelOutlined />
				</IconButton>
		</div>
	);
}

export default Item;
