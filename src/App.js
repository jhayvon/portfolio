import Project from "./components/Project";

// import { motion } from "framer-motion";
const App = () => {
	return (
		<>
			<div
				className="intro"
				style={{
					display: "flex",
					justifyContent: "center",
					height: "80vh",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<p>HELLO I'M</p>
				<h1>JHAYVON ADELAN</h1>
			</div>
			<div className="project">
				<h1>Projects</h1>

				<Project name="Calculator" />
				<Project name="Todo list" />
				<Project name="Turnover calculator" />
			</div>
		</>
	);
};

export default App;
