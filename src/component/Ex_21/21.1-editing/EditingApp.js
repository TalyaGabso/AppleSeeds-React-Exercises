import React, { useState, useEffect, useRef } from "react";
export default () => {
	const [edit, setEdit] = useState(false);
	const inputRef = useRef();

	useEffect(() => {
		if (edit) {
			inputRef.current.focus();
		}
	}, [edit]);

	return (
		<div>
			{!edit ? (
				<input onClick={() => setEdit(!edit)} type="button" value="edit" />
			) : (
				<div>
					<input ref={inputRef} type="text" />
					<input
						onClick={() => setEdit(!edit)}
						type="button"
						value="save"
					/>
				</div>
			)}
		</div>
	);
};
