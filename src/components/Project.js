const Project = ({ name }) => {
	return (
		<div
			className="project"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginBottom: "10px",
			}}
		>
			<div
				className="picture"
				style={{
					border: "1px solid black",
					height: "200px",
					width: "200px",
				}}
			></div>
			<div className="description">{name}</div>
		</div>
	);
};

export default Project;
