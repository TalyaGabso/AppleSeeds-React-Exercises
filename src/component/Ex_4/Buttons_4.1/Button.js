import React from "react";

const Button = (prop) => {
	return (
		<div>
			<button
				style={{
					fontWeight: prop.weight,
					height: "30px",
				}}>
          {prop.children}
        </button>
		</div>
	);
};
export default Button;
