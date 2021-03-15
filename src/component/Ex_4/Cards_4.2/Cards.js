import React from "react";
import Card from "./Card.component";
import './cards.css'

function App() {
	return (
		<div>
			<Card
				source={"https://source.unsplash.com/user/erondu/300x400"}
				title={"lorem"}
				description={"lore picsum"}
				share={"https://picsum.photos/"}
				explore={"https://unsplash.com/"}
			/>
			<Card
				source={"https://source.unsplash.com/300x400/?nature,water"}
				title={"lorem"}
				description={"lore picsum"}
				share={"https://picsum.photos/"}
				explore={"https://unsplash.com/"}
        />
			<Card
				source={"https://source.unsplash.com/300x400/?people,architecture"}
				title={"lorem"}
				description={"lore picsum"}
				share={"https://picsum.photos/"}
				explore={"https://unsplash.com/"}
			/>
		</div>
	);
}
export default App;
