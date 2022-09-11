import {
	FaHome,
	FaBriefcase,
	FaEnvelope,
	FaGithub,
	FaStackOverflow,
	FaFacebook,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Navigation.css";

const Navigation = () => {
	return (
		<>
			<nav>
				<div className="logo"></div>
				<ul className="menu">
					<IconContext.Provider value={{ size: 40 }}>
						<li>
							<FaHome />
						</li>
						<li>
							<FaBriefcase />
						</li>
						<li>
							<FaEnvelope />
						</li>
					</IconContext.Provider>
				</ul>
				<ul className="links">
					<IconContext.Provider value={{ size: 28 }}>
						<li>
							<FaGithub />
						</li>
						<li>
							<FaStackOverflow />
						</li>
						<li>
							<FaFacebook />
						</li>
					</IconContext.Provider>
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
