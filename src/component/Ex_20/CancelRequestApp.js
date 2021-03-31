import React,{useState} from "react";
import Request from "./Request.component";

export default () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div>
      <input onClick={() => setToggle(!toggle)} type="button" value={toggle ? "Hide" : "Display"}/>
			<span>{toggle ? <Request /> : ""}</span>
		</div>
	);
};

