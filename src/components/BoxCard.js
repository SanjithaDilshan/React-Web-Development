import { useState } from "react";
import "./BoxCard.css";

export const BoxCard = ({ result, children }) => {
	const [show, setShow] = useState(true);

	return (
		<div className={`box ${result}`}>
			{/* Only hide/show the children, not the whole box */}
			{show && <div>{children}</div>}
				<button onClick={() => setShow(!show)} className="trigger">
					{show ? "Hide" : "Show"}
				</button>
			</div>
		
	);
};

export default BoxCard;
