import React, {useState} from "react";


//create your first component
function Home() {
	const [glowing, setGlowing] = useState('red');
	const [purpleVisible, setPurpleVisible] = useState(false);
	return (
		<div className="text-center">
				<button type="button" className="btn btn-primary" onClick={() => {
					if (glowing === "red"){setGlowing("green")}
					if (glowing === "green"){setGlowing("yellow")}
					if (glowing === "yellow"){setGlowing("red")}}}>
					Cambiar colores
				</button>
				<button type="button" className="btn btn-secondary m-3" onClick={() => setPurpleVisible(true)}>
					Luz Púrpura
				</button>
		<div className="traffic">
			<div className={"lamp red " + (glowing === "red" ? "glowingRed" : "redTenue")} onClick={() => setGlowing("red")}></div>
			<div className={"lamp yellow " + (glowing === "yellow" ? "glowingYellow" : "yellowTenue")} onClick={() => setGlowing("yellow")}></div>
			<div className={"lamp green " + (glowing === "green" ? "glowingGreen" : "greenTenue")} onClick={() => setGlowing("green")}></div>
			{purpleVisible && (
          <div
            className={"lamp purple " + (glowing === "purple" ? "glowingPurple" : "")}
            onClick={() => setGlowing("purple")}
          ></div>
        )}
			<div className="poste"></div>
		</div>

		</div>
	

	);
};
export default Home;
