import React from "react";
import Text from "./Text.component";
import './text.css'

const items = [
	{
		text:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, molestiae, iure delectus odio unde necessitatibus modi placeat itaque quasi sequi reiciendis earum a corporis, nemo hic quod accusantium aperiam eum ullam nihil quos. Consectetur totam ipsa excepturi. Et dicta, praesentium tempora, iusto, similique eligendi facere corporis blanditiis quam maxime explicabo maiores molestiae! Ducimus assumenda maiores quam velit eaque delectus ratione odit adipisci atque quibusdam impedit reprehenderit, consectetur quos laborum molestiae cum, suscipit aliquid ipsa modi facere, pariatur accusamus aperiam non. Eos adipisci itaque similique, error magni reiciendis, temporibus quia magnam obcaecati delectus harum laborum blanditiis doloremque quibusdam corporis dolores sequi!",
	},
	{ maxLength: 200 },
];
export default () => {
	return (
		<div>
			<Text text={items[0].text} maxLength={items[1].maxLength} />
		</div>
	);
};
