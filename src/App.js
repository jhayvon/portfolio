import "./App.css";
import Project from "./components/Project";
import Footer from "./components/Footer";
const App = () => {
	return (
		<div className="app">
			<div className="intro">
				<p>Hello I'm</p>
				<h1>Jhayvon Adelan</h1>
				<span>Aspiring web developer!</span>
				<button>contact me?</button>
			</div>
			<h1
				style={{
					width: "100%",
					textAlign: "center",
					marginBottom: "50px",
					color: "#ff8552",
				}}
			>
				Projects
			</h1>
			<Project name="Todo list" />
			<Project name="Shirahata salon" />
			<Footer />
		</div>
	);
};

export default App;
