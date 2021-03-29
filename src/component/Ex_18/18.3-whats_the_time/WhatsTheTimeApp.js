import React from "react";
import TheTime from './TheTime.component';

const items = ['seconds','minutes','hours'];
export default () => {
	return (
		<div>
			<TheTime items={items}/>
		</div>
	);
};
