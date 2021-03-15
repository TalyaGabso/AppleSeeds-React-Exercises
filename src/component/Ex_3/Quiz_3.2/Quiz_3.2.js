// import libaries
import QuizTitle from "./QuizTitle";
import Q1 from "./Q1";
import Q2 from "./Q2";
import "./quiz.css";

// import css

// component
const Quiz = () => {
	return (
		<div className="container">
			<QuizTitle />
			<Q1 />
			<Q2 />
		</div>
	);
};

export default Quiz;
