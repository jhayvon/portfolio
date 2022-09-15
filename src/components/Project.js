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
			<div className="description">
				<p style={{ fontWeight: "300", fontSize: "1.2rem", margin: "0" }}>
					{name}
				</p>
			</div>
		</div>
	);
};

export default Project;
