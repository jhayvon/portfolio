import Navigation from "./Navigation";
import { motion } from "framer-motion";
const App = () => {
	return (
		<>
			<Navigation />
			<div className="main" style={{ marginLeft: "80px" }}>
				<motion.h1
					animate={{ x: "30%", y: "40vh" }}
					transition={{ duration: 1 }}
					style={{
						fontSize: "2.5rem",
						textShadow: "10px 10px 10px rgba(150, 150, 150, 1)",
					}}
				>
					hello i'm jhayvon adelan
				</motion.h1>
			</div>
		</>
	);
};

export default App;
